"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-base-100"
      role="region"
      aria-label="Hero section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 opacity-70" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ChigoLite
                </span>
                , Your MERN Stack Expert
              </h1>
              <div className="text-xl md:text-2xl font-medium text-base-content/70">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Full-Stack Developer
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-base-content/70 max-w-xl leading-relaxed"
            >
              4+ years crafting scalable, user-centric MERN solutions for global
              clients, with expertise in full-stack development and DevOps.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="#contact">
                <button
                  className="btn btn-primary hover:shadow-xl transition-all duration-300 group"
                  aria-label="Navigate to contact section"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/Aka_Cornelius.pdf" download>
                <button
                  className="btn btn-ghost border-base-200 hover:bg-base-200 transition-all duration-300"
                  aria-label="Download CV"
                >
                  <Download className="mr-2 h-5 w-5 text-primary" />
                  Download CV
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-4 pt-4"
            >
              <span className="text-sm text-base-content/60">
                Let’s connect:
              </span>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/ChigoLite",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/aka-cornelius-489835252",
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: "#contact", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-2 rounded-full bg-base-200/50 hover:bg-base-200 transition-all duration-300 hover:scale-110 transform"
                    aria-label={`Visit ${label} profile`}
                  >
                    <Icon className="h-5 w-5 text-primary hover:text-accent" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-md mx-auto card bg-base-100/95 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-70" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-70" />

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-base-200/20" />
                <Image
                  src="/bob.jpeg"
                  alt="Profile image of ChigoLite, MERN Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Tech Stack Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["React", "Node.js", "MongoDB", "DevOp"].map(
                      (tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.2 + index * 0.1,
                          }}
                          className="px-3 py-1 bg-base-200/50 backdrop-blur-sm text-base-content text-xs font-medium rounded-full border border-base-200/20"
                        >
                          {tech}
                        </motion.span>
                      )
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-base-200 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
