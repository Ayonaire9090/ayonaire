//Types
export type MessageStatus = "sent" | "delivered" | "seen";
export type MessageType = "text" | "image" | "system" | "video" | "file";
export type ConversationType = "group" | "individual";

export interface User {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  lastSeen?: string;
}

export interface Message {
  id: string;
  senderId: string; // "me" for outgoing
  senderName: string;
  senderAvatar: string;
  content: string;
  type: MessageType;
  timestamp: string;
  status: MessageStatus;
  replyTo?: {
    senderName: string;
    content: string;
  };
  images?: string[];
  video?: string;
  file?: {
    name: string;
    size: string;
    url: string;
  };
  edited?: boolean;
}

export interface Conversation {
  id: string;
  type: ConversationType;
  title: string;
  subtitle?: string;
  avatar: string;
  role?: string;
  course?: string;
  online?: boolean;
  lastSeen?: string;
  messages: Message[];
}

// Mock Users
const CURRENT_USER: User = {
  id: "me",
  name: "You",
  avatar: "/assets/persons/mr-ayo.png",
  online: true,
};

// Group Conversation
const GROUP_MESSAGES: Message[] = [
  {
    id: "gm-system-1",
    senderId: "system",
    senderName: "",
    senderAvatar: "",
    content: "",
    type: "system",
    timestamp: "08:00 PM",
    status: "seen",
  },
  {
    id: "gm-1",
    senderId: "ayobami",
    senderName: "Ayobami Awosanya",
    senderAvatar: "/assets/persons/mr-ayo.png",
    content:
      "Hi, can someone please tell me which Apple laptop is best for this entire course ?\nI am also planning to install Ollama, claude code via terminal, antigravity and also use it for this course",
    type: "text",
    timestamp: "08:00 PM",
    status: "seen",
  },
  {
    id: "gm-2",
    senderId: "ayobami",
    senderName: "Ayobami Awosanya",
    senderAvatar: "/assets/persons/mr-ayo.png",
    content:
      "It all depend on what parameter LLM models you want to run locally. Claude code/Anti gravity etc can be run easily on 8 GB system. I would still recommend you to go with 16GB minimum macbook/pro assuming you want to run small models locally.",
    type: "text",
    timestamp: "08:00 PM",
    status: "seen",
    replyTo: {
      senderName: "Ayobami Awosanya",
      content:
        "Hi, can someone please tell me which Apple laptop is best for this entire course ?\nI am also planning to install Ollama, claude code via terminal, antigravity and also use it for this course",
    },
  },
  {
    id: "gm-4",
    senderId: "me",
    senderName: "You",
    senderAvatar: CURRENT_USER.avatar,
    content:
      "Hi, can someone please tell me which Apple laptop is best for this entire course ?\nI am also planning to install Ollama, claude code via terminal, antigravity and also use it for this course",
    type: "text",
    timestamp: "08:00 PM",
    status: "seen",
  },
  {
    id: "gm-5",
    senderId: "user-3",
    senderName: "Mijan",
    senderAvatar: "https://i.pravatar.cc/150?u=mijan",
    content: "Here is a quick video on how to setup your environment.",
    type: "video",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    timestamp: "08:15 PM",
    status: "seen",
  },
  {
    id: "gm-6",
    senderId: "user-4",
    senderName: "Chi",
    senderAvatar: "https://i.pravatar.cc/150?u=chi",
    content: "Check out these architecture diagrams I drew.",
    type: "image",
    images: ["/assets/courses/ai-engineering.webp"],
    timestamp: "08:20 PM",
    status: "seen",
  },
];

