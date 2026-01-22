"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "256-bit encryption",
    description: "Bank-level encryption protects your data in transit and at rest.",
  },
  {
    icon: Eye,
    title: "Read-only access",
    description: "We can see your data, but we can never move your money.",
  },
  {
    icon: Server,
    title: "Powered by Plaid + SnapTrade",
    description: "The same technology trusted by Venmo, Robinhood, and millions of users.",
  },
  {
    icon: Shield,
    title: "No data sold. Ever.",
    description: "Your financial data is yours. We never sell it to third parties.",
  },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Bank-Level Security
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Your data stays yours
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
