"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  Sparkles,
  AlertCircle,
  Bell,
  ChevronRight,
  Send,
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
            transition={{ duration: 0.6 }}
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <p className="text-text-muted text-sm mb-2">Net Worth</p>
              <p className="text-5xl md:text-6xl font-light text-text-primary">
                $127,432
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-surface-light rounded-xl p-4 hover:bg-border/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-positive/20 rounded-full flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-positive" />
                  </div>
                  <span className="font-medium">Cash</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary">$24,580</span>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-surface-light rounded-xl p-4 hover:bg-border/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Investments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary">$108,245</span>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-surface-light rounded-xl p-4 hover:bg-border/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-negative/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-negative" />
                  </div>
                  <span className="font-medium">Credit Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-negative">-$5,393</span>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </div>
              </div>
            </div>
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
    <section ref={ref} className="py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-border rounded-3xl p-6 lg:order-first"
          >
            <div className="space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary text-background rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                  <p className="text-sm">How much did I spend on Uber this year?</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-surface-light border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span className="text-xs text-text-muted">AI Response</span>
                  </div>
                  <p className="text-sm text-text-primary">
                    You&apos;ve spent <span className="font-semibold text-primary">$847.32</span> on Uber this year across 43 rides.
                  </p>
                  <p className="text-sm text-text-secondary mt-2">
                    That&apos;s 12% less than last year. Your average ride costs $19.70.
                  </p>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary text-background rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                  <p className="text-sm">What about Lyft?</p>
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-surface-light border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                  <p className="text-sm text-text-primary">
                    You&apos;ve spent <span className="font-semibold text-primary">$156.20</span> on Lyft this year. Combined with Uber, your total rideshare spending is $1,003.52.
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-4 flex items-center gap-2 bg-surface-light rounded-xl px-4 py-3">
              <input
                type="text"
                placeholder="Ask a follow-up..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
                readOnly
              />
              <Send className="w-5 h-5 text-primary" />
            </div>
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

  const insights = [
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
    <section ref={ref} className="py-24 px-6">
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

export default function Features() {
  return (
    <>
      <NetWorthFeature />
      <AISearchFeature />
      <InsightsFeature />
    </>
  );
}
