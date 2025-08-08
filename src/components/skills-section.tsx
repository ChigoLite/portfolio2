"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Server,
  Database,
  Settings,
  Zap,
  TrendingUp,
  Star,
  Filter,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  description: string;
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [filter, setFilter] = useState<string>("frontend"); // Default to frontend

  const skills: Skill[] = [
    // Frontend
    {
      name: "React",
      level: 95,
      category: "frontend",
      description:
        "Built 10+ scalable web applications with reusable components.",
    },
    {
      name: "Next.js",
      level: 90,
      category: "frontend",
      description:
        "Developed SEO-optimized, server-rendered apps for 5+ clients.",
    },
    {
      name: "TypeScript",
      level: 85,
      category: "frontend",
      description: "Enhanced type safety in 8+ React projects.",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "frontend",
      description: "Styled 15+ responsive UIs with utility-first CSS.",
    },
    {
      name: "React Native/Expo",
      level: 85,
      category: "frontend",
      description: "Created 3 cross-platform mobile apps.",
    },
    // Backend
    {
      name: "Node.js",
      level: 90,
      category: "backend",
      description: "Powered 12+ APIs with high-performance server logic.",
    },
    {
      name: "Express.js",
      level: 90,
      category: "backend",
      description: "Built RESTful APIs for 10+ client projects.",
    },
    {
      name: "REST API",
      level: 95,
      category: "backend",
      description: "Designed secure, scalable APIs serving 1,000+ users.",
    },
    {
      name: "GraphQL",
      level: 80,
      category: "backend",
      description: "Implemented efficient data queries for 3 projects.",
    },
    {
      name: "Authentication",
      level: 85,
      category: "backend",
      description: "Secured 8+ apps with JWT and OAuth.",
    },
    // Database
    {
      name: "MongoDB",
      level: 90,
      category: "database",
      description: "Managed NoSQL databases for 10+ applications.",
    },
    {
      name: "MySQL",
      level: 90,
      category: "database",
      description: "Managed MySQL databases for 10+ applications.",
    },
    {
      name: "Mongoose",
      level: 85,
      category: "database",
      description: "Streamlined MongoDB interactions in 7 projects.",
    },
    {
      name: "SQL",
      level: 75,
      category: "database",
      description: "Designed relational schemas for 4 enterprise apps.",
    },
    {
      name: "Redis",
      level: 70,
      category: "database",
      description: "Optimized caching for 2 high-traffic apps.",
    },
    // Tools
    {
      name: "Git",
      level: 90,
      category: "tools",
      description: "Managed version control for 20+ team projects.",
    },
    {
      name: "Docker",
      level: 80,
      category: "tools",
      description: "Containerized 5+ applications for deployment.",
    },
    {
      name: "AWS",
      level: 75,
      category: "tools",
      description: "Deployed 4+ apps on EC2 and S3.",
    },
    {
      name: "CI/CD",
      level: 80,
      category: "tools",
      description: "Automated pipelines for 6+ projects.",
    },
  ];

  const categories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      count: skills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      count: skills.filter((s) => s.category === "backend").length,
    },
    {
      id: "database",
      name: "Database & Storage",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      count: skills.filter((s) => s.category === "database").length,
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      count: skills.filter((s) => s.category === "tools").length,
    },
  ];

  const filteredSkills = skills.filter((skill) => skill.category === filter);

  const getSkillLevel = (level: number) => {
    if (level >= 90)
      return { label: "Expert", icon: Star, color: "text-yellow-500" };
    if (level >= 80)
      return { label: "Advanced", icon: TrendingUp, color: "text-green-500" };
    if (level >= 70)
      return { label: "Intermediate", icon: Zap, color: "text-blue-500" };
    return { label: "Beginner", icon: Code2, color: "text-gray-500" };
  };

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-base-100">
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
            <Zap className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed">
            With over 4 years of experience, I’ve mastered a diverse set of
            technologies across the full stack, delivering scalable,
            high-performance solutions for 50+ projects. Explore my skills
            below.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`btn btn-sm transition-all duration-300 ${
                filter === category.id
                  ? "btn-primary text-white shadow-lg"
                  : "btn-ghost text-base-content/70 hover:bg-base-200"
              }`}
              aria-label={`Filter by ${category.name}`}
            >
              <Filter className="h-4 w-4 mr-1" />
              {category.name}
              <span className="ml-2 text-xs bg-base-200/50 rounded-full px-2 py-0.5">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {categories
              .filter((category) => category.id === filter)
              .map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                const categorySkills = filteredSkills.filter(
                  (skill) => skill.category === category.id
                );

                if (categorySkills.length === 0) return null;

                return (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white border ${category.borderColor}`}
                        >
                          <CategoryIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-base-content">
                            {category.name}
                          </h3>
                          <p className="text-sm text-base-content/60">
                            {categorySkills.length} skills
                          </p>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-6">
                        {categorySkills.map((skill, index) => {
                          const skillLevel = getSkillLevel(skill.level);
                          const SkillIcon = skillLevel.icon;

                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                inView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: categoryIndex * 0.2 + index * 0.05 + 0.4,
                              }}
                              className="group relative"
                            >
                              {/* Skill Header */}
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-base-content group-hover:text-primary transition-colors">
                                    {skill.name}
                                  </span>
                                  <span
                                    className={`text-xs ${skillLevel.color} border border-current/20 rounded-full px-2 py-0.5 flex items-center`}
                                  >
                                    <SkillIcon className="h-3 w-3 mr-1" />
                                    {skillLevel.label}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-base-content/60">
                                  {skill.level}%
                                </span>
                              </div>

                              {/* Progress Bar */}
                              <div className="relative group">
                                <div className="h-2 bg-base-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                    variants={progressVariants}
                                    custom={skill.level}
                                    animate={inView ? "visible" : "hidden"}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                                  </motion.div>
                                </div>
                                {/* Tooltip */}
                                <div className="absolute hidden group-hover:block -top-10 left-1/2 transform -translate-x-1/2 bg-base-100 border border-base-200 text-base-content/80 text-xs rounded-lg px-3 py-1.5 shadow-md z-10">
                                  {skill.description}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Years of Experience",
                value: "4+",
                color: "text-primary",
              },
              {
                label: "Technologies Mastered",
                value: skills.length.toString(),
                color: "text-green-600",
              },
              {
                label: "Expert Skills",
                value: skills.filter((s) => s.level >= 90).length.toString(),
                color: "text-accent",
              },
              {
                label: "Projects Delivered",
                value: "50+",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="p-4 bg-base-100 border border-base-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-base-content/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
