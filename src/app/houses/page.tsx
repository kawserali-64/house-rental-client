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
    <section className="min-h-screen bg-gray-50 py-16">
      {/* 60–70% Width Container */}
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Explore Properties
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Find Your Perfect Home
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Browse verified rental properties across Bangladesh.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <HouseFilters />
        </div>

        {/* Result Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            Total Houses:{" "}
            <span className="font-bold text-cyan-600">{total}</span>
          </p>
        </div>

        {/* House Grid */}
        {houses.length === 0 ? (
          <div className="rounded-3xl border bg-white p-16 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">
              No Houses Found
            </h2>

            <p className="mt-3 text-gray-500">
              Try changing your search or filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {houses.map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </section>
  );
}