"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Monitor,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      name: "Web Development",
      description: "Building responsive, scalable websites.",
    },
    {
      name: "Mobile Apps",
      description: "Crafting cross-platform mobile solutions.",
    },
    {
      name: "API Development",
      description: "Designing secure, efficient APIs.",
    },
    {
      name: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces.",
    },
    { name: "Consulting", description: "Providing expert tech guidance." },
    { name: "Maintenance", description: "Ensuring long-term app performance." },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ChigoLite",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aka-cornelius-489835252",
      icon: Linkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Twitter",
      href: "https://x.com/aka_cornelius?t=TA0V2CInTVDwcIMQLyFkgg&s=09",
      icon: Twitter,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Email",
      href: "mailto:chrystnelson@gmail.com",
      icon: Mail,
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative border-t bg-base-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ChigoLite
                </span>
              </Link>

              <p className="text-base-content/70 mb-4 leading-relaxed text-sm">
                Crafting innovative web solutions with 4+ years of MERN stack
                expertise, driving impact for global clients.
              </p>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-base-content/60" />
                <span className="text-sm text-base-content/60">
                  Enugu, Nigeria
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Link
                  href="#contact"
                  className="text-sm text-base-content/60 hover:text-primary transition-colors"
                  aria-label="Contact me to collaborate"
                >
                  Ready to collaborate on your next project!
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={itemVariants}
            className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-base-content">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base-content/70 hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                      aria-label={`Go to ${link.name} section`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-base-content">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-primary rounded-full" />
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-base-content/60 rounded-full mt-2" />
                    <div>
                      <span className="text-base-content/70 text-sm font-medium">
                        {service.name}
                      </span>
                      <p className="text-xs text-base-content/60">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links and Back to Top */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-base-200"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-sm text-base-content/60">
              Connect with me:
            </span>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
                    className={`p-2 rounded-lg bg-base-200/50 ${social.bgColor} ${social.color} transition-all duration-200 hover:scale-110 transform`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn btn-ghost hover:bg-base-200/50 transition-all duration-200 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
            Back to Top
          </button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-base-200 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-base-content/60">
              © {new Date().getFullYear()} ChigoLite. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-sm text-base-content/60">
              <span className="flex items-center gap-1">
                Made with
                <Heart
                  className="h-5 w-5 text-red-600 group-hover:text-accent animate-pulse transition-all duration-300 group-hover:scale-110"
                  aria-label="Made with passion"
                />{" "}
                in Nigeria
              </span>
              <div className="flex items-center gap-1">
                <Monitor className="h-4 w-4 text-primary" />
                Built with Next.js
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
