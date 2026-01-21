import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import SummaryCards from "../components/SummaryCards";

const Dashboard: React.FC = () => {
  // for mmk
  const formatMMK = (amount: number) => {
    return `${amount.toLocaleString()} MMK`;
  };

  return (
    <div className="space-y-6">
      <DashboardHeader />

      <SummaryCards formatMMK={formatMMK} />
    </div>
  );
};

export default Dashboard;
