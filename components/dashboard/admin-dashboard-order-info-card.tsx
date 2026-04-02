import { MoreVertical } from "lucide-react";

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
  PAID: "bg-green-50 text-green-600",
  PENDING: "bg-amber-50 text-amber-600",
  VERIFIED: "bg-green-50 text-green-600",
};

export const AdminDashboardOrderInfoCard = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden py-5 px-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <button className="text-sm font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#766E6E]/10">
              <th className="text-left text-sm font-semibold text-gray-500 py-3 px-4 rounded-l-lg">
                Order ID
              </th>
              <th className="text-left text-sm font-semibold text-gray-500 py-3 px-4">
                Status
              </th>
              <th className="text-left text-sm font-semibold text-gray-500 py-3 px-4">
                Amount
              </th>
              <th className="text-right text-sm font-semibold text-gray-500 py-3 px-4 rounded-r-lg">
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
                    ? "border-b border-gray-100"
                    : ""
                }
              >
                <td className="py-5 px-4 text-base font-semibold text-gray-900">
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
                <td className="py-5 px-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="size-5 inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
