import React from "react";

interface CategoryItem {
  label: string;
  sales: number;
  profit: number;
  color: string;
  percent: number;
}

interface CategoryBreakdownProps {
  categories: CategoryItem[];
  formatMMK: (amount: number) => string;
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ categories, formatMMK }) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">
          Profitability by Category
        </h3>
        <span className="text-xs font-medium text-slate-400">
          Current Period
        </span>
      </div>
      <div className="space-y-6">
        {categories.map((cat, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <div className="flex flex-col">
                <span className="text-slate-800">{cat.label}</span>
                <span className="text-[10px] text-slate-400">
                  Yield: {formatMMK(cat.profit)} profit
                </span>
              </div>
              <span className="text-slate-900 font-bold">
                {formatMMK(cat.sales)}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${cat.color} rounded-full transition-all duration-1000`}
                style={{ width: `${cat.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBreakdown;