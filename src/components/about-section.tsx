"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Server, Database, Globe } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="max-w-2xl text-white mx-auto text-muted-foreground">
          I'm a passionate Fullstack Developer proficient in the MERN stack.
          Currently, I'm pursuing my studies at Enugu State University. Over the
          past few years, I've been consulted by and collaborated with various
          tech companies, successfully delivering a range of projects. My
          expertise extends to small-scale DevOps tasks, ensuring seamless
          integration and deployment. I'm committed to leveraging technology to
          create impactful and efficient solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-full">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-muted-foreground">
                Creating responsive and interactive user interfaces with React,
                Next.js, and modern CSS frameworks.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-full">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-muted-foreground">
                Building robust APIs and server-side applications with Node.js,
                Express, and TypeScript.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-full">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Database</h3>
              <p className="text-muted-foreground">
                Designing and implementing database solutions with MongoDB,
                Mongoose, and SQL databases.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-full">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deployment</h3>
              <p className="text-muted-foreground">
                Deploying applications with Docker, AWS, Vercel, and
                implementing CI/CD pipelines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
