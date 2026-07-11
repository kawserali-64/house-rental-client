import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          About HouseRent
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          HouseRent is a modern rental platform that helps people discover
          verified rental homes quickly and easily. Whether you're looking for
          your next home or listing a property for rent, we provide a simple,
          secure, and user-friendly experience.
        </p>
      </section>

      {/* Mission */}
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>

        <p className="text-gray-600 leading-8">
          Our mission is to make house hunting easier by connecting renters with
          trusted property listings. We aim to provide a fast, transparent, and
          reliable platform where users can explore rental properties with
          confidence.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold">Why Choose Us?</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Verified Listings</h3>
            <p className="text-gray-600">
              Browse carefully listed rental properties with complete details.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Easy Search</h3>
            <p className="text-gray-600">
              Find houses using location, price, and property type filters.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Affordable Options</h3>
            <p className="text-gray-600">
              Discover rental homes that fit different budgets and lifestyles.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Responsive Platform</h3>
            <p className="text-gray-600">
              Enjoy a seamless experience on desktop, tablet, and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-16 rounded-2xl bg-blue-50 p-10">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Listed Houses</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">1,000+</h3>
            <p className="text-gray-600">Happy Renters</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-gray-600">Cities Covered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Find Your Next Home?
        </h2>

        <p className="mt-4 text-gray-600">
          Explore rental houses and discover the perfect place for you.
        </p>

        <Link
          href="/houses"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore Houses
        </Link>
      </section>
    </main>
  );
}