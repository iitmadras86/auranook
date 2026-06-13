"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", inquiryType: "General Inquiry", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Connect With <span className="text-primary">Auranook</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Our architectural specialists are ready to collaborate on your next project. Reach out for technical consultations, customized quotes, or partnership opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-extrabold mb-8 text-card-foreground">Send an Inquiry</h3>
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Inquiry Received</h4>
                <p className="text-card-foreground/70 mb-8">
                  Thank you for reaching out. Our engineering team will review your requirements and contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-card-foreground/80">Full Name *</label>
                    <input 
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-card-foreground/80">Company Name</label>
                    <input 
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      placeholder="Design & Co."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-card-foreground/80">Email Address *</label>
                    <input 
                      type="email" required name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-card-foreground/80">Phone Number</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-card-foreground/80">Inquiry Type</label>
                  <select 
                    name="inquiryType" value={formData.inquiryType} onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Product Specification / Quote</option>
                    <option>Distributorship Application</option>
                    <option>Architect / Designer Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-card-foreground/80">Project Details / Message *</label>
                  <textarea 
                    required rows={5} name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {status === "error" && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Submit Inquiry <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-3xl font-extrabold mb-8 text-foreground">Global Headquarters</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Corporate Office</h5>
                    <p className="text-foreground/70 leading-relaxed">
                      Auranook Architectural Systems Pvt. Ltd.<br />
                      Level 14, Prestige Trade Tower,<br />
                      Palace Road, Bangalore 560001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Email Connect</h5>
                    <p className="text-foreground/70 mb-1">info@auranook.com</p>
                    <p className="text-foreground/70">sales@auranook.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Direct Lines</h5>
                    <p className="text-foreground/70 mb-1">+91 1800 123 4567 (Toll Free)</p>
                    <p className="text-foreground/70">+91 80 4567 8900 (Corporate)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-foreground text-background rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Architectural Partnerships</h4>
              <p className="text-background/80 mb-6 text-sm leading-relaxed">
                We offer exclusive support for architects, including customized CAD details, BIM objects, and priority sampling for enterprise projects.
              </p>
              <button className="text-primary font-bold hover:underline underline-offset-4 text-sm flex items-center gap-2">
                Join Partner Program
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
