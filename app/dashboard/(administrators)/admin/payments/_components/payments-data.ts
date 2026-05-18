export interface Payment {
  id: string;
  name: string;
  transactionId: string;
  course: string;
  amount: string;
  date: string;
  status: "Completed" | "Pending";
  avatar: string;
}

export const mockPayments: Payment[] = [
  { id: "1", name: "Jacob Jones", transactionId: "TXN-4461", course: "Python Bootcamp", amount: "48$", date: "Feb 2, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "Leslie Alexander", transactionId: "TXN-4463", course: "UI/UX Hero", amount: "47$", date: "Feb 3, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: "3", name: "Floyd Miles", transactionId: "TXN-4490", course: "Al for Beginners", amount: "48$", date: "Feb 4, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: "4", name: "Kristin Watson", transactionId: "TXN-4502", course: "Digital Marketing 101", amount: "48$", date: "Feb 5, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=4" },
  { id: "5", name: "Albert Flores", transactionId: "TXN-4515", course: "leslie@gmail.com", amount: "48$", date: "Feb 5, 2024", status: "Pending", avatar: "https://i.pravatar.cc/150?u=5" },
  { id: "6", name: "Robert Fox", transactionId: "TXN-4515", course: "Web Development", amount: "48$", date: "Feb 6, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=6" },
  { id: "7", name: "Jenny Wilson", transactionId: "TXN-4515", course: "Mobile App Dev", amount: "48$", date: "Feb 7, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=7" },
];
