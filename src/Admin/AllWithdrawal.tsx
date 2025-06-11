import { useState } from "react";
import { FaEye, FaCheck, FaTimes, FaSync } from "react-icons/fa";
import { toast } from "react-hot-toast";

const mockWithdrawals = [
  {
    _id: "wd123456",
    userId: { userName: "johndoe" },
    amount: 500,
    mode: "Bank Transfer",
    status: "pending",
    date: "2025-06-01",
  },
  {
    _id: "wd123457",
    userId: { userName: "janedoe" },
    amount: 300,
    mode: "Crypto",
    status: "processing",
    date: "2025-06-03",
  },
  {
    _id: "wd123458",
    userId: { userName: "richinvestor" },
    amount: 1200,
    mode: "PayPal",
    status: "approved",
    date: "2025-06-05",
  },
];

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  processing: "bg-blue-100 text-blue-700",
  rejected: "bg-red-100 text-red-700",
};

const AllWithdrawal = () => {
  const [withdrawals, setWithdrawals] = useState(mockWithdrawals);

  const updateStatus = (_id: string, newStatus: string) => {
    setWithdrawals((prev) =>
      prev.map((item) =>
        item._id === _id ? { ...item, status: newStatus } : item
      )
    );
    toast.success(`Marked as ${newStatus}`);
  };

  return (
    <div className="w-full h-full px-4 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
           Client Withdrawal Requests
        </h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Client</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Method</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {withdrawals.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {item._id.slice(0, 6)}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.userId.userName}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    ${item.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.mode}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => updateStatus(item._id, "approved")}
                        className="text-green-600 hover:text-green-800"
                        title="Approve"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() => updateStatus(item._id, "processing")}
                        className="text-blue-600 hover:text-blue-800"
                        title="Mark as Processing"
                      >
                        <FaSync />
                      </button>
                      <button
                        onClick={() => updateStatus(item._id, "rejected")}
                        className="text-red-600 hover:text-red-800"
                        title="Decline"
                      >
                        <FaTimes />
                      </button>
                      <button className="text-gray-600 hover:text-black" title="View">
                        <FaEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllWithdrawal;
