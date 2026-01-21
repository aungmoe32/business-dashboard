import React from "react";
import { PROFIT_LOSS_DATA } from "../../constants";
import { Info, TrendingUp } from "lucide-react";
import ReportHeader from "../components/ReportHeader";
import ReportSection from "../components/ReportSection";
import ProfitCard from "../components/ProfitCard";
import CategoryBreakdown from "../components/CategoryBreakdown";
import ExpenseStructure from "../components/ExpenseStructure";

const ProfitLossReport: React.FC = () => {
  const {
    grossSales,
    salesReturns,
    netSales,
    openingStock,
    purchases,
    purchaseReturns,
    directCosts,
    closingStock,
    operatingExpenses,
    otherIncome,
    nonOperatingExpenses,
    taxes,
  } = PROFIT_LOSS_DATA;

  const formatMMK = (amount: number) => {
    return `${amount.toLocaleString()} MMK`;
  };

  const exportToCSV = () => {
    alert("Export to CSV functionality is not implemented yet.");
  };

  // B. Cost of Goods Sold (COGS): Opening Stock + Purchases - Closing Stock
  const cogs =
    openingStock + purchases - purchaseReturns + directCosts - closingStock;

  // C. Gross Profit: Net Sales - COGS
  const grossProfit = netSales - cogs;
  const grossProfitMargin = ((grossProfit / netSales) * 100).toFixed(1);

  // D. Total Operating Expenses
  const totalOperatingExpenses = Object.values(operatingExpenses).reduce(
    (sum, expense) => sum + expense,
    0,
  );

  // E. Operating Profit: Gross Profit - Operating Expenses
  const operatingProfit = grossProfit - totalOperatingExpenses;

  // G. Net Profit: Operating Profit + Other Income - Other Expenses - Taxes
  const netProfit =
    operatingProfit + otherIncome - nonOperatingExpenses - taxes;

  const categoryData = [
    {
      label: "Electronic Goods",
      sales: 380000,
      profit: 95000,
      color: "bg-blue-600",
      percent: 85,
    },
    {
      label: "Services (Non-stock)",
      sales: 150000,
      profit: 45000,
      color: "bg-indigo-600",
      percent: 60,
    },
    {
      label: "Consumables",
      sales: 85000,
      profit: 18300,
      color: "bg-violet-600",
      percent: 30,
    },
    {
      label: "Bundle/Combo Packs",
      sales: 65000,
      profit: 15000,
      color: "bg-emerald-600",
      percent: 45,
    },
  ];

  return (
    <div className="space-y-6">
      <ReportHeader onExportCSV={exportToCSV} />

      <div
        id="profit-loss-report"
        className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center">
            <Info className="w-4 h-4 text-blue-500 mr-2" />
            <p className="text-sm text-slate-600 font-medium">
              Report period: May 01, 2024 to May 31, 2024
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Confidential Financial Statement
          </span>
        </div>

        {/* Standard P&L Format */}
        <div className="p-8 space-y-8">
          {/* A. Revenue Section */}
          <ReportSection
            title="Revenue"
            icon={TrendingUp}
            iconColor="text-emerald-500"
            items={[
              { label: "Gross Sales", amount: grossSales },
              {
                label: "Sales Returns",
                amount: salesReturns,
                isNegative: true,
              },
              { label: "Net Sales (Revenue)", amount: netSales, isTotal: true },
            ]}
            formatMMK={formatMMK}
          />

          {/* B. Cost of Goods Sold (COGS) */}
          <ReportSection
            title="Cost of Goods Sold (COGS)"
            items={[
              { label: "Opening Stock Value", amount: openingStock },
              { label: "Purchases", amount: purchases },
              {
                label: "Purchase Returns",
                amount: purchaseReturns,
                isNegative: true,
              },
              {
                label: "Direct Costs (Freight, Import, Packaging)",
                amount: directCosts,
              },
              {
                label: "Closing Stock Value",
                amount: closingStock,
                isNegative: true,
              },
              { label: "Total COGS", amount: cogs, isTotal: true },
            ]}
            formatMMK={formatMMK}
          />

          {/* C. Gross Profit */}
          <ProfitCard
            title="Gross Profit"
            subtitle="Net Sales - COGS"
            amount={grossProfit}
            margin={grossProfitMargin}
            formatMMK={formatMMK}
            bgColor="bg-emerald-50"
            borderColor="border-emerald-200"
            textColor="text-emerald-700"
          />

          {/* D. Operating Expenses */}
          <ReportSection
            title="Operating Expenses"
            items={[
              ...Object.entries(operatingExpenses).map(([key, amount]) => ({
                label: key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase()),
                amount: amount,
              })),
              {
                label: "Total Operating Expenses",
                amount: totalOperatingExpenses,
                isTotal: true,
              },
            ]}
            formatMMK={formatMMK}
          />

          {/* E. Operating Profit */}
          <ProfitCard
            title="Operating Profit"
            subtitle="Gross Profit - Operating Expenses"
            amount={operatingProfit}
            formatMMK={formatMMK}
            bgColor="bg-blue-50"
            borderColor="border-blue-200"
            textColor="text-blue-700"
          />

          {/* F. Other Income & Expenses */}
          <ReportSection
            title="Other Income & Expenses"
            items={[
              {
                label: "Other Income (Interest, Service Income)",
                amount: otherIncome,
                isNegative: true,
              },
              {
                label: "Non-Operating Expenses",
                amount: nonOperatingExpenses,
                isNegative: true,
              },
              { label: "Taxes", amount: taxes, isNegative: true },
            ]}
            formatMMK={formatMMK}
          />
        </div>

        {/* G. Net Profit/Loss - Final Result */}
        <div className="bg-slate-900 p-8">
          <div className="text-center">
            <h4 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">
              Final Result
            </h4>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-2">
                Net Profit / Loss
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Operating Profit + Other Income - Other Expenses - Taxes
              </p>
              <div className="text-center">
                <span
                  className={`text-5xl font-black ${netProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}
                >
                  {netProfit >= 0 ? "+" : ""}
                  {formatMMK(Math.abs(netProfit))}
                </span>
                <p className="text-slate-400 text-sm mt-2">
                  {netProfit >= 0 ? "Profit" : "Loss"} for this period
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CategoryBreakdown categories={categoryData} formatMMK={formatMMK} />
        <ExpenseStructure
          expenses={operatingExpenses}
          totalExpenses={totalOperatingExpenses}
          formatMMK={formatMMK}
        />
      </div>
    </div>
  );
};

export default ProfitLossReport;
