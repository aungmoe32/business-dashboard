import React from "react";

interface ProfitCardProps {
  title: string;
  subtitle: string;
  amount: number;
  margin?: string;
  formatMMK: (amount: number) => string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

const ProfitCard: React.FC<ProfitCardProps> = ({
  title,
  subtitle,
  amount,
  margin,
  formatMMK,
  bgColor = "bg-emerald-50",
  borderColor = "border-emerald-200",
  textColor = "text-emerald-700"
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg border ${borderColor}`}>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold text-slate-900">{title}</h4>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <div className="text-right">
          <span className={`text-2xl font-bold ${textColor}`}>
            {formatMMK(amount)}
          </span>
          {margin && (
            <p className={`text-sm font-medium mt-1 ${textColor.replace('700', '600')}`}>
              Margin: {margin}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;