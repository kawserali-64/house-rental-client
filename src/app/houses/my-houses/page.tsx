"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { FaEye, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

interface House {
  _id: string;
  title: string;
  shortDescription: string;
  rent: number;
  address: string;
  district: string;
  availability: string;
  image: string;
}

export default function MyHousesPage() {
  const { data: session, isPending } = useSession();
  const [houses, setHouses] = useState<House[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      if (!session?.user?.id) return;

      try {
        const { data: tokenData, error } = await authClient.token();


        if (error || !tokenData?.token) {
          console.error("Failed to get token", error);
          return;
        }
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/my-houses/${session.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${tokenData.token}`,
            },
          }
        );

        const data = await res.json();

        setHouses(data.houses || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHouses();
  }, [session]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const { data: tokenData, error } = await authClient.token();

      if (error || !tokenData?.token) {
        toast.error("Authentication failed");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("House deleted successfully");

        setHouses((prev) =>
          prev.filter((house) => house._id !== deleteId)
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setDeleteId(null);
    }
  };
  if (isPending) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  if (!session) return <div className="min-h-screen flex justify-center items-center">Please Login First</div>;

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Houses</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {houses.length === 0 ? (
            <div className="p-16 text-center text-gray-500">No House Found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="p-5 font-bold text-gray-700">Image</th>
                    <th className="p-5 font-bold text-gray-700">Title</th>
                    <th className="p-5 font-bold text-gray-700">Location</th>
                    <th className="p-5 font-bold text-gray-700">Rent</th>
                    <th className="p-5 font-bold text-gray-700">Status</th>
                    <th className="p-5 font-bold text-gray-700 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {houses.map((house) => (
                    <tr key={house._id} className="hover:bg-gray-50/50 transition">
                      <td className="p-4">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden border border-gray-100">
                          <Image src={house.image} alt={house.title} fill className="object-cover" />
                        </div>
                      </td>
                      <td className="p-4">
                        <h3 className="font-bold text-gray-900">{house.title}</h3>
                        <p className="text-xs text-gray-500 line-clamp-1">{house.shortDescription}</p>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {house.address}, {house.district}
                      </td>
                      <td className="p-4 font-bold text-cyan-600">৳{house.rent}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${house.availability === "Available" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                          }`}>
                          {house.availability}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <Link href={`/houses/${house._id}`} className="bg-gray-100 text-gray-600 p-2.5 rounded-lg hover:bg-cyan-600 hover:text-white transition">
                            <FaEye />
                          </Link>
                          <button onClick={() => setDeleteId(house._id)} className="bg-red-50 text-red-600 p-2.5 rounded-lg hover:bg-red-600 hover:text-white transition">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Delete Modal */}
        {deleteId && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-5">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Delete Property</h2>
                <button onClick={() => setDeleteId(null)} className="text-gray-400 hover:text-gray-600"><FaTimes /></button>
              </div>
              <p className="text-gray-600 mb-6 text-sm">Are you sure? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 rounded-lg bg-gray-100 font-bold text-gray-700">Cancel</button>
                <button onClick={handleDelete} className="flex-1 py-2.5 rounded-lg bg-red-600 font-bold text-white">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}