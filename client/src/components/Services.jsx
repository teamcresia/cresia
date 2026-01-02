import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const glowHover = {
  hover: {
    boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    y: -5,
    transition: { duration: 0.3 }
  }
};

const Services = () => {
  const tiers = [
    {
      name: "Silver",
      subtitle: "The Launchpad",
      priceDesc: "Essential Foundation",
      features: [
        "Custom Web Design (Home + 3 Pages)",
        "Mobile-First Responsive Layout",
        "Basic SEO & Analytics Setup",
        "Contact Form Integration",
        "1-Hour Strategy Handover"
      ],
      ideal: "For solo founders validating an MVP.",
      color: "border-neutral-800",
      btnClass: "bg-transparent border border-white text-white hover:bg-neutral-800"
    },
    {
      name: "Gold",
      subtitle: "The Brand Authority",
      priceDesc: "Most Popular",
      features: [
        "Everything in Silver",
        "Full Brand Identity System",
        "CMS for Content/Blog",
        "CRM & Email Integration",
        "Custom Animations & Motion"
      ],
      ideal: "For growing teams establishing market dominance.",
      color: "border-amber-600/30 bg-neutral-900/30",
      btnClass: "bg-white text-neutral-950 hover:bg-neutral-200"
    },
    {
      name: "Platinum",
      subtitle: "The Growth Engine",
      priceDesc: "Full Scale System",
      features: [
        "Everything in Gold",
        "Custom Web App Functionality",
        "Complex Automation Workflows",
        "User Portal / Membership Areas",
        "3 Months Priority Support"
      ],
      ideal: "For businesses ready to automate and scale aggressively.",
      color: "border-neutral-800",
      btnClass: "bg-transparent border border-white text-white hover:bg-neutral-800"
    }
  ];

  return (
    <section id="services" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-sans">
            Our Frameworks
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-bold font-serif">
            Choose Your Foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={glowHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 border ${tier.color} flex flex-col justify-between min-h-[600px]`}
            >
              {tier.name === "Gold" && (
                <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-sans">
                  Recommended
                </div>
              )}

              <div>
                <h3 className="text-3xl font-light text-white mb-1 font-serif">
                  {tier.name}
                </h3>
                <p className="text-lg font-bold text-neutral-500 mb-6 uppercase tracking-widest font-sans">
                  {tier.subtitle}
                </p>

                <div className="h-px w-full bg-neutral-800 mb-8"></div>

                <div className="mb-8">
                  <p className="text-sm text-neutral-500 mb-2 font-mono uppercase">
                    Designed For:
                  </p>
                  <p className="text-neutral-300 italic font-serif">
                    "{tier.ideal}"
                  </p>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3 text-sm text-neutral-300 font-sans"
                    >
                      <Check size={16} className="text-amber-600 mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className={`w-full py-4 flex items-center justify-center font-bold tracking-wide transition-all ${tier.btnClass} font-sans`}
                >
                  Select {tier.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
