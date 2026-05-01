export interface StudentPurchase {
  id: string;
  name: string;
  email: string;
  course: string;
  amount: string;
  paymentMethod: string;
  date: string;
  status: "Completed" | "Pending";
  avatar: string;
}

export const mockStudentPurchases: StudentPurchase[] = [
  { id: "1", name: "Jacob Jones", email: "ryanhen@gmail.com", course: "Python Bootcamp", amount: "48$", paymentMethod: "Paystack", date: "Feb 2, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "Albert Flores", email: "ryanhen@gmail.com", course: "UI/UX Hero", amount: "47$", paymentMethod: "Stripe", date: "Feb 3, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: "3", name: "Floyd Miles", email: "ryanhen@gmail.com", course: "Al for Beginners", amount: "48$", paymentMethod: "Paystack", date: "Feb 4, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: "4", name: "Kristin Watson", email: "ryanhen@gmail.com", course: "Digital Marketing 101", amount: "48$", paymentMethod: "Paystack", date: "Feb 5, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=4" },
  { id: "5", name: "Albert Flores", email: "ryanhen@gmail.com", course: "leslie@gmail.com", amount: "48$", paymentMethod: "Paystack", date: "Feb 5, 2024", status: "Pending", avatar: "https://i.pravatar.cc/150?u=5" },
  { id: "6", name: "Robert Fox", email: "ryanhen@gmail.com", course: "Web Development", amount: "48$", paymentMethod: "Stripe", date: "Feb 6, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=6" },
  { id: "7", name: "Jenny Wilson", email: "ryanhen@gmail.com", course: "Mobile App Dev", amount: "48$", paymentMethod: "Paystack", date: "Feb 7, 2024", status: "Completed", avatar: "https://i.pravatar.cc/150?u=7" },
];
