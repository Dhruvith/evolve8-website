'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Elev8AlarmLogo } from '@/components/Elev8AlarmLogo';

export default function Elev8StartupsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-dark via-darkPurple to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center gap-4 mb-6">
              <Elev8AlarmLogo size={64} />
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white">
                Elev8 Startups
              </h1>
            </div>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Content coming next — share the copy and sections you want here and I’ll fill it in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-darkPurple/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-darkPurple/80 border border-purple/30 rounded-2xl p-8 text-center">
            <p className="text-white/90 text-lg">
              This page is created and linked in the navbar. Send the Elev8 Startups content when ready.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


