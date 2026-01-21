import React from "react";
import { LucideIcon } from "lucide-react";

interface ReportItem {
  label: string;
  amount: number;
  isNegative?: boolean;
  isTotal?: boolean;
}

interface ReportSectionProps {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  items: ReportItem[];
  formatMMK: (amount: number) => string;
}

const ReportSection: React.FC<ReportSectionProps> = ({ 
  title, 
  icon: Icon, 
  iconColor = "text-slate-500",
  items, 
  formatMMK 
}) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-slate-900 flex items-center">
        {Icon && <Icon className={`w-5 h-5 ${iconColor} mr-2`} />}
        {title}
      </h4>
      <div className="space-y-3 ml-7">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center py-1 ${
              item.isTotal ? 'border-t border-slate-200 font-semibold pt-2' : ''
            }`}
          >
            <span className={item.isTotal ? "text-slate-900" : "text-slate-600"}>
              {item.label}
            </span>
            <span className={`font-medium ${
              item.isTotal 
                ? "text-slate-900" 
                : item.isNegative 
                  ? item.label.includes('Returns') || item.label.includes('Income')
                    ? "text-emerald-600"
                    : "text-rose-600"
                  : "text-slate-900"
            }`}>
              {item.isNegative ? `(${formatMMK(item.amount)})` : formatMMK(item.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSection;