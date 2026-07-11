import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaHome,
  FaInfoCircle,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import { BiArea } from "react-icons/bi";

interface House {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  rent: string;
  securityDeposit: string;
  division: string;
  district: string;
  address: string;
  availability: string;
  contactNumber: string;
  image: string;
}

async function getHouse(id: string): Promise<House | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;

    return res.json();

  } catch (error) {

    return null;

  }

}

export default async function HouseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const house = await getHouse(id);

  if (!house) return notFound();

  const features = ["Safe & Secure Environment", "Modern Living Space", "Good Communication System", "Family Friendly Area"];

  return (
    <section className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-700 font-semibold mb-8 hover:translate-x-[-5px] transition-all">
          <FaArrowLeft /> Back To Home
        </Link>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-cyan-600/10 text-cyan-700 px-4 py-1 rounded-lg text-sm font-bold uppercase tracking-wide">
              {house.category}
            </span>
            <span className={`px-4 py-1 rounded-lg text-sm font-bold uppercase ${house.availability === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {house.availability}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">{house.title}</h1>
          <p className="flex items-center gap-2 mt-4 text-gray-500 text-lg">
            <FaMapMarkerAlt className="text-cyan-600"/> {house.address}, {house.district}, {house.division}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[350px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl mb-12 group">
          <Image src={house.image} alt={house.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6">
                <FaInfoCircle className="text-cyan-600"/> Property Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{house.description}</p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <FaBed/>, val: house.bedrooms, label: "Bedrooms" },
                { icon: <FaBath/>, val: house.bathrooms, label: "Bathrooms" },
                { icon: <BiArea/>, val: `${house.area} sft`, label: "Area" },
                { icon: <FaHome/>, val: house.propertyType, label: "Type" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-2xl text-cyan-600 mb-2 flex justify-center">{item.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900">{item.val}</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Property Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <FaCheckCircle className="text-cyan-600"/> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 sticky top-24">
              <p className="text-gray-500">Monthly Rent</p>
              <h2 className="text-5xl font-extrabold text-cyan-700 mt-1 mb-8">৳{house.rent}</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="flex items-center gap-2 text-gray-600"><FaShieldAlt className="text-cyan-600"/> Security Deposit</span>
                  <span className="font-bold text-gray-900">৳{house.securityDeposit}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="font-bold text-gray-800 mb-2">Owner Contact</h3>
                <p className="text-cyan-700 font-bold text-lg mb-6 flex items-center justify-center gap-2">
                  <FaPhoneAlt/> {house.contactNumber}
                </p>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-200">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}