"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { HiCloudArrowUp, HiSparkles } from "react-icons/hi2";
import { useSession } from "@/lib/auth-client";

export default function AddHousePage() {
    const router = useRouter();
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [form, setForm] = useState({
        title: "", shortDescription: "", description: "", category: "",
        propertyType: "Rent", bedrooms: "", bathrooms: "", area: "",
        rent: "", securityDeposit: "", division: "", district: "",
        address: "", availability: "Available", contactNumber: "",
    });

    const inputClass = "w-full h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const uploadImage = async (): Promise<string> => {
        if (!imageFile) throw new Error("Image is required");
        const formData = new FormData();
        formData.append("image", imageFile);
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        if (!data.success) throw new Error("Image upload failed");
        return data.data.url;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (!session?.user) return toast.error("Please login first");
        if (!imageFile) return toast.error("Please upload a property image");
        if (!form.category) return toast.error("Please select a category");

        try {
            setLoading(true);
            const imageUrl = await uploadImage();
            
            // ডাটাবেজের জন্য পূর্ণাঙ্গ পে-লোড
            const payload = { 
                ...form, 
                image: imageUrl, 
                ownerId: session.user.id,
                ownerName: session.user.name,
                ownerEmail: session.user.email,
                createdAt: new Date() 
            };

            const response = await fetch("http://localhost:5000/houses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to add property");
            
            toast.success("Property added successfully!");
            router.push("/houses/my-houses");
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HiSparkles className="text-cyan-600" /> Add New Property
                </h1>
                <p className="text-gray-500 mb-8">Fill in all details to list your property.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input required name="title" placeholder="House Title" className={inputClass} onChange={handleChange} />
                        <input required name="shortDescription" placeholder="Short Description" className={inputClass} onChange={handleChange} />
                    </div>

                    <textarea required name="description" placeholder="Full Description" className={`${inputClass} h-32 pt-3`} onChange={handleChange} />

                    <div className="grid md:grid-cols-3 gap-6">
                        <select required name="category" className={inputClass} onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Family">Family House</option>
                            <option value="Bachelor">Bachelor Mess</option>
                        </select>
                        <select name="propertyType" className={inputClass} onChange={handleChange}>
                            <option value="Rent">Type: Rent</option>
                            <option value="Sale">Type: Sale</option>
                        </select>
                        <select name="availability" className={inputClass} onChange={handleChange}>
                            <option value="Available">Status: Available</option>
                            <option value="Booked">Status: Booked</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <input type="number" min="0" required name="bedrooms" placeholder="Bedrooms" className={inputClass} onChange={handleChange} />
                        <input type="number" min="0" required name="bathrooms" placeholder="Bathrooms" className={inputClass} onChange={handleChange} />
                        <input type="number" min="0" required name="area" placeholder="Area (sqft)" className={inputClass} onChange={handleChange} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input type="number" min="0" required name="rent" placeholder="Rent Price" className={inputClass} onChange={handleChange} />
                        <input type="number" min="0" required name="securityDeposit" placeholder="Security Deposit" className={inputClass} onChange={handleChange} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <input required name="division" placeholder="Division" className={inputClass} onChange={handleChange} />
                        <input required name="district" placeholder="District" className={inputClass} onChange={handleChange} />
                        <input required name="address" placeholder="Full Address" className={inputClass} onChange={handleChange} />
                    </div>

                    <input required name="contactNumber" placeholder="Contact Number" className={inputClass} onChange={handleChange} />

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-cyan-500 transition">
                        <input type="file" onChange={handleImage} className="hidden" id="img" />
                        <label htmlFor="img" className="cursor-pointer flex flex-col items-center gap-2">
                            {imagePreview ? <Image src={imagePreview} alt="Preview" width={100} height={100} className="rounded-lg" /> : <HiCloudArrowUp size={40} className="text-gray-400" />}
                            <p className="text-gray-500">{imagePreview ? "Change Image" : "Click to upload cover image"}</p>
                        </label>
                    </div>

                    <button disabled={loading} className="w-full h-14 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition shadow-lg">
                        {loading ? "Publishing..." : "Publish Property Listing"}
                    </button>
                </form>
            </div>
        </div>
    );
}