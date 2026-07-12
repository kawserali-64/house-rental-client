"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
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
    subtitle: "Browse verified rental properties, compare prices, and rent your dream home with confidence.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Affordable Houses Across Bangladesh",
    subtitle: "Explore thousands of verified listings with complete details and transparent pricing.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Safe • Trusted • Comfortable",
    subtitle: "Find family-friendly rentals, apartments, and houses in your preferred location.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Main Slider Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-[500px] md:h-[600px] w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex h-full w-full items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                  
                  <div className="relative z-10 px-6 text-center text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        {slide.title}
                      </h1>
                      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/houses" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-cyan-500/20">
                          <FiSearch size={20} /> Explore Houses
                        </Link>
                        <Link href="/houses/add" className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-cyan-600 border border-white/20 px-8 py-4 rounded-full font-bold backdrop-blur transition-all">
                          <FiPlusCircle size={20} /> List Property
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button className="btn-prev absolute left-6 top-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-cyan-600 backdrop-blur-md transition-all">
              <FiChevronLeft size={28} />
            </button>
            <button className="btn-next absolute right-6 top-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-cyan-600 backdrop-blur-md transition-all">
              <FiChevronRight size={28} />
            </button>
          </Swiper>
        </div>

        {/* Statistics Card - Adjusted for better placement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-30 -mt-16 mx-4 md:mx-16 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8"
        >
          {[
            { icon: FiHome, val: "500+", label: "Active Listings" },
            { icon: FiUsers, val: "1,000+", label: "Verified Tenants" },
            { icon: FiMapPin, val: "50+", label: "Districts Covered" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="bg-cyan-50 group-hover:bg-cyan-600 text-cyan-600 group-hover:text-white p-4 rounded-2xl transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900">{item.val}</h3>
                <p className="text-gray-500 font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;