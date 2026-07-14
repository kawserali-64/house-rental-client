"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiArea } from "react-icons/bi";

interface HouseCardProps {
  house: {
    _id: string;
    title: string;
    shortDescription: string;
    image: string;

    rent: number;

    district: string;
    division: string;

    bedrooms: string;
    bathrooms: string;
    area: string;

    category: string;
    availability: string;
  };
}
const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <div className="group flex h-[460px] w-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={house.image}
          alt={house.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-cyan-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
            {house.category}
          </span>

          <span className="rounded-full bg-green-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
            {house.availability}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {house.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {house.shortDescription}
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <FaMapMarkerAlt className="text-cyan-600" />
          {house.district}, {house.division}
        </div>

        {/* Specs */}
        <div className="my-5 grid grid-cols-3 rounded-xl bg-gray-50 py-3">
          <div className="text-center">
            <FaBed className="mx-auto mb-1 text-cyan-600" />
            <p className="text-xs font-semibold">
              {house.bedrooms} Bed
            </p>
          </div>

          <div className="border-x text-center">
            <FaBath className="mx-auto mb-1 text-cyan-600" />
            <p className="text-xs font-semibold">
              {house.bathrooms} Bath
            </p>
          </div>

          <div className="text-center">
            <BiArea className="mx-auto mb-1 text-cyan-600" />
            <p className="text-xs font-semibold">
              {house.area} sqft
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">
              Monthly Rent
            </p>

            <h3 className="text-2xl font-bold text-cyan-700">
              ৳{house.rent.toLocaleString()}
            </h3>
          </div>

          <Link
            href={`/houses/${house._id}`}
            className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;