// Individual Conversations
function makeIndividualMessages(
  contactName: string,
  contactAvatar: string,
  contactId: string,
): Message[] {
  return [
    {
      id: `${contactId}-1`,
      senderId: contactId,
      senderName: contactName,
      senderAvatar: contactAvatar,
      content:
        "Gee, its been good news all day. I met someone special today, she's really pretty. I'll like to talk more about it but it has to be tomorrow. she should grab a drink later.",
      type: "text",
      timestamp: "4:30pm",
      status: "seen",
    },
    {
      id: `${contactId}-1b`,
      senderId: contactId,
      senderName: contactName,
      senderAvatar: contactAvatar,
      content: "Call me if you get this okay.",
      type: "text",
      timestamp: "4:30pm",
      status: "seen",
    },
    {
      id: `${contactId}-2`,
      senderId: "me",
      senderName: "You",
      senderAvatar: CURRENT_USER.avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum sodales nisl intercum id eget. Eget libero viverra tristique massa fringilla sit.",
      type: "text",
      timestamp: "4:27pm",
      status: "seen",
    },
    {
      id: `${contactId}-3`,
      senderId: "me",
      senderName: "You",
      senderAvatar: CURRENT_USER.avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer amet sed ultrices ut. Sit lectus egestas viverra auctor.",
      type: "text",
      timestamp: "4:27pm",
      status: "seen",
    },
    {
      id: `${contactId}-4`,
      senderId: "me",
      senderName: "You",
      senderAvatar: CURRENT_USER.avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque sagittis sed dictum lorem. Neque eget faucibus dolor r",
      type: "text",
      timestamp: "4:27pm",
      status: "seen",
    },
    {
      id: `${contactId}-5`,
      senderId: contactId,
      senderName: contactName,
      senderAvatar: contactAvatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque sagittis sed dictum lorem. Neque eget faucibus dolor risus posuere vitae sodales. Sit odio morbi dolor egestas sit aliquam velit cum. Pharetra tortor sit vestibulum\n\namet odio consectetur lorem euismod. Euismod interdum donec enim et ullamcorper vivamus tempus.",
      type: "text",
      timestamp: "4:25pm",
      status: "seen",
    },
    {
      id: `${contactId}-6`,
      senderId: "me",
      senderName: "You",
      senderAvatar: CURRENT_USER.avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum sociis fermentum sodales nisl intercum id eget. Eget libero viverra tristique massa fringilla sit.",
      type: "text",
      timestamp: "4:21pm",
      status: "seen",
    },
    {
      id: `${contactId}-7`,
      senderId: "me",
      senderName: "You",
      senderAvatar: CURRENT_USER.avatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Integer amet sed ultrices ut. Sit lectus egestas viverra auctor.",
      type: "text",
      timestamp: "4:21pm",
      status: "delivered",
    },
    {
      id: `${contactId}-8`,
      senderId: contactId,
      senderName: contactName,
      senderAvatar: contactAvatar,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque sagittis sed dictum lorem. Neque eget faucibus dolor r",
      type: "text",
      timestamp: "4:20pm",
      status: "seen",
    },
  ];
}

// All Conversations
export const CONVERSATIONS: Conversation[] = [
  {
    id: "group-1",
    type: "group",
    title: "Ayonaire Academy",
    subtitle: "2.0- Ultimate Data Science",
    avatar: "/assets/logos/logo-dark.png",
    role: "Creator",
    course: "2.0- Ultimate Data Science",
    messages: GROUP_MESSAGES,
  },
  {
    id: "user-1",
    type: "individual",
    title: "Enitan",
    avatar: "https://i.pravatar.cc/150?u=enitan",
    online: true,
    messages: makeIndividualMessages(
      "Enitan",
      "https://i.pravatar.cc/150?u=enitan",
      "enitan",
    ),
  },
  {
    id: "user-2",
    type: "individual",
    title: "Lucia",
    avatar: "https://i.pravatar.cc/150?u=lucia",
    online: false,
    lastSeen: "3 hours ago",
    messages: makeIndividualMessages(
      "Lucia",
      "https://i.pravatar.cc/150?u=lucia",
      "lucia",
    ),
  },
  {
    id: "user-3",
    type: "individual",
    title: "Mijan",
    avatar: "https://i.pravatar.cc/150?u=mijan",
    online: false,
    lastSeen: "1 hour ago",
    messages: makeIndividualMessages(
      "Mijan",
      "https://i.pravatar.cc/150?u=mijan",
      "mijan",
    ),
  },
  {
    id: "user-4",
    type: "individual",
    title: "Chi",
    avatar: "https://i.pravatar.cc/150?u=chi",
    online: false,
    messages: makeIndividualMessages(
      "Chi",
      "https://i.pravatar.cc/150?u=chi",
      "chi",
    ),
  },
  {
    id: "user-5",
    type: "individual",
    title: "chisom",
    avatar: "https://i.pravatar.cc/150?u=chisom",
    online: false,
    messages: makeIndividualMessages(
      "chisom",
      "https://i.pravatar.cc/150?u=chisom",
      "chisom",
    ),
  },
  {
    id: "user-6",
    type: "individual",
    title: "Afa",
    avatar: "https://i.pravatar.cc/150?u=afa",
    online: false,
    messages: makeIndividualMessages(
      "Afa",
      "https://i.pravatar.cc/150?u=afa",
      "afa",
    ),
  },
  {
    id: "user-7",
    type: "individual",
    title: "Aho",
    avatar: "https://i.pravatar.cc/150?u=aho",
    online: false,
    messages: makeIndividualMessages(
      "Aho",
      "https://i.pravatar.cc/150?u=aho",
      "aho",
    ),
  },
  {
    id: "user-8",
    type: "individual",
    title: "Nob",
    avatar: "https://i.pravatar.cc/150?u=nob",
    online: false,
    messages: makeIndividualMessages(
      "Nob",
      "https://i.pravatar.cc/150?u=nob",
      "nob",
    ),
  },
];

export function getConversationById(id: string): Conversation | undefined {
  return CONVERSATIONS.find((c) => c.id === id);
}
