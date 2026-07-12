import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-950 text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-extrabold text-white">
            HouseRent
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Find your perfect rental home with ease. Explore verified houses, 
            compare prices, and discover the ideal place to live in Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {["Home", "Explore Houses", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-cyan-400 transition-colors">Email: support@houserent.com</li>
            <li className="hover:text-cyan-400 transition-colors">Phone: +880 1234-567890</li>
            <li className="text-gray-500">Rajshahi, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, color: "hover:text-blue-500" },
              { icon: FaLinkedinIn, color: "hover:text-sky-500" },
              { icon: FaGithub, color: "hover:text-white" },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`h-10 w-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 ${social.color} transition-all duration-300 hover:border-cyan-500/50`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        © 2026 HouseRent. All Rights Reserved. Designed for a better living experience.
      </div>
    </footer>
  );
};

export default Footer;