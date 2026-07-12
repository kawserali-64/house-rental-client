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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/featured-houses`
        );

        const data = await res.json();

        setHouses(data.houses || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedHouses();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Houses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-[520px] rounded-3xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Featured Houses
          </h2>

          <p className="text-gray-500 mt-3">
            Discover our latest listed properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house) => (
            <HouseCard
              key={house._id}
              house={house}
            />
          ))}
        </div>

      </div>
    </section>
  );
}