import React from "react";
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";
import SummaryCard from "./SummaryCard";

interface SummaryCardsProps {
  formatMMK: (amount: number) => string;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ formatMMK }) => {
  const summaryData = [
    {
      title: "Total Sales",
      value: formatMMK(48750000),
      trend: 12.5,
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "Total Purchases",
      value: formatMMK(31250000),
      trend: -2.4,
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "bg-indigo-600",
    },
    {
      title: "Total Customers",
      value: "1,240",
      trend: 8.1,
      icon: <Users className="w-6 h-6" />,
      color: "bg-violet-600",
    },
    {
      title: "Potential Profit",
      value: formatMMK(17500000),
      trend: 15.3,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-emerald-600",
      hasLink: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <div key={index} className={`relative ${item.hasLink ? "group" : ""}`}>
          <SummaryCard
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={item.icon}
            color={item.color}
          />
          {item.hasLink && (
            <a
              href="#/pnl"
              className="absolute bottom-4 right-6 text-[10px] font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center bg-emerald-50 px-2 py-1 rounded"
            >
              View Details <TrendingUp className="w-3 h-3 ml-1" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
