"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Briefcase } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsHub() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Explore how Auranook enterprise systems have transformed commercial and residential spaces through innovative architectural solutions.
            </p>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-12"
            >
              {/* Project Title & Meta */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                    {project.clientSegment}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                    {project.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.materialsUsed.map((mat, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-secondary border border-border text-secondary-foreground font-semibold text-xs tracking-wide">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={project.heroImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
                </div>
                
                <div className="flex flex-col justify-center space-y-10">
                  <div>
                    <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-foreground">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                        <div className="w-3 h-3 rounded-full bg-destructive" />
                      </div>
                      The Challenge
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      The Solution
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery Strip */}
              {project.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                      <Image 
                        src={img} 
                        alt={`${project.title} gallery image ${idx + 1}`} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
