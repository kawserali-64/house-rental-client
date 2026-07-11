import HouseCard from "@/components/HouseCard";
import HouseFilters from "@/components/HouseFilters";
import Pagination from "@/components/Pagination";

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
    rent: number;
    securityDeposit: number;
    division: string;
    district: string;
    address: string;
    availability: string;
    contactNumber: string;
    image: string;
    ownerId: string;
    createdAt: string;
}

interface HouseResponse {
    success: boolean;
    houses: House[];
    total: number;
    currentPage: number;
    totalPages: number;
}

async function getHouses(
    searchParams: Record<string, string | undefined>
): Promise<HouseResponse> {
    const params = new URLSearchParams();

    if (searchParams.search) params.set("search", searchParams.search);
    if (searchParams.category) params.set("category", searchParams.category);
    if (searchParams.division) params.set("division", searchParams.division);
    if (searchParams.sort) params.set("sort", searchParams.sort);
    if (searchParams.page) params.set("page", searchParams.page);

    params.set("limit", "8");

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/houses?${params.toString()}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch houses");
    }

    return res.json();
}

export default async function HousesPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | undefined>>;
}) {
    const params = await searchParams;

    const { houses, total, currentPage, totalPages } = await getHouses(params);

    return (
        <section className="bg-gray-50 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-sm">
                        Explore Properties
                    </span>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900">
                        Find Your Perfect Home
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                        Browse verified rental properties across Bangladesh.
                    </p>
                </div>

                <HouseFilters />

                {/* Result Count */}
                <div className="mb-8">
                    <p className="text-gray-600 font-medium">
                        Total Houses:{" "}
                        <span className="font-bold text-cyan-600">{total}</span>
                    </p>
                </div>

                {/* House Grid */}
                {houses.length === 0 ? (
                    <div className="bg-white rounded-3xl border p-16 text-center">
                        <h2 className="text-3xl font-bold">
                            No Houses Found
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Try changing your search or filter.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {houses.map((house) => (
                            <HouseCard
                                key={house._id}
                                house={house}
                            />
                        ))}
                    </div>
                )}

                {/* Pagination পরে এখানে বসবে */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                />

            </div>
        </section>
    );
}