"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const exampleQueries = [
  "How much did I spend on food last month?",
  "What's my net worth?",
  "Show me all my subscriptions",
  "What did I spend at Target?",
  "How are my investments doing?",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuery = exampleQueries[queryIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentQuery.length) {
          setDisplayText(currentQuery.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentQuery.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next query
          setIsDeleting(false);
          setQueryIndex((queryIndex + 1) % exampleQueries.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, queryIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-text-secondary text-sm font-medium">
            Personal Finance, Simplified
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          A{" "}
          <span className="gradient-text">search bar</span>
          <br />
          for your money
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto"
        >
          One number. Infinite questions.
          <br className="hidden sm:block" />
          Stop budgeting. Start asking.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-text-primary text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-text-secondary transition-all hover:scale-105 glow-sm"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Download on the App Store
          </a>
        </motion.div>

        {/* Animated Search Bar Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-border rounded-2xl p-4 glow">
            <div className="flex items-center gap-3 bg-surface-light rounded-xl px-4 py-4">
              <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
              <span className="text-text-primary text-lg">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
            <p className="text-text-muted text-sm mt-3 text-center">
              Ask anything about your finances
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
