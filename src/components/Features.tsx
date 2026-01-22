"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Sparkles,
  AlertCircle,
  Bell,
} from "lucide-react";

function NetWorthFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:order-first"
          >
            <Image
              src="/images/home_screenshot.png"
              alt="Qurio home screen"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:order-last"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              One Number
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your complete financial picture
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              See your cash, investments, and debts—all in one place. No
              spreadsheets. No math. Just clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AISearchFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-first flex justify-center"
          >
            <Image
              src="/images/chat_screenshot.png"
              alt="Qurio chat interface"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:order-last"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Intelligent Search
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Ask anything about your money
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              Natural language questions. Instant answers. Powered by AI that
              understands your finances.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InsightsFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights: { icon: typeof AlertCircle; iconColor: string; iconBg: string; title: string; description: string; isAI: boolean }[] = [
    {
      icon: AlertCircle,
      iconColor: "text-warning",
      iconBg: "bg-warning/20",
      title: "Unusual charge detected",
      description: "$89.99 at AMZN MKTP - higher than your average Amazon order",
      isAI: true,
    },
    {
      icon: Bell,
      iconColor: "text-primary",
      iconBg: "bg-primary/20",
      title: "Netflix price increase",
      description: "Your subscription went up $3/month starting this billing cycle",
      isAI: false,
    },
    {
      icon: TrendingUp,
      iconColor: "text-positive",
      iconBg: "bg-positive/20",
      title: "Great month for savings!",
      description: "You saved 15% more than last month. Keep it up!",
      isAI: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Proactive Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Insights that find you
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              Get notified about unusual spending, subscription changes, and
              opportunities to save—before you even ask.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-5 hover:border-border-light transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 ${insight.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <insight.icon className={`w-5 h-5 ${insight.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-text-primary">
                        {insight.title}
                      </h3>
                      {insight.isAI && (
                        <span className="inline-flex items-center gap-1 bg-secondary/20 text-secondary text-xs px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          AI
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-sm">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SubscriptionsFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Subscription Tracking
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              See every subscription
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed">
              Automatically detect and track all your subscriptions. Get alerts
              before renewals and spot price changes instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/subscriptions_screenshot.png"
              alt="Qurio subscription tracking"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <AISearchFeature />
      <InsightsFeature />
      <NetWorthFeature />
      <SubscriptionsFeature />
    </>
  );
}
