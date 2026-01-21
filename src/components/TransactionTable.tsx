import React from "react";

interface Transaction {
  id: string;
  customer: string;
  location: string;
  status: string;
  paymentStatus: string;
  amount: number;
}

interface TransactionTableProps {
  transactions: Transaction[];
  formatMMK: (amount: number) => string;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  formatMMK,
}) => {
  const getStatusBadge = (status: string) => {
    const baseClasses =
      "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide";

    if (status === "Final") {
      return `${baseClasses} bg-emerald-100 text-emerald-700`;
    } else if (status === "Draft") {
      return `${baseClasses} bg-amber-100 text-amber-700`;
    } else {
      return `${baseClasses} bg-slate-100 text-slate-700`;
    }
  };

  const getPaymentBadge = (paymentStatus: string) => {
    const baseClasses =
      "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide";

    if (paymentStatus === "Paid") {
      return `${baseClasses} bg-blue-100 text-blue-700`;
    } else if (paymentStatus === "Partial") {
      return `${baseClasses} bg-indigo-100 text-indigo-700`;
    } else {
      return `${baseClasses} bg-rose-100 text-rose-700`;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900">
          Recent Transactions
        </h3>
        <a
          href="#/sales"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-3">Transaction ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Payment</th>
              <th className="px-6 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {transaction.customer}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {transaction.location}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={getStatusBadge(transaction.status)}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={getPaymentBadge(transaction.paymentStatus)}>
                    {transaction.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-right font-bold text-slate-900">
                  {formatMMK(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
