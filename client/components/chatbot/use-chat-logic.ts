"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ChatMessage,
  initialMessages,
  afterHiMessages,
  afterJoinedMessages,
  programsMessage,
  courseFees,
  botResponses,
  ChatFormData,
  courseDetailActions,
  careerSupportContent,
  careerSupportActions,
  talkToAdvisorActions,
  connectingMessage,
  enrollNowMessages,
  suitabilityTestMessage,
  discoveryCallMessage,
} from "@/constants/chatbot";

export type ChatState =
  | "initial"
  | "awaiting-form"
  | "form-visible"
  | "joined"
  | "chatting";

export interface ChatSession {
  id: string;
  updatedAt: Date;
  preview: string;
  messages: ChatMessage[];
  chatState: ChatState;
}

const STORAGE_KEY = "ayonaire_chat_sessions";

export function useChatLogic() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [chatState, setChatState] = useState<ChatState>("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  // Load sessions from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Revive dates
        const revived = parsed.map((s: any) => ({
          ...s,
          updatedAt: new Date(s.updatedAt),
          messages: s.messages.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          })),
        }));
        setSessions(revived);

        // Restore last session if available, otherwise create new
        if (revived.length > 0) {
          const lastSession = revived[0];
          setCurrentSessionId(lastSession.id);
          setMessages(lastSession.messages);
          setChatState(lastSession.chatState);
        } else {
          createNewChat();
        }
      } catch (e) {
        console.error("Failed to parse chat sessions", e);
        createNewChat();
      }
    } else {
      createNewChat();
    }
  }, []);

  // Save current session whenever messages or state changes
  useEffect(() => {
    if (!currentSessionId) return;

    // Don't save if it's just the initial state/messages
    // We check if there are any user messages or if the chat state has advanced beyond initial/form-visible without messages
    // Actually, user wants to save ONLY when user sends a message.
    const hasUserMessages = messages.some((m) => m.type === "user");
    if (!hasUserMessages) return;

    setSessions((prev) => {
      const existingIndex = prev.findIndex((s) => s.id === currentSessionId);

      // Find the last meaningful message for preview
      // Prioritize user messages or the very last message
      const lastMessage = messages[messages.length - 1];
      let preview = "";

      if (lastMessage?.type === "user") {
        preview = `You: ${lastMessage.content}`;
      } else if (lastMessage?.type === "bot") {
        preview = `Ayonaire: ${lastMessage.content?.slice(0, 30)}${
          (lastMessage.content?.length || 0) > 30 ? "..." : ""
        }`;
      } else {
        preview = "New Chat";
      }

      const updatedSession: ChatSession = {
        id: currentSessionId,
        updatedAt: new Date(),
        preview,
        messages,
        chatState,
      };

      let newSessions;
      if (existingIndex >= 0) {
        newSessions = [...prev];
        newSessions[existingIndex] = updatedSession;
      } else {
        newSessions = [updatedSession, ...prev];
      }

      // Sort by recency
      newSessions.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSessions));
      return newSessions;
    });
  }, [messages, chatState, currentSessionId]);

  const createNewChat = useCallback(() => {
    const newId = Date.now().toString();
    setCurrentSessionId(newId);
    setMessages(initialMessages);
    setChatState("initial");
    setShowHistory(false);
  }, []);

  const loadChat = useCallback(
    (sessionId: string) => {
      const session = sessions.find((s) => s.id === sessionId);
      if (session) {
        setCurrentSessionId(session.id);
        setMessages(session.messages);
        setChatState(session.chatState);
        setShowHistory(false);
      }
    },
    [sessions]
  );

  const deleteChat = useCallback(
    (sessionId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newSessions = sessions.filter((s) => s.id !== sessionId);
      setSessions(newSessions);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSessions));

      if (currentSessionId === sessionId) {
        if (newSessions.length > 0) {
          loadChat(newSessions[0].id);
        } else {
          createNewChat();
        }
      }
    },
    [sessions, currentSessionId, loadChat, createNewChat]
  );

  const toggleHistory = () => setShowHistory((prev) => !prev);

  const addBotMessages = useCallback(
    async (newMessages: ChatMessage[], delay = 800) => {
      setIsTyping(true);
      for (const msg of newMessages) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        setMessages((prev) => [
          ...prev,
          { ...msg, id: `${msg.id}-${Date.now()}` },
        ]);
      }
      setIsTyping(false);
    },
    []
  );

  const handleSendMessage = useCallback(
    async (text: string, file?: any) => {
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        type: "user",
        content: text,
        timestamp: new Date(),
        file: file,
      };

      setMessages((prev) => [...prev, userMessage]);

      if (chatState === "initial") {
        setChatState("form-visible");
        await addBotMessages(afterHiMessages);
      } else if (chatState === "chatting") {
        const lowerText = text.toLowerCase();
        let responseKey = "default";

        if (lowerText.includes("hello") || lowerText.includes("hi")) {
          responseKey = "hi";
        } else if (
          lowerText.includes("price") ||
          lowerText.includes("cost") ||
          lowerText.includes("fee")
        ) {
          responseKey = "price";
        } else if (lowerText.includes("course")) {
          responseKey = "courses";
        } else if (lowerText.includes("help")) {
          responseKey = "help";
        }

        const courseMatch = Object.keys(courseFees).find((slug) =>
          lowerText.includes(slug.replace("-", " "))
        );

        if (courseMatch) {
          const course = courseFees[courseMatch];
          setSelectedCourse(courseMatch);
          const botMessage: ChatMessage = {
            id: `bot-${Date.now()}`,
            type: "bot",
            avatar: "ayobami",
            content: `Here are the details for ${course.name}
Fees
• Full Price: ${course.fullPrice}
• Discounted Price: ${course.discountedPrice}

Program Highlights
${course.highlights?.map((h) => `• ${h}`).join("\n")}`,
            actions: courseDetailActions,
            timestamp: new Date(),
          };
          await addBotMessages([botMessage]);
        } else {
          const botMessage: ChatMessage = {
            id: `bot-${Date.now()}`,
            type: "bot",
            avatar: "ayobami",
            content: botResponses[responseKey],
            timestamp: new Date(),
          };
          await addBotMessages([botMessage]);
        }
      }
    },
    [chatState, addBotMessages]
  );

  const handleFormSubmit = useCallback(
    async (formData: ChatFormData) => {
      console.log("Form submitted:", formData);
      setChatState("joined");
      await addBotMessages(afterJoinedMessages);
      setChatState("chatting");
    },
    [addBotMessages]
  );

  const handleActionClick = useCallback(
    async (actionId: string) => {
      if (actionId === "1") {
        // View Courses
        await addBotMessages([programsMessage]);
        const programsListMessage: ChatMessage = {
          id: `programs-${Date.now()}`,
          type: "program-selection", // Using new type
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, programsListMessage]);
        return;
      }

      const actionsMap: Record<string, () => Promise<void>> = {
        "course-curriculum": async () => {
          const course = selectedCourse ? courseFees[selectedCourse] : null;
          await addBotMessages([
            {
              id: `curriculum-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: `Here's the curriculum overview for ${
                course?.name || "this program"
              }:

Our comprehensive curriculum covers:
• Foundation & Core Concepts
• Hands-on Projects & Case Studies
• Industry Tools & Technologies
• Capstone Project
• Career Preparation Module

Visit our website to download the full curriculum brochure.`,
              actions: [
                {
                  id: "back-to-course",
                  label: "Back To Course Details",
                  type: "secondary",
                },
                { id: "enroll-now", label: "Enroll Now", type: "primary" },
              ],
              timestamp: new Date(),
            },
          ]);
        },
        "upcoming-dates": async () => {
          await addBotMessages([
            {
              id: `dates-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: `Upcoming Cohort Start Dates:

📅 February 2026 Cohort - Starting Feb 3rd
📅 March 2026 Cohort - Starting Mar 10th
📅 April 2026 Cohort - Starting Apr 7th

Classes are held on weekends (Saturdays & Sundays).
Limited seats available per cohort!`,
              actions: [
                {
                  id: "back-to-course",
                  label: "Back To Course Details",
                  type: "secondary",
                },
                { id: "enroll-now", label: "Enroll Now", type: "primary" },
              ],
              timestamp: new Date(),
            },
          ]);
        },
        "career-support": async () => {
          await addBotMessages([
            {
              id: `career-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: careerSupportContent,
              actions: careerSupportActions,
              timestamp: new Date(),
            },
          ]);
        },
        "back-to-course": async () => {
          if (selectedCourse) {
            const course = courseFees[selectedCourse];
            await addBotMessages([
              {
                id: `details-${Date.now()}`,
                type: "bot",
                avatar: "ayobami",
                content: `Here are the details for ${course.name}
Fees
• Full Price: ${course.fullPrice}
• Discounted Price: ${course.discountedPrice}

Program Highlights
${course.highlights?.map((h) => `• ${h}`).join("\n")}`,
                actions: courseDetailActions,
                timestamp: new Date(),
              },
            ]);
          }
        },
        "talk-advisor": async () => {
          await addBotMessages([
            {
              id: `advisor-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: "How would you like to connect with our advisor?",
              actions: talkToAdvisorActions,
              timestamp: new Date(),
            },
          ]);
        },
        "chat-advisor": async () => {
          await addBotMessages([
            {
              id: `connect-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: connectingMessage,
              timestamp: new Date(),
            },
            suitabilityTestMessage,
            discoveryCallMessage,
          ]);
        },
        "request-callback": async () => {
          await addBotMessages([
            {
              id: `callback-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: `Great! We'll call you back shortly.

Please ensure your phone number is correct. Our advisor will reach out within the next 24 hours.

📞 Or call us directly: +234 906 783 5701`,
              timestamp: new Date(),
            },
          ]);
        },
        "enroll-now": async () => {
          await addBotMessages(enrollNowMessages);
          setMessages((prev) => [
            ...prev,
            {
              id: `advisor-btn-${Date.now()}`,
              type: "bot",
              avatar: "ayobami",
              content: "",
              actions: [
                {
                  id: "chat-advisor",
                  label: "Chat With An Advisor",
                  type: "primary",
                },
              ],
              timestamp: new Date(),
            },
          ]);
        },
      };

      if (actionsMap[actionId]) {
        await actionsMap[actionId]();
      }
    },
    [addBotMessages, selectedCourse]
  );

  const handleProgramClick = useCallback(
    async (programSlug: string) => {
      const course = courseFees[programSlug];
      if (course) {
        setSelectedCourse(programSlug);
        await addBotMessages([
          {
            id: `details-${Date.now()}`,
            type: "bot",
            avatar: "ayobami",
            content: `Here are the details for ${course.name}
Fees
• Full Price: ${course.fullPrice}
• Discounted Price: ${course.discountedPrice}

Program Highlights
${course.highlights?.map((h) => `• ${h}`).join("\n")}`,
            actions: courseDetailActions,
            timestamp: new Date(),
          },
        ]);
      }
    },
    [addBotMessages]
  );

  return {
    messages,
    chatState,
    isTyping,
    sessions,
    showHistory,
    currentSessionId,
    toggleHistory,
    createNewChat,
    loadChat,
    deleteChat,
    handleSendMessage,
    handleFormSubmit,
    handleActionClick,
    handleProgramClick,
  };
}
