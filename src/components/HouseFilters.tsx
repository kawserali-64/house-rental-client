"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function HouseFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // Filter পরিবর্তন হলে page 1 এ যাবে
    params.delete("page");

    router.push(`/houses?${params.toString()}`);
  };

  // Live Search (500ms debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      updateQuery("search", search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm mb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search house..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-3 pl-4 pr-12 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition"
          />

          <FaSearch
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-600"
          />
        </div>

        {/* Category */}
        <select
          defaultValue={searchParams.get("category") || "All"}
          onChange={(e) => updateQuery("category", e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        >
          <option value="All">All Categories</option>
          <option value="Family">Family</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Sublet">Sublet</option>
          <option value="Office">Office</option>
        </select>

        {/* Division */}
        <select
          defaultValue={searchParams.get("division") || "All"}
          onChange={(e) => updateQuery("division", e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        >
          <option value="All">All Divisions</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Khulna">Khulna</option>
          <option value="Barishal">Barishal</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Mymensingh">Mymensingh</option>
        </select>

        {/* Sort */}
        <select
          defaultValue={searchParams.get("sort") || ""}
          onChange={(e) => updateQuery("sort", e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
        >
          <option value="">Default Sort</option>
          <option value="low">Rent: Low → High</option>
          <option value="high">Rent: High → Low</option>
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>

      </div>
    </div>
  );
}