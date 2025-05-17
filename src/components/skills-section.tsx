"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 95, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "React-Native/Expo", level: 85, category: "frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express.js", level: 90, category: "backend" },
    { name: "REST API", level: 95, category: "backend" },
    { name: "GraphQL", level: 80, category: "backend" },
    { name: "Authentication", level: 85, category: "backend" },

    // Database
    { name: "MongoDB", level: 90, category: "database" },
    { name: "Mongoose", level: 85, category: "database" },
    { name: "SQL", level: 75, category: "database" },
    { name: "Redis", level: 70, category: "database" },

    // Tools
    { name: "Git", level: 90, category: "tools" },
    { name: "Docker", level: 80, category: "tools" },
    { name: "AWS", level: 75, category: "tools" },
    { name: "CI/CD", level: 80, category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & Deployment" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Over the years, I've honed my skills across the entire MERN stack
            and beyond. Here's a breakdown of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2 ">
                      <div className="flex justify-between">
                        <span className="font-medium text-primary">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      {/* <Progress value={skill.level} className="h-2" /> */}
                      <progress
                        className="progress progress-secondary  h-2"
                        value={skill.level}
                        max="100"
                      ></progress>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
