import React from "react";
import { SummaryCardProps } from "../../types";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  trend,
  icon,
  color,
}) => {
  return (
    <div className="bg-white h-full p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold mt-2 text-slate-900">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color} text-white shadow-sm`}>
          {icon}
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4 flex items-center">
          <span
            className={`flex items-center text-xs font-semibold px-1.5 py-0.5 rounded ${trend >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
          >
            {trend >= 0 ? (
              <ArrowUpRight className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDownRight className="w-3 h-3 mr-1" />
            )}
            {Math.abs(trend)}%
          </span>
          <span className="text-xs text-slate-400 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
