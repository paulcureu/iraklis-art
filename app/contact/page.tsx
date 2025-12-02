"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section with Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: "url('/art/Basreliefs/1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center p-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4"
            >
              Let's <span className="text-accent">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto"
            >
              Reach out to discuss your vision, commission a piece, or explore my work
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">Email</h3>
            <a
              href="mailto:narikaleli1@gmail.com"
              className="text-base md:text-lg text-primary/70 hover:text-accent transition-colors duration-300 break-all"
            >
              narikaleli1@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 md:p-10 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">Phone</h3>
            <a
              href="tel:+306975421099"
              className="text-base md:text-lg text-primary/70 hover:text-accent transition-colors duration-300"
            >
              +30 697 542 1099
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-panel p-8 md:p-10 text-center group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">Location</h3>
            <p className="text-base md:text-lg text-primary/70">
              Mount Athos, Greece
            </p>
            <p className="text-sm md:text-base text-primary/50 mt-2">
              Available Worldwide
            </p>
          </motion.div>
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-primary/60 font-light italic">
            "Every stone holds a story waiting to be revealed. Let's create something timeless together."
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
