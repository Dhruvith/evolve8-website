'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, useReducedMotion } from 'framer-motion';
import { Elev8AlarmLogo } from '@/components/Elev8AlarmLogo';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Globe, 
  Briefcase, 
  Zap, 
  Award, 
  Calendar,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Rocket,
  DollarSign
} from 'lucide-react';

export default function Elev8StartupsPage() {
  const shouldReduceMotion = useReducedMotion();

  // Optimized animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const viewportOptions = { once: true, margin: '-100px' };

  const sectors = [
    'Robotics',
    'Deep Technology',
    'AI & Machine Learning',
    'Blockchain',
    'SaaS / B2B',
    'Fintech',
    'Health Tech'
  ];

  const objectives = [
    {
      icon: Rocket,
      title: 'Transform Ideas into MVPs',
      description: 'Convert early-stage concepts into functional, market-ready products'
    },
    {
      icon: Globe,
      title: 'Cross-Border Growth',
      description: 'Foster expansion between India and UAE markets'
    },
    {
      icon: Briefcase,
      title: 'Resource Access',
      description: 'Provide comprehensive startup resources and infrastructure'
    },
    {
      icon: Target,
      title: 'Product-Market Fit',
      description: 'Build strong alignment between products and target markets'
    },
    {
      icon: Building2,
      title: 'Sustainable Business Models',
      description: 'Establish viable, scalable business foundations'
    },
    {
      icon: DollarSign,
      title: 'Early-Stage Funding',
      description: 'Secure initial investment and funding opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Expand into new markets and customer segments'
    }
  ];

  const phases = [
    {
      number: '01',
      title: 'Foundation',
      weeks: 'Week 1-2',
      items: [
        'Team onboarding',
        'Understanding solutions',
        'User identification',
        'Goal setting'
      ]
    },
    {
      number: '02',
      title: 'Build & Validate',
      weeks: 'Week 3-6',
      items: [
        'Market research',
        'Competitor benchmarking',
        'Solution overview',
        'MVP development'
      ]
    },
    {
      number: '03',
      title: 'Growth & Funding Prep',
      weeks: 'Week 7-10',
      items: [
        'Go-to-market strategy',
        'Investor deck preparation',
        'MVP refinement'
      ]
    },
    {
      number: '04',
      title: 'Demo Day & Launch',
      weeks: 'Week 11-12',
      items: [
        'Investor pitching',
        'Demo Day with panel',
        'Legal, branding, and marketing support'
      ]
    }
  ];

  const masterclasses = [
    { week: 1, topic: 'Idea Validation' },
    { week: 2, topic: 'Market Research' },
    { week: 3, topic: 'Product Strategy' },
    { week: 4, topic: 'UX/UI Design Principles' },
    { week: 5, topic: 'MVP Development' },
    { week: 6, topic: 'Business Modeling' },
    { week: 7, topic: 'Go-to-Market Strategy' },
    { week: 8, topic: 'Fundraising' },
    { week: 9, topic: 'Growth Hacking' },
    { week: 10, topic: 'Scaling & Operations' }
  ];

  const deliverables = [
    'MVP Development Support',
    'UX/UI Design',
    'Go-to-Market Strategy Template',
    'Weekly 1:1 Mentoring',
    'Branding & Identity Package',
    'Digital Marketing Guidelines',
    'Investor Access & Regional Demo Day',
    'UAE Company Formation Assistance'
  ];

  const mentorshipBenefits = [
    'Direct mentorship from industry experts',
    'Access to extensive founder and investor networks',
    'Introductions to strategic partners',
    'Exclusive workshops and masterclasses'
  ];

  const timelines = [
    { milestone: 'Applications Open', date: 'August 2025' },
    { milestone: 'Application Deadline', date: 'October 15, 2025' },
    { milestone: 'Program Start', date: 'November 2025' },
    { milestone: 'Demo Day', date: 'December 15, 2025' }
  ];

  return (
    <main className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-dark via-darkPurple to-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333EA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="flex-shrink-0">
                <Elev8AlarmLogo size={56} />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-3 leading-tight">
                  Elev8 Alpha
                </h1>
                <div className="bg-gradient-to-r from-purple via-violet to-lightPurple px-4 md:px-6 py-2 md:py-3 rounded-full inline-block">
                  <p className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white">
                    Startup Accelerator by Evolve8 Studio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Evolve8 Studio */}
      <section className="py-20 md:py-32 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              About Evolve8 Studio
            </h2>
          </motion.div>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-base md:text-lg lg:text-xl text-gray leading-relaxed">
              Evolve8 Studio is a Dubai-based Venture Studio focused on empowering startups. 
              We provide comprehensive support in MVP development, business modeling, branding, 
              funding, and market expansion, with a strong focus on India and UAE markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Program Overview
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray max-w-4xl leading-relaxed mb-8">
              Elev8 Alpha is a <strong className="text-white font-semibold">12-week hybrid accelerator program</strong> designed for 
              tech startups. With a physical presence in Dubai/UAE and digital reach across UAE, 
              we provide full startup transformation—from idea to Alpha.
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 md:px-6 py-2 md:py-3 bg-purple/20 border border-purple/30 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-purple/30 hover:border-purple/50 transition-all duration-300 cursor-default"
                >
                  {sector}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 md:py-32 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Objectives
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-purple/20 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Target and objectives"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/10 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="space-y-4 md:space-y-6"
            >
              {objectives.map((obj, index) => (
                <motion.div
                  key={obj.title}
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 md:p-6 bg-darkPurple/80 border border-purple/30 rounded-xl hover:border-purple/50 hover:bg-darkPurple/90 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple/20 border border-purple/30 flex items-center justify-center group-hover:bg-purple/30 group-hover:border-purple/50 transition-all duration-300">
                    <obj.icon className="w-5 h-5 md:w-6 md:h-6 text-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base md:text-lg text-white mb-1">
                      {obj.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray leading-relaxed">{obj.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elev8 Alpha Structure */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12 md:mb-16"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Elev8 Alpha Structure
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOptions}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-darkPurple/80 border border-purple/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:shadow-purple/20 hover:border-purple/50 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-purple/20 mb-3 md:mb-4 group-hover:text-purple/30 transition-colors">
                  {phase.number}
                </div>
                <div className="text-xs md:text-sm font-semibold text-purple mb-2">{phase.weeks}</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 md:mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm md:text-base text-gray">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-purple flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Masterclass Sessions */}
      <section className="py-20 md:py-32 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              10 Masterclass Sessions
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-purple/20 group order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Masterclass sessions"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/10 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="space-y-3 md:space-y-4 order-1 md:order-2"
            >
              {masterclasses.map((session, index) => (
                <motion.div
                  key={session.week}
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...fadeInUp.transition, delay: index * 0.04 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-darkPurple/80 border border-purple/30 rounded-xl hover:border-purple/50 hover:bg-darkPurple/90 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple/20 border border-purple/30 flex items-center justify-center text-white font-display font-bold text-lg md:text-xl group-hover:bg-purple/30 group-hover:border-purple/50 transition-all duration-300">
                    {session.week}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-base md:text-lg text-white">
                      {session.topic}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup Support & Deliverables */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Startup Support & Deliverables
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="md:col-span-1"
            >
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">
                Deliverables
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {deliverables.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={scaleIn.initial}
              whileInView={scaleIn.animate}
              viewport={viewportOptions}
              transition={scaleIn.transition}
              className="md:col-span-1 relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-purple/20 group order-3 md:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                alt="Mentorship and support"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/10 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="md:col-span-1 order-2 md:order-3"
            >
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">
                Mentorship & Network Access
              </h3>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {mentorshipBenefits.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={fadeInRight.initial}
                    whileInView={fadeInRight.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInRight.transition, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple via-violet to-lightPurple p-4 md:p-6 rounded-xl border border-purple/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <h4 className="font-display font-bold text-lg md:text-xl text-white">Demo Day</h4>
                </div>
                <p className="text-xl md:text-2xl font-display font-bold text-white mb-2">December 15, 2025</p>
                <p className="text-sm md:text-base text-purple-100 leading-relaxed">
                  Present your startup to a panel of investors and industry leaders
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Startups Join Us */}
      <section className="py-20 md:py-32 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Why Startups Join Us?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={viewportOptions}
              transition={fadeInLeft.transition}
              className="space-y-4 md:space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6">
                Cross-Border Expansion Opportunity
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { icon: Building2, text: 'Assistance with UAE incorporation' },
                  { icon: Users, text: 'Mentor matching with industry experts' },
                  { icon: Globe, text: 'Introductions to UAE Startup Ecosystem' },
                  { icon: Award, text: '3-month post-program support for Dubai operations' }
                ].map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={viewportOptions}
              transition={fadeInRight.transition}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-purple/20 group order-first md:order-last"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Startup presentation"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkPurple via-purple/10 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple via-violet to-lightPurple">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={scaleIn.initial}
            whileInView={scaleIn.animate}
            viewport={viewportOptions}
            transition={scaleIn.transition}
            className="text-center"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              WE'RE NOT JUST ACCELERATING IDEAS, WE'RE SHAPING FUTURE FOUNDERS, PRODUCTS, AND ECOSYSTEMS ACROSS INDIA AND THE UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Timelines */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-12"
          >
            <div className="flex-shrink-0">
              <Elev8AlarmLogo size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Key Timelines
            </h2>
          </motion.div>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="bg-darkPurple/80 border border-purple/30 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <div className="space-y-4 md:space-y-6">
                {timelines.map((timeline, index) => (
                  <motion.div
                    key={timeline.milestone}
                    initial={fadeInLeft.initial}
                    whileInView={fadeInLeft.animate}
                    viewport={viewportOptions}
                    transition={{ ...fadeInLeft.transition, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 md:p-6 bg-dark border border-purple/30 rounded-xl hover:border-purple/50 transition-all duration-300 group"
                  >
                    <span className="text-lg md:text-xl font-display font-semibold text-white">
                      {timeline.milestone}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-purple group-hover:text-lightPurple transition-colors">
                      {timeline.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-darkPurple/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOptions}
            transition={fadeInUp.transition}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8">
              Contact
            </h2>
            <div className="flex justify-center mb-8">
              <Elev8AlarmLogo size={64} />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to transform your startup idea into reality? Get in touch with us to learn more about Elev8 Alpha.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <motion.a
                href="tel:+916353764766"
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={viewportOptions}
                transition={scaleIn.transition}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-darkPurple/80 border border-purple/30 rounded-full hover:border-purple/50 hover:bg-darkPurple/90 transition-all duration-300 text-white font-semibold backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-purple" />
                <span className="text-sm md:text-base">+91 6353764766</span>
              </motion.a>
              <motion.a
                href="mailto:elev8alpha@evolve8studio.com"
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={viewportOptions}
                transition={{ ...scaleIn.transition, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-darkPurple/80 border border-purple/30 rounded-full hover:border-purple/50 hover:bg-darkPurple/90 transition-all duration-300 text-white font-semibold backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 text-purple" />
                <span className="text-sm md:text-base">elev8alpha@evolve8studio.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
