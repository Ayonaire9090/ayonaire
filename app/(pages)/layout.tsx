import ChatbotWrapper from "../ChatbotWrapper";
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ChatbotWrapper />
    </>
  );
}
