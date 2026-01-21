import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import SummaryCards from "../components/SummaryCards";
import { SALES_CHART_DATA } from "../../constants";
import ChartSection from "../components/ChartSection";

const Dashboard: React.FC = () => {
  // for mmk
  const formatMMK = (amount: number) => {
    return `${amount.toLocaleString()} MMK`;
  };

  return (
    <div className="space-y-6">
      <DashboardHeader />

      <SummaryCards formatMMK={formatMMK} />

      <ChartSection data={SALES_CHART_DATA} formatMMK={formatMMK} />
    </div>
  );
};

export default Dashboard;
