"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

const faqs = [
  { key: "1", title: "How do I rent a house?", content: "Browse available properties, open the property details page, and contact the owner using the provided phone number or contact information." },
  { key: "2", title: "Are all property listings verified?", content: "Yes. Every property listing is reviewed before being published to help ensure accurate and trustworthy information for renters." },
  { key: "3", title: "Can I contact the property owner directly?", content: "Absolutely. Each property details page includes the owner's contact information so you can communicate directly." },
  { key: "4", title: "Can I list my own property?", content: "Yes. After signing in, you can add, edit, and manage your own property listings directly from your personal dashboard." },
  { key: "5", title: "Is creating an account free?", content: "Yes. Creating an account, browsing properties, and contacting owners are completely free for all users." },
];

export default function FAQ() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-50/50 via-white to-white -z-10" />

      <div className="mx-auto max-w-3xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tighter">
            Need <span className="text-cyan-600">Help?</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion
            variant="surface"
            className="flex flex-col gap-4"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.key}
                aria-label={faq.title}
                className="group rounded-3xl border border-gray-100 bg-white px-6 py-2 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-cyan-500/5"
              >
                <span slot="title" className="text-lg font-bold text-gray-800">
                  {faq.title}
                </span>

                <p className="pb-4 leading-relaxed text-gray-500">
                  {faq.content}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}