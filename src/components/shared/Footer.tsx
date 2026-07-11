
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">HouseRent</h2>
          <p className="text-sm leading-7">
            Find your perfect rental home with ease. Explore verified houses,
            compare prices, and discover the ideal place to live.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/houses">Explore Houses</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Email: support@houserent.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Rajshahi, Bangladesh</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <a href="#" className="transition hover:text-blue-500">
              <FaFacebookF />
            </a>

            <a href="#" className="transition hover:text-sky-500">
              <FaLinkedinIn />
            </a>

            <a href="#" className="transition hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm">
        © 2026 HouseRent. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
