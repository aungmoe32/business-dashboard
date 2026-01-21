import React from "react";

interface ExpenseItem {
  name: string;
  amount: number;
  color: string;
}

interface ExpenseStructureProps {
  expenses: Record<string, number>;
  totalExpenses: number;
  formatMMK: (amount: number) => string;
}

const ExpenseStructure: React.FC<ExpenseStructureProps> = ({ expenses, totalExpenses, formatMMK }) => {
  const colorMap: { [key: string]: string } = {
    rent: "bg-blue-600",
    salariesAndWages: "bg-indigo-500",
    utilities: "bg-violet-400",
    marketingAndAdvertising: "bg-emerald-500",
    transportation: "bg-amber-500",
    officeExpenses: "bg-rose-400",
    commission: "bg-cyan-500",
    depreciation: "bg-slate-400",
    otherExpenses: "bg-slate-300",
  };

  const expenseItems: ExpenseItem[] = Object.entries(expenses).map(([key, amount]) => ({
    name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    amount,
    color: colorMap[key] || "bg-gray-500"
  }));

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-6">
        Expense Structure
      </h3>
      <div className="space-y-5">
        {expenseItems.map((expense, index) => {
          const percent = Math.round((expense.amount / totalExpenses) * 100);
          
          return (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${expense.color}`}></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {expense.name}
                </p>
                <p className="text-xs text-slate-500">
                  {formatMMK(expense.amount)}
                </p>
              </div>
              <div className="text-sm font-black text-slate-900">
                {percent}%
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex justify-between items-center text-slate-900">
          <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Total Outflow
          </span>
          <span className="text-lg font-black">{formatMMK(totalExpenses)}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStructure;