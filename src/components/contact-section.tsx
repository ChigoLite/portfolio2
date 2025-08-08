"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface Toast {
  title: string;
  description: string;
  variant?: "success" | "error";
}

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<Toast | null>(null);

  // Debounced form validation
  useEffect(() => {
    const timeout = setTimeout(() => {
      validateForm();
    }, 500);
    return () => clearTimeout(timeout);
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message must be under 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        title: "Form Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("/pages/api", formData); // Updated to valid API route
      setToast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out. I'll respond within 24 hours.",
        variant: "success",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setToast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chrystnelson@gmail.com",
      link: "mailto:chrystnelson@gmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: "Reach out for project inquiries or collaborations.",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 903 631 5065",
      link: "tel:+2349036315065",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Available for calls during business hours (WAT).",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Enugu, Nigeria",
      link: null,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description: "Based in the heart of Nigeria's tech hub.",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ChigoLite",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      description: "Explore my open-source projects and contributions.",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aka-cornelius-489835252",
      color: "hover:text-blue-600",
      description: "Connect for professional networking and opportunities.",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/aka_cornelius?t=TA0V2CInTVDwcIMQLyFkgg&s=09",
      color: "hover:text-blue-400",
      description: "Follow for tech insights and updates.",
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
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-base-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg max-w-sm ${
              toast.variant === "success"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
            role="alert"
          >
            <div className="flex items-start gap-2">
              {toast.variant === "success" ? (
                <CheckCircle className="h-5 w-5 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 mt-0.5" />
              )}
              <div>
                <h4 className="font-semibold">{toast.title}</h4>
                <p className="text-sm">{toast.description}</p>
              </div>
              <button
                className="ml-auto p-1 hover:bg-white/20 rounded-full"
                onClick={() => setToast(null)}
                aria-label="Close notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 border border-primary/20"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed">
            Ready to collaborate on your next project or explore new
            opportunities? Reach out, and let’s build something extraordinary
            together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-base-content">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-base-content"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input input-bordered w-full bg-base-100 border-base-200 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${
                          errors.name
                            ? "border-error focus:border-error focus:ring-error/20"
                            : ""
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <div
                          id="name-error"
                          className="flex items-center gap-1 text-sm text-error"
                        >
                          <AlertCircle className="h-4 w-4" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-base-content"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input input-bordered w-full bg-base-100 border-base-200 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${
                          errors.email
                            ? "border-error focus:border-error focus:ring-error/20"
                            : ""
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <div
                          id="email-error"
                          className="flex items-center gap-1 text-sm text-error"
                        >
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-base-content"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input input-bordered w-full bg-base-100 border-base-200 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${
                        errors.subject
                          ? "border-error focus:border-error focus:ring-error/20"
                          : ""
                      }`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    {errors.subject && (
                      <div
                        id="subject-error"
                        className="flex items-center gap-1 text-sm text-error"
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-base-content"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`textarea textarea-bordered w-full bg-base-100 border-base-200 focus:border-primary focus:ring-primary/20 resize-none transition-all duration-200 ${
                        errors.message
                          ? "border-error focus:border-error focus:ring-error/20"
                          : ""
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    <div className="flex justify-between items-center">
                      {errors.message && (
                        <div
                          id="message-error"
                          className="flex items-center gap-1 text-sm text-error"
                        >
                          <AlertCircle className="h-4 w-4" />
                          {errors.message}
                        </div>
                      )}
                      <div className="text-xs text-base-content/60 ml-auto">
                        {formData.message.length}/500 characters
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                    aria-label="Submit contact form"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="loading loading-spinner loading-sm"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Info Card */}
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-base-content">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Contact Details
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-base-200/50 transition-colors"
                      >
                        <div
                          className={`p-2 rounded-lg ${item.bgColor} border ${item.borderColor}`}
                        >
                          <IconComponent className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-base-content hover:text-primary transition-colors font-medium"
                              aria-label={`Contact via ${item.title}`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-base-content font-medium">
                              {item.value}
                            </p>
                          )}
                          <p className="text-xs text-base-content/60 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-base-content">
                  Let’s Connect Online
                </h3>

                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200/50 transition-all duration-200 group"
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <div className="p-2 bg-base-200 rounded-lg group-hover:bg-base-200/80 transition-colors">
                          <IconComponent
                            className={`h-5 w-5 text-base-content/60 ${social.color} transition-colors`}
                          />
                        </div>
                        <div>
                          <span className="font-medium text-base-content group-hover:text-primary transition-colors">
                            {social.name}
                          </span>
                          <p className="text-xs text-base-content/60">
                            {social.description}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-base-200">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Typically responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
