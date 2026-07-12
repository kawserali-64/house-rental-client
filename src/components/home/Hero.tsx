"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
// Changed import approach to fix the Runtime Error
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiHome, 
  FiUsers, 
  FiMapPin, 
  FiSearch, 
  FiPlusCircle 
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    title: "Find Your Perfect Home",
    subtitle: "Your journey to the perfect rental property starts here with our verified listings.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Affordable Living Nationwide",
    subtitle: "Transparent pricing and verified details for thousands of homes across Bangladesh.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Safe, Trusted & Comfortable",
    subtitle: "Join our community of happy renters and find your next sanctuary today.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="group h-[65vh] md:h-[70vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />

            <div className="relative z-10 flex h-full max-w-7xl mx-auto items-center px-6">
              <div className="max-w-2xl text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-lg text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>
                <div className="mt-10 flex gap-4">
                  <Link href="/houses" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30">
                    <FiSearch size={20} /> Browse Rentals
                  </Link>
                  <Link href="/houses/add" className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-blue-900 border border-white/20 px-8 py-4 rounded-full font-bold backdrop-blur transition-all">
                    <FiPlusCircle size={20} /> List Property
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="btn-prev absolute left-4 top-1/2 z-20 hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur transition-all">
          <FiChevronLeft size={24} />
        </button>
        <button className="btn-next absolute right-4 top-1/2 z-20 hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur transition-all">
          <FiChevronRight size={24} />
        </button>
      </Swiper>

      <div className="relative z-30 -mt-16 mx-4 md:mx-auto max-w-5xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t-4 border-blue-600">
        {[
          { icon: FiHome, val: "500+", label: "Active Listings" },
          { icon: FiUsers, val: "1,000+", label: "Verified Tenants" },
          { icon: FiMapPin, val: "50+", label: "Districts Covered" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
              <item.icon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{item.val}</h3>
              <p className="text-gray-500 text-sm font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;