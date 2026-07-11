"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBath, FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

interface HouseCardProps {
    house: {
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
    };
}

const HouseCard = ({ house }: HouseCardProps) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[520px] w-full">
            {/* Image Section */}
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={house.image}
                    alt={house.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-cyan-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                        {house.category}
                    </span>
                    <span className="bg-green-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                        {house.availability}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 line-clamp-1">{house.title}</h2>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2 flex-grow">{house.shortDescription}</p>

                <div className="flex items-center gap-2 mt-4 text-gray-600">
                    <FaMapMarkerAlt className="text-cyan-600" />
                    <span className="text-sm font-medium">{house.district}, {house.division}</span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 mt-6 py-4 border-y border-gray-100">
                    <div className="flex flex-col items-center gap-1 text-gray-700">
                        <FaBed className="text-cyan-600 text-lg" />
                        <span className="text-xs font-bold">{house.bedrooms} Bed</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-700 border-x border-gray-100">
                        <FaBath className="text-cyan-600 text-lg" />
                        <span className="text-xs font-bold">{house.bathrooms} Bath</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-700">
                        <BiArea className="text-cyan-600 text-lg" />
                        <span className="text-xs font-bold">{house.area} sqft</span>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-cyan-700">৳{house.rent}<span className="text-xs font-normal text-gray-400">/mo</span></h3>
                    <Link href={`/houses/${house._id}`} className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;