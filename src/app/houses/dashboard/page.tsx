"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
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

const COLORS = [
  "#06B6D4",
  "#3B82F6",
  "#14B8A6",
  "#0EA5E9",
  "#6366F1",
  "#F59E0B",
  "#10B981",
];

interface DashboardData {
  success: boolean;
  summary: {
    totalHouses: number;
    availableHouses: number;
    rentedHouses: number;
  };
  categories: {
    name: string;
    value: number;
  }[];
  monthly: {
    month: string;
    houses: number;
  }[];
}

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchDashboard() {
    try {
      const { data: tokenData, error } = await authClient.token();

      if (error || !tokenData?.token) {
        console.error("Failed to get token", error);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard`,
        {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      const data = await res.json();

      setDashboard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  fetchDashboard();
}, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
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

        {/* Summary */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Total Houses</h3>

            <p className="mt-3 text-4xl font-bold text-cyan-600">
              {dashboard?.summary.totalHouses}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Available</h3>

            <p className="mt-3 text-4xl font-bold text-green-600">
              {dashboard?.summary.availableHouses}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-gray-500">Rented</h3>

            <p className="mt-3 text-4xl font-bold text-red-500">
              {dashboard?.summary.rentedHouses}
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
              <BarChart data={dashboard?.monthly}>
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
                  data={dashboard?.categories}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={95}
                  label
                >
                  {dashboard?.categories.map((entry, index) => (
                    <Cell
                      key={entry.name}
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