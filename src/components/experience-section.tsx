"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      title: "Senior MERN Stack Developer",
      company: "NineTalent.ng.",
      period: "2022 - Present",
      description:
        "Leading the development of enterprise-level web applications. Architecting scalable solutions and mentoring junior developers. Implementing best practices and modern development workflows.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TypeScript",
        "AWS",
        "Docker",
      ],
    },
    {
      title: "Backend Developer",
      company: "Enugu State Tech Hub.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality web applications. implemented scalable RESTful APIs that powered the core functionalities of various applications and optimized application performance.",
      technologies: ["Node.js", "MongoDB", "Express", "GraphQL", "SpringBoot"],
    },
    {
      title: "Frontend Developer",
      company: "Freelancer",
      period: "2019 - 2020",
      description:
        "Created responsive and interactive user interfaces for various client websites. Worked closely with designers to implement pixel-perfect designs. Optimized website performance and accessibility.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "React-Native/Expo",
        "Webpack",
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-16">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="max-w-2xl mx-auto text-muted-foreground">
            With over 4 years of professional experience, I've worked on a
            variety of projects across different industries and technologies.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="timeline timeline-vertical  flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </div>

              <div className="timeline-start timeline-box w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <div className="timeline-middle p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <div>
                      <h3 className="text-xl text-black dark:text-white font-bold">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground text-black dark:text-white ">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-black dark:text-white">
                      {experience.period}
                    </div>
                  </div>
                  <p className="mt-2 mb-4 text-black dark:text-white">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <div className="text-primary" key={tech}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
