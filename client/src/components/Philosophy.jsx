import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Philosophy = () => {
  const points = [
    {
      icon: <Target size={24} />,
      title: "Strategy First",
      desc: "We don't write a line of code until we understand your 5-year vision. Every pixel serves a business purpose."
    },
    {
      icon: <Layers size={24} />,
      title: "Modular Systems",
      desc: "Stop rebuilding every two years. Our stacks are built to scale with you, allowing new features to snap in easily."
    },
    {
      icon: <Zap size={24} />,
      title: "Automation Native",
      desc: "A pretty website that doesn't talk to your CRM is a liability. We connect your frontend to your operations."
    }
  ];

  return (
    <section id="philosophy" className="py-32 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-sans">
            The Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-bold max-w-3xl leading-tight font-serif">
            Founders need clarity, not complexity.
            <br />
            <span className="text-neutral-600 font-serif italic">
              We bridge the gap between design and business logic.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="p-8 border border-neutral-800 bg-neutral-900/20 hover:border-amber-900/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:bg-amber-600 group-hover:border-amber-600 transition-colors duration-500">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif">
                {point.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm font-light font-sans">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
