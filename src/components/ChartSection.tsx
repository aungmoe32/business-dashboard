import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface ChartData {
  name: string;
  sales: number;
  purchases: number;
}

interface ProductData {
  name: string;
  sales: number;
  color: string;
}

interface ChartSectionProps {
  data: ChartData[];
  formatMMK: (amount: number) => string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ data, formatMMK }) => {
  // Top performing products data (in MMK)
  const productData: ProductData[] = [
    { name: "Samsung Galaxy S24", sales: 15600000, color: "#3b82f6" },
    { name: "iPhone 15 Pro", sales: 12800000, color: "#6366f1" },
    { name: "MacBook Air M3", sales: 9200000, color: "#8b5cf6" },
    { name: "Dell XPS 13", sales: 7800000, color: "#06b6d4" },
    { name: "Sony WH-1000XM5", sales: 5400000, color: "#10b981" },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold text-slate-900">{payload[0].name}</p>
          <p className="text-blue-600 font-medium">
            Sales: {formatMMK(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sales vs Purchases Bar Chart */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6">
          Sales vs Purchases
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                cursor={{ fill: "#f8fafc" }}
                formatter={(value: number) => [formatMMK(value), ""]}
                labelFormatter={(label) => `Period: ${label}`}
              />
              <Bar
                dataKey="sales"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                name="Sales"
              />
              <Bar
                dataKey="purchases"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
                name="Purchases"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Products */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6">
          Top Performing Products
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="sales"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Product List */}
        <div className="mt-4 space-y-3">
          {productData.map((product, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: product.color }}
                ></div>
                <span className="text-sm font-medium text-slate-700 truncate">
                  {product.name}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-900">
                {formatMMK(product.sales)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
