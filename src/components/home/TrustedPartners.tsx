"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHome,
  FaUsers,
  FaHeadset,
  FaHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";

const partners = [
  { id: 1, title: "Verified Listings", icon: FaShieldAlt },
  { id: 2, title: "Property Owners", icon: FaHome },
  { id: 3, title: "Happy Tenants", icon: FaUsers },
  { id: 4, title: "24/7 Support", icon: FaHeadset },
  { id: 5, title: "Trusted Partners", icon: FaHandshake },
  { id: 6, title: "Nationwide Coverage", icon: FaMapMarkedAlt },
];

export default function TrustedPartners() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">
            Trusted Network
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Built on Trust & Reliability
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-cyan-100 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 text-sm font-bold text-gray-700 text-center">
                  {partner.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}