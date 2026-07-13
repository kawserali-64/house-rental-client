"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiShield, FiHome, FiMapPin, FiClock } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Verified Excellence",
    description: "Every property undergoes rigorous inspection to ensure absolute safety.",
  },
  {
    icon: FiHome,
    title: "Curated Selection",
    description: "Access our exclusive database of premium apartments and homes.",
  },
  {
    icon: FiMapPin,
    title: "Prime Locales",
    description: "Homes positioned in the most sought-after neighborhoods.",
  },
  {
    icon: FiClock,
    title: "Seamless Workflow",
    description: "Experience the fastest renting process in the market today.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">
                The Superior Standard
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Why We Are The <br />
                <span className="text-cyan-600">First Choice</span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg max-w-md">
                We bridge the gap between property owners and seekers with advanced technology and trust-first values.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="mt-12 space-y-8">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-cyan-600">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-bold">Trusted by 5,000+ Happy Families</h3>
                <p className="text-gray-200 mt-2">Join a community that prioritizes peace of mind.</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -left-10 bottom-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block z-10">
              <div className="text-4xl font-black text-gray-900">98%</div>
              <div className="text-sm text-gray-500 font-medium">Customer Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}