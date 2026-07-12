"use client";

import { useEffect, useState } from "react";
import HouseCard from "../HouseCard";

interface House {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  rent: string;
  district: string;
  division: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  category: string;
  availability: string;
}

export default function FeaturedHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedHouses = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-houses`);
        const data = await res.json();
        setHouses(data.houses || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedHouses();
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        {/* Heading Section */}
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
            Premium Selection
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Houses
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500 text-sm md:text-base">
            Discover our hand-picked rental properties with verified details and premium living spaces.
          </p>
        </div>

        {/* Content Section */}
        {loading ? (
          /* Skeleton Loader - Grid: Mobile 1, Tablet 2, Desktop 4 */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[460px] w-full animate-pulse rounded-2xl bg-gray-100"
              />
            ))}
          </div>
        ) : houses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20 text-center">
            <h3 className="text-lg font-bold text-gray-800">No Featured Houses Found</h3>
            <p className="text-sm text-gray-500 mt-1">Check back soon for new listings.</p>
          </div>
        ) : (
          /* Grid - Mobile 1, Tablet 2, Desktop 4 */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}