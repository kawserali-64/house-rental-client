import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-blue-100">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Find Your Perfect Home
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Discover Comfortable & Affordable Houses for Rent
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Browse verified rental properties, compare prices, and find the ideal
          home that matches your lifestyle and budget.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/houses"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Houses
          </Link>

          <Link
            href="/houses/add"
            className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Add Your House
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">500+</h2>
            <p className="text-gray-600">Verified Houses</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">1,000+</h2>
            <p className="text-gray-600">Happy Renters</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-600">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;