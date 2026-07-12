"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { FaEye, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

interface House {
  _id:string;
  title:string;
  shortDescription:string;
  rent:number;
  address:string;
  district:string;
  availability:string;
  image:string;
}

export default function MyHousesPage(){

  const {data:session,isPending}=useSession();
  const [houses,setHouses]=useState<House[]>([]);
  const [deleteId,setDeleteId]=useState<string|null>(null);

  useEffect(()=>{

    const fetchHouses=async()=>{

      if(!session?.user?.id)return;

      const res=await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-houses/${session.user.id}`
      );

      const data=await res.json();
      setHouses(data.houses||[]);
    };

    fetchHouses();

  },[session]);


  const handleDelete=async()=>{

    if(!deleteId)return;

    const res=await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/${deleteId}`,
      {
        method:"DELETE"
      }
    );

    const data=await res.json();

    if(data.success){
      toast.success("House deleted successfully");
      setHouses(
        houses.filter((house)=>house._id!==deleteId)
      );
    }else{
      toast.error("Delete failed");
    }

    setDeleteId(null);
  };


  if(isPending){
    return(
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }


  if(!session){
    return(
      <div className="min-h-screen flex justify-center items-center">
        Please Login First
      </div>
    );
  }

  
  return(
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-8">
          My Houses
        </h1>

        <div className="bg-white rounded-2xl shadow border overflow-hidden">

          {
            houses.length===0 ? (
              <div className="p-10 text-center">
                <h2 className="text-xl font-bold">
                  No House Found
                </h2>
              </div>
            ):(
              <div className="overflow-x-auto">
                <table className="w-full">

                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left">Image</th>
                      <th className="p-4 text-left">Title</th>
                      <th className="p-4 text-left">Location</th>
                      <th className="p-4 text-left">Rent</th>
                      <th className="p-4 text-left">Status</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      houses.map((house)=>(
                        <tr
                          key={house._id}
                          className="border-t hover:bg-gray-50"
                        >

                          <td className="p-4">
                            <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                              <Image
                                src={house.image}
                                alt={house.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </td>

                          <td className="p-4">
                            <h3 className="font-bold">
                              {house.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {house.shortDescription}
                            </p>
                          </td>

                          <td className="p-4 text-gray-600">
                            {house.address}
                            <br/>
                            {house.district}
                          </td>

                          <td className="p-4 font-bold text-cyan-700">
                            ৳{house.rent}
                          </td>

                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              house.availability==="Available"
                              ?"bg-green-100 text-green-700"
                              :"bg-red-100 text-red-700"
                            }`}>
                              {house.availability}
                            </span>
                          </td>

                          <td className="p-4">
                            <div className="flex justify-center gap-3">

                              <Link
                                href={`/houses/${house._id}`}
                                className="bg-cyan-600 text-white p-3 rounded-lg"
                              >
                                <FaEye/>
                              </Link>

                              <button
                                onClick={()=>setDeleteId(house._id)}
                                className="bg-red-500 text-white p-3 rounded-lg"
                              >
                                <FaTrash/>
                              </button>

                            </div>
                          </td>

                        </tr>
                      ))
                    }

                  </tbody>

                </table>
              </div>
            )
          }
        </div>
        {
          deleteId && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

              <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">

                <div className="flex justify-between items-center mb-4">

                  <h2 className="text-xl font-bold">
                    Delete House
                  </h2>

                  <button
                    onClick={()=>setDeleteId(null)}
                    className="text-gray-500"
                  >
                    <FaTimes/>
                  </button>

                </div>

                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this house? This action cannot be undone.
                </p>

                <div className="flex justify-end gap-3">

                  <button
                    onClick={()=>setDeleteId(null)}
                    className="px-5 py-2 rounded-lg bg-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="px-5 py-2 rounded-lg bg-red-500 text-white"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          )
        }
      </div>
    </section>
  );
}