/**
 * CSV Export Utility for Profit & Loss Reports
 * Handles the generation and download of financial reports in CSV format
 */

interface ProfitLossData {
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

interface CalculatedValues {
  cogs: number;
  grossProfit: number;
  grossProfitMargin: string;
  totalOperatingExpenses: number;
  operatingProfit: number;
  netProfit: number;
}

/**
 * Helper function to format currency in MMK
 */
const formatMMK = (amount: number): string => {
  return `${amount.toLocaleString()} MMK`;
};

/**
 * Exports Profit & Loss data to CSV format
 */
export const exportProfitLossToCSV = (
  data: ProfitLossData,
  calculations: CalculatedValues
): void => {
  try {
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

    const {
      cogs,
      grossProfit,
      grossProfitMargin,
      totalOperatingExpenses,
      operatingProfit,
      netProfit,
    } = calculations;

    // Prepare CSV data with all P&L sections
    const csvData = [
      ['Profit & Loss Report', '', ''],
      ['Report Period', 'May 01, 2024 to May 31, 2024', ''],
      ['', '', ''],
      
      // Revenue Section
      ['REVENUE', '', ''],
      ['Gross Sales', grossSales.toString(), formatMMK(grossSales)],
      ['Sales Returns', `(${salesReturns})`, `(${formatMMK(salesReturns)})`],
      ['Net Sales (Revenue)', netSales.toString(), formatMMK(netSales)],
      ['', '', ''],
      
      // Cost of Goods Sold
      ['COST OF GOODS SOLD (COGS)', '', ''],
      ['Opening Stock Value', openingStock.toString(), formatMMK(openingStock)],
      ['Purchases', purchases.toString(), formatMMK(purchases)],
      ['Purchase Returns', `(${purchaseReturns})`, `(${formatMMK(purchaseReturns)})`],
      ['Direct Costs', directCosts.toString(), formatMMK(directCosts)],
      ['Closing Stock Value', `(${closingStock})`, `(${formatMMK(closingStock)})`],
      ['Total COGS', cogs.toString(), formatMMK(cogs)],
      ['', '', ''],
      
      // Gross Profit
      ['GROSS PROFIT', '', ''],
      ['Gross Profit', grossProfit.toString(), formatMMK(grossProfit)],
      ['Gross Profit Margin', `${grossProfitMargin}%`, ''],
      ['', '', ''],
      
      // Operating Expenses
      ['OPERATING EXPENSES', '', ''],
      ...Object.entries(operatingExpenses).map(([key, amount]) => [
        key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
        amount.toString(),
        formatMMK(amount)
      ]),
      ['Total Operating Expenses', totalOperatingExpenses.toString(), formatMMK(totalOperatingExpenses)],
      ['', '', ''],
      
      // Operating Profit
      ['OPERATING PROFIT', '', ''],
      ['Operating Profit', operatingProfit.toString(), formatMMK(operatingProfit)],
      ['', '', ''],
      
      // Other Income & Expenses
      ['OTHER INCOME & EXPENSES', '', ''],
      ['Other Income', otherIncome.toString(), formatMMK(otherIncome)],
      ['Non-Operating Expenses', `(${nonOperatingExpenses})`, `(${formatMMK(nonOperatingExpenses)})`],
      ['Taxes', `(${taxes})`, `(${formatMMK(taxes)})`],
      ['', '', ''],
      
      // Final Result
      ['FINAL RESULT', '', ''],
      ['Net Profit/Loss', netProfit.toString(), `${netProfit >= 0 ? '+' : ''}${formatMMK(Math.abs(netProfit))}`],
      ['Status', netProfit >= 0 ? 'PROFIT' : 'LOSS', ''],
    ];

    // Convert to CSV format
    const csvContent = csvData.map(row => 
      row.map(cell => `"${cell}"`).join(',')
    ).join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'profit-loss-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Error generating CSV:', error);
    alert('Error generating CSV. Please try again.');
  }
};

export type { ProfitLossData, CalculatedValues };