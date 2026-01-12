import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg border rounded-lg px-4 py-2 text-sm">
        <p className="font-semibold text-[#2a6877]">{label}</p>
        <p className="text-gray-600">
          Total: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const UserLoanChart = ({ loans }) => {
  const chartData = [
    {
      name: "Applied",
      value: loans?.length || 0,
    },
    {
      name: "Approved",
      value: loans?.filter((l) => l.status === "approved").length || 0,
    },
    {
      name: "Pending",
      value: loans?.filter((l) => l.status === "pending").length || 0,
    },
    {
      name: "Rejected",
      value: loans?.filter((l) => l.status === "rejected").length || 0,
    },
  ];

  return (
    <div className="bg-base-100 border border-[#2a687722] rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-1 text-[#2a6877]">
        Loan Application Overview
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Summary of your loan activity
      </p>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={45}>
            <defs>
              <linearGradient id="brandGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a6877" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#24555e" stopOpacity={0.8} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 6" opacity={0.2} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#4b5563", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: "#4b5563", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="value"
              fill="url(#brandGradient)"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserLoanChart;
