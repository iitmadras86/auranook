"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, MapPin, Package, Users2, Send } from "lucide-react";
import { distributorBenefits, idealPartnerProfiles, processTimeline } from "@/data/distributors";

// Motion Guidance
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function DistributorshipPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* 1. Hero */}
      <section className="pt-32 pb-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl flex flex-col items-center"
          >
            <motion.span variants={fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Channel Partner Network
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Become an Authorized Uniceil Distributor
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-background/70 font-medium max-w-2xl mb-10">
              Join India&apos;s fastest-growing premium architectural systems brand. High margins, exclusive territories, and enterprise-grade support.
            </motion.p>
            <motion.a variants={fadeInUp} href="#apply" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-wide hover:brightness-110 transition-all shadow-[0_0_40px_-10px_rgba(184,159,93,0.5)]">
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Partner With Us */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Why Partner With Auranook?
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributorBenefits.map((benefit, idx) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {idx === 0 && <Package size={24} />}
                  {idx === 1 && <MapPin size={24} />}
                  {idx === 2 && <ShieldCheck size={24} />}
                  {idx === 3 && <Users2 size={24} />}
                  {idx === 4 && <TrendingUp size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ideal Partner Profile & Coverage */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ideal Partner Profile</h2>
            <p className="text-muted-foreground text-lg mb-8">We are looking for aggressive, growth-oriented businesses who understand the architectural and interior markets.</p>
            <ul className="flex flex-col gap-4">
              {idealPartnerProfiles.map(profile => (
                <li key={profile} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={24} />
                  <span className="text-lg font-semibold">{profile}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl bg-stone-100 border border-border flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="text-center">
              <MapPin size={64} className="text-primary/50 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">PAN India Coverage</h3>
              <p className="text-muted-foreground">Interactive territory map coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Process Timeline */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">Onboarding Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processTimeline.map((step, idx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-4 z-10">
                  {step.step}
                </div>
                {idx < processTimeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-border z-0" />
                )}
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Form */}
      <section id="apply" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Partner Application Form</h2>
            <p className="text-background/70">Take the first step towards a highly profitable partnership. Fill out the form and our channel development team will contact you within 24 hours.</p>
          </div>
          
          <form className="bg-background text-foreground p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Company Name</label>
              <input type="text" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter company name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Contact Person</label>
              <input type="text" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Email</label>
              <input type="email" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter email address" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Phone Number</label>
              <input type="tel" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter phone number" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">City</label>
              <input type="text" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter city" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">State</label>
              <input type="text" className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter state" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold">Business Type</label>
              <select className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select business type</option>
                {idealPartnerProfiles.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold">Message / Additional Details</label>
              <textarea rows={4} className="px-4 py-3 rounded-xl border border-border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about your current infrastructure..." />
            </div>
            <div className="md:col-span-2 pt-4">
              <button type="button" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-colors">
                <Send size={18} />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
