"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Server,
  Database,
  Cloud,
  Zap,
  Lightbulb,
  ShieldCheck,
  Users,
  User,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface USP {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Responsive React and Next.js interfaces with TailwindCSS.",
      delay: 0.1,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable APIs with Node.js, Express, and TypeScript.",
      delay: 0.2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient MongoDB and SQL solutions for data storage.",
      delay: 0.3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: Cloud,
      title: "DevOps & Deployment",
      description: "Seamless CI/CD with Docker, AWS, and Vercel.",
      delay: 0.4,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
  ];

  const usps: USP[] = [
    {
      icon: Zap,
      title: "Full-Stack Expertise",
      description: "End-to-end MERN stack solutions for seamless performance.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: Lightbulb,
      title: "Innovative Problem Solver",
      description: "Cutting-edge tech for impactful, user-centric solutions.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: ShieldCheck,
      title: "Scalable & Secure",
      description: "Robust apps with scalability and security at the core.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Teamwork delivering high-quality projects on time.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
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
      id="about"
      className="py-20 relative overflow-hidden bg-base-100"
      role="region"
      aria-label="About section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
      </div>

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
            <User className="h-6 w-6 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed"
          >
            Full-stack developer with 4+ years of MERN expertise, delivering
            impactful projects for global clients while studying at Enugu State
            University. Passionate about crafting innovative solutions with a
            focus on scalability, security, and seamless DevOps integration.
          </motion.p>
        </motion.div>

        {/* Unique Selling Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Choose Me?
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {usps.map((usp, index) => {
              const IconComponent = usp.icon;
              return (
                <motion.div
                  key={usp.title}
                  variants={itemVariants}
                  custom={index}
                  className="group"
                >
                  <div className="card bg-base-100/95 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md">
                    <div className="p-6 flex flex-col items-center text-center">
                      <div
                        className={`w-14 h-14 rounded-full ${usp.bgColor} flex items-center justify-center mb-4 border ${usp.borderColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${usp.color} group-hover:text-accent`}
                        />
                      </div>
                      <h4
                        id={`usp-${index}`}
                        className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
                      >
                        {usp.title}
                      </h4>
                      <p
                        className="text-base-content/70 text-sm leading-relaxed"
                        aria-labelledby={`usp-${index}`}
                      >
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                className="group"
              >
                <div className="card bg-base-100/95 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div
                      className={`w-14 h-14 rounded-full ${service.bgColor} flex items-center justify-center mb-4 border ${service.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-6 w-6 ${service.color} group-hover:text-accent`}
                      />
                    </div>
                    <h3
                      id={`service-${index}`}
                      className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base-content/70 text-sm leading-relaxed"
                      aria-labelledby={`service-${index}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
