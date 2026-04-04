import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type OrderStatus = "PAID" | "PENDING" | "VERIFIED";

interface Order {
  id: string;
  status: OrderStatus;
  amount: string;
}

const recentOrders: Order[] = [
  { id: "#3021", status: "PAID", amount: "₦50k" },
  { id: "#3022", status: "PENDING", amount: "₦30k" },
  { id: "#3023", status: "VERIFIED", amount: "₦70k" },
];

const statusStyles: Record<OrderStatus, string> = {
  PAID: "bg-emerald-50 text-emerald-500",
  PENDING: "bg-orange-50 text-orange-500",
  VERIFIED: "bg-indigo-50 text-indigo-500",
};

export const AdminDashboardOrderInfoCard = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-sm font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F6F6F6] relative w-full">
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-5">
                Order ID
              </th>
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-4">
                Status
              </th>
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-4">
                Amount
              </th>
              <th className="text-right text-base font-semibold text-gray-900 py-4 px-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr
                key={order.id}
                className={
                  index < recentOrders.length - 1
                    ? "border-b border-gray-50"
                    : ""
                }
              >
                <td className="py-5 px-5 text-base font-semibold text-gray-900">
                  {order.id}
                </td>
                <td className="py-5 px-4">
                  <span
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-5 px-4 text-base font-bold text-gray-900">
                  {order.amount}
                </td>
                <td className="py-5 px-5 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical className="size-5 inline-block" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      sideOffset={8}
                      className="w-40 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1"
                    >
                      <DropdownMenuItem className="px-3 py-2 cursor-pointer text-[15px] font-medium text-gray-900 hover:bg-white focus:bg-white rounded-lg">
                        View detail
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-3 py-2 cursor-pointer text-[15px] font-medium text-gray-900 hover:bg-white focus:bg-white rounded-lg">
                        Edit order
                      </DropdownMenuItem>
                      <DropdownMenuItem className="px-3 py-2 cursor-pointer text-[15px] font-medium text-[#EF4444] hover:bg-white focus:bg-white hover:text-[#EF4444] focus:text-[#EF4444] rounded-lg">
                        Delete order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
