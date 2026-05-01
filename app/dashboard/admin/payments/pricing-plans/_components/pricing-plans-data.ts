export interface PricingPlan {
  id: string;
  planType: string;
  course: string;
  price: string;
  duration: string;
  accessType: string;
  status: "Active" | "Pending";
  avatar: string;
}

export const mockPricingPlans: PricingPlan[] = [
  { id: "1", planType: "one-time", course: "Python Bootcamp", price: "48$", duration: "Lifetime", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: "2", planType: "one-time", course: "UI/UX Hero", price: "47$", duration: "1 Year", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: "3", planType: "one-time", course: "Al for Beginners", price: "48$", duration: "4 Year", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: "4", planType: "one-time", course: "Digital Marketing 101", price: "48$", duration: "Lifetime", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=4" },
  { id: "5", planType: "one-time", course: "leslie@gmail.com", price: "48$", duration: "3 Year", accessType: "Full Access", status: "Pending", avatar: "https://i.pravatar.cc/150?u=5" },
  { id: "6", planType: "one-time", course: "Web Development", price: "48$", duration: "1 Year", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=6" },
  { id: "7", planType: "one-time", course: "Mobile App Dev", price: "48$", duration: "2 Year", accessType: "Full Access", status: "Active", avatar: "https://i.pravatar.cc/150?u=7" },
];
