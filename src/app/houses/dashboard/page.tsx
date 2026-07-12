"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", houses: 5 },
  { month: "Feb", houses: 8 },
  { month: "Mar", houses: 12 },
  { month: "Apr", houses: 9 },
  { month: "May", houses: 14 },
  { month: "Jun", houses: 10 },
];

const pieData = [
  { name: "Apartment", value: 18 },
  { name: "Family", value: 12 },
  { name: "Bachelor", value: 8 },
  { name: "Office", value: 4 },
];

const COLORS = ["#06B6D4", "#3B82F6", "#14B8A6", "#0EA5E9"];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Main Container (65% width) */}
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="mt-2 text-gray-500">
            House Rental Statistics Overview
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Total Houses</h3>
            <p className="mt-3 text-4xl font-bold text-cyan-600">
              48
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Available</h3>
            <p className="mt-3 text-4xl font-bold text-green-600">
              31
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Rented</h3>
            <p className="mt-3 text-4xl font-bold text-red-500">
              17
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Bar Chart */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              Monthly Houses Added
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="houses"
                  fill="#06B6D4"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              House Categories
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={95}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}