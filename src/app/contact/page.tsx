export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Hero */}
        <section className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Have questions about renting a house or listing your property?
            Contact our team anytime and we'll be happy to help.
          </p>
        </section>

        {/* Contact Info + Form */}
        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="mt-1 text-gray-600">
                  support@houserent.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="mt-1 text-gray-600">
                  +880 1234-567890
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="mt-1 text-gray-600">
                  Rajshahi, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Office Hours
                </h3>

                <p className="mt-1 text-gray-600">
                  Saturday – Thursday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-cyan-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-cyan-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-cyan-600"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-cyan-600"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-cyan-600 font-semibold text-white transition hover:bg-cyan-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                How can I list my house?
              </h3>

              <p className="mt-2 text-gray-600">
                After logging in, visit the <strong>Add House</strong> page and
                submit your property details with images and rental information.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Do I need an account to add a house?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. Only registered users can create, edit, and manage their
                own property listings.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Can I edit my listing later?
              </h3>

              <p className="mt-2 text-gray-600">
                Absolutely. Go to the <strong>My Houses</strong> page from your
                dashboard to update or remove your listings at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}