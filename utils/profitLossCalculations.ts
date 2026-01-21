interface ProfitLossInputData {
  grossSales: number;
  salesReturns: number;
  netSales: number;
  openingStock: number;
  purchases: number;
  purchaseReturns: number;
  directCosts: number;
  closingStock: number;
  operatingExpenses: Record<string, number>;
  otherIncome: number;
  nonOperatingExpenses: number;
  taxes: number;
}

interface ProfitLossCalculations {
  cogs: number;
  grossProfit: number;
  grossProfitMargin: string;
  totalOperatingExpenses: number;
  operatingProfit: number;
  netProfit: number;

  netSalesCalculated: number;
  profitMarginPercent: number;
  returnOnSales: number;
}
/**
 * Calculate all P&L metrics from input data
 * Following standard accounting principles from profit-loss.md
 */
export const calculateProfitLoss = (
  data: ProfitLossInputData,
): ProfitLossCalculations => {
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
  } = data;

  // A. Net Sales Calculation (Gross Sales - Sales Returns)
  const netSalesCalculated = grossSales - salesReturns;

  // B. Cost of Goods Sold (COGS): Opening Stock + Purchases - Purchase Returns + Direct Costs - Closing Stock
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

  // F. Net Profit: Operating Profit + Other Income - Other Expenses - Taxes
  const netProfit =
    operatingProfit + otherIncome - nonOperatingExpenses - taxes;

  // Additional business metrics
  const profitMarginPercent = (netProfit / netSales) * 100;
  const returnOnSales = (operatingProfit / netSales) * 100;

  return {
    cogs,
    grossProfit,
    grossProfitMargin,
    totalOperatingExpenses,
    operatingProfit,
    netProfit,
    netSalesCalculated,
    profitMarginPercent,
    returnOnSales,
  };
};

export type { ProfitLossInputData, ProfitLossCalculations };
