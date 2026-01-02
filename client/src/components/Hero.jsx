import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Hexagon } from 'lucide-react';

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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 mb-8">
              <Hexagon size={16} className="text-amber-600 fill-amber-600/20" />
              <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase font-sans">
                Systems for Scale
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight font-serif"
            >
              Don't just launch.
              <br />
              <span className="text-neutral-500 font-serif italic">
                Build a foundation.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-400 max-w-md mb-12 leading-relaxed font-light font-sans"
            >
              CRESIA engineers the digital infrastructure for founders who value longevity over hype. Branding, development, and automation in one cohesive system.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 font-sans">
              <a
                href="#services"
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-neutral-950 font-bold hover:bg-neutral-200 transition-all"
              >
                <span>View Frameworks</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-4 border border-neutral-700 text-white font-medium hover:border-amber-600 hover:text-amber-500 transition-all"
              >
                Book Strategy Call
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-1">
              <div className="bg-neutral-950 p-8 border border-neutral-800/50 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center">
                    <Layers size={20} className="text-neutral-400" />
                  </div>
                  <div className="h-px w-full bg-neutral-800 my-4"></div>
                  <div className="flex justify-between items-center text-neutral-500 text-sm font-mono">
                    <span>STATUS</span>
                    <span className="text-amber-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      OPTIMIZED
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-500 text-sm font-mono">
                    <span>SCALABILITY</span>
                    <span className="text-white">UNLIMITED</span>
                  </div>
                </div>
                <div className="space-y-2 mt-12">
                  <div className="h-1 w-3/4 bg-neutral-800"></div>
                  <div className="h-1 w-1/2 bg-neutral-800"></div>
                  <div className="h-1 w-full bg-neutral-800"></div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-neutral-800 bg-neutral-900/50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
