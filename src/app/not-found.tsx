import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-base-100 px-6">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100">
          <SearchX className="h-12 w-12 text-cyan-600" />
        </div>

        <h1 className="text-7xl font-extrabold text-cyan-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-base-content">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base-content/70">
          Sorry, the page you are looking for doesn't exist or may have been
          moved. You can return to the homepage and continue exploring available
          rental properties.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn bg-cyan-600 text-white hover:bg-cyan-700"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link href="/houses" className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white">
            Browse Houses
          </Link>
        </div>
      </div>
    </section>
  );
}