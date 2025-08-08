"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Calendar, Code2, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: "full-time" | "freelance" | "contract";
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      title: "Senior MERN Stack Developer",
      company: "NineTalent.ng",
      period: "2023 - 2024",
      description:
        "Spearheaded the development of scalable, enterprise-grade web applications, driving a 30% improvement in performance metrics. Mentored a team of 5 junior developers, establishing modern workflows and best practices for CI/CD and code quality.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TypeScript",
        "AWS",
        "Docker",
      ],
      type: "full-time",
    },
    {
      title: "Backend Developer",
      company: "Enugu State Tech Hub",
      period: "2022 - 2023",
      description:
        "Architected and maintained robust RESTful and GraphQL APIs for 10+ client projects, reducing server response times by 25%. Collaborated with cross-functional teams to deliver secure, high-performance web applications.",
      technologies: ["Node.js", "MongoDB", "Express", "GraphQL", "SpringBoot"],
      type: "full-time",
    },
    {
      title: "Frontend Developer",
      company: "Freelancer",
      period: "2019 - Present",
      description:
        "Designed and developed responsive, accessible user interfaces for 15+ clients, achieving 98% client satisfaction. Partnered with designers to deliver pixel-perfect, performance-optimized websites with a focus on accessibility (WCAG 2.1).",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "React Native",
        "Expo",
        "Webpack",
      ],
      type: "freelance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "full-time":
        return <Briefcase className="h-4 w-4" />;
      case "freelance":
        return <Code2 className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20";
      case "freelance":
        return "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20";
      default:
        return "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20";
    }
  };

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-base-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
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
            <Briefcase className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed">
            With over 4 years of experience as a full-stack developer, I
            specialize in crafting scalable, high-performance web applications
            using cutting-edge technologies. My work spans diverse industries,
            delivering innovative solutions and mentoring teams to achieve
            excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-base-200 to-transparent" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                  aria-label={`Timeline node for ${experience.title} at ${experience.company}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                    className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-base-100 shadow-md"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-base-content/70">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3 sm:mt-0">
                        <div
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                            experience.type
                          )}`}
                        >
                          {getTypeIcon(experience.type)}
                          <span className="capitalize">{experience.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-base-content/60 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{experience.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-base-content/70 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            variants={tagVariants}
                            animate={inView ? "visible" : "hidden"}
                            transition={{
                              delay: index * 0.3 + techIndex * 0.05 + 0.5,
                            }}
                            className="inline-flex items-center px-3 py-1 bg-base-200/50 text-base-content/80 text-xs font-medium rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="btn btn-primary px-6 py-3 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Contact me for opportunities"
          >
            <span className="mr-2 w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
            Open to New Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
