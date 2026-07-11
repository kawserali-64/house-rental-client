export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Have questions about renting a house or listing your property? We'd
          love to hear from you. Reach out using the information below or send
          us a message.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@houserent.com</p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+880 1234-567890</p>
            </div>

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                Rajshahi, Bangladesh
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Office Hours</h3>
              <p className="text-gray-600">
                Saturday - Thursday <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              How can I list my house?
            </h3>
            <p className="mt-2 text-gray-600">
              After logging in, go to the "Add House" page and submit your
              property details.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              Do I need an account to add a house?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. Only registered users can add and manage house listings.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">
              Can I edit my listing later?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. You can manage your own listings from the "My Houses" page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
