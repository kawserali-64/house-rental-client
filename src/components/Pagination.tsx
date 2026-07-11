"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`/houses?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-14 flex-wrap">

      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="px-4 py-2 rounded-xl border disabled:opacity-50 hover:bg-cyan-600 hover:text-white transition"
      >
        Previous
      </button>

      {/* Page Numbers */}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          className={`w-11 h-11 rounded-xl border transition ${
            currentPage === index + 1
              ? "bg-cyan-600 text-white border-cyan-600"
              : "hover:bg-cyan-50"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="px-4 py-2 rounded-xl border disabled:opacity-50 hover:bg-cyan-600 hover:text-white transition"
      >
        Next
      </button>
    </div>
  );
}