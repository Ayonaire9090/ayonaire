import ChatbotWidget from "@/components/chatbot";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ChatbotWidget />
    </>
  );
}
