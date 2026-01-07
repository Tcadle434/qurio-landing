"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Link2, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Download Qurio",
    description: "Get the app from the App Store. Setup takes less than a minute.",
  },
  {
    number: "2",
    icon: Link2,
    title: "Link your accounts",
    description: "Securely connect your banks, cards, and investments via Plaid.",
  },
  {
    number: "3",
    icon: MessageSquare,
    title: "Start asking",
    description: "Ask anything about your money. Get instant, AI-powered answers.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get started in minutes
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-background font-bold text-2xl mb-6 relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
