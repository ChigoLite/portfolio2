"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="py-20 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-4"
        >
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Software Engineer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">ChigoLite</span>
          </h1>

          <p className="text-muted-foreground max-w-md">
            I'm a passionate MERN stack developer with over 4 years of
            experience building modern web applications. I specialize in
            creating robust, scalable, and user-friendly solutions for complex
            problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link className="link link-hover m-0 p-0 " href="#contact">
              <button className="btn bg-blue-800">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
            {/* <button className="btn bg-blue-950">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-lg flex items-center justify-center">
            <img
              src="/bob.jpeg"
              alt="Bob - MERN Stack Developer"
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
