"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChatFloatingButton } from "./chat-floating-button";
import { ChatDialog } from "./chat-dialog";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Floating button - hidden when chat is open on mobile */}
      <ChatFloatingButton
        isOpen={isOpen}
        onClick={handleToggle}
        className={isOpen && isMobile ? "hidden" : ""}
      />

      {/* Chat dialog */}
      <ChatDialog isOpen={isOpen} onClose={handleClose} isMobile={isMobile} />
    </>
  );
}

export default ChatbotWidget;
