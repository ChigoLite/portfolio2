"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Eye,
  X,
  Code2,
  Rocket,
  Filter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  longDescription: string;
  features: string[];
  category: "fullstack" | "frontend" | "backend";
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const projects: Project[] = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description:
        "A robust e-commerce platform with seamless payment integration, secure authentication, and a dynamic admin dashboard.",
      image: "/ecommerce.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe",
      ],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://e-commerce-brown-eta.vercel.app/",
      longDescription:
        "A full-featured e-commerce platform built with the MERN stack, serving over 1,000 monthly users. It includes a product catalog with advanced search, a secure shopping cart, Stripe-powered payments, order tracking, and an admin dashboard for managing inventory and analytics, achieving a 20% increase in user retention.",
      features: [
        "Secure user authentication with JWT",
        "Advanced product search and filtering",
        "Real-time shopping cart and checkout",
        "Stripe payment integration",
        "Order tracking and user history",
        "Admin dashboard for inventory and analytics",
      ],
      category: "fullstack",
    },
    {
      id: "project2",
      title: "Chat-Up",
      description:
        "A real-time chat application with collaborative team workspaces and task management.",
      image: "/chat.png",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redux",
      ],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://chat-up-beta.vercel.app",
      longDescription:
        "Chat-Up is a real-time chat and collaboration platform that enhances team productivity. Built with Socket.io for live updates, it supports task creation, assignment, and tracking, reducing project delivery times by 15%. The app features secure user authentication and real-time notifications.",
      features: [
        "Real-time chat with Socket.io",
        "Team management and role-based access",
        "Task creation, assignment, and tracking",
        "Real-time notifications",
        "Searchable task logs",
      ],
      category: "fullstack",
    },
    {
      id: "project3",
      title: "Artwork Shopping",
      description:
        "An elegant, responsive website for showcasing and selling artwork with a focus on user experience.",
      image: "/art.png",
      technologies: ["React", "Material-UI"],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://ken-s-art.vercel.app/",
      longDescription:
        "A visually stunning website for art enthusiasts, built with React and Material-UI. It offers a seamless browsing experience for purchasing artwork, with a 95% user satisfaction rate. The platform includes audience insights and engagement metrics for artists.",
      features: [
        "Responsive, pixel-perfect design",
        "Integration with artwork galleries",
        "Secure purchase workflows",
        "Audience engagement analytics",
      ],
      category: "frontend",
    },
    {
      id: "project4",
      title: "Learning Management System",
      description:
        "A scalable platform for online education with course management and virtual classrooms.",
      image: "/lms.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://learner-x.vercel.app/",
      longDescription:
        "A comprehensive Learning Management System serving 500+ students monthly. Built with the MERN stack and Cloudinary for media management, it offers course listings, virtual classrooms, and progress tracking, improving course completion rates by 25%.",
      features: [
        "Detailed course listings with media",
        "Advanced search and filtering",
        "Virtual classrooms with HD streaming",
        "Progress tracking and certification",
      ],
      category: "fullstack",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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

  return (
    <section
      id="projects"
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
            <Code2 className="h-8 w-8 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Creations
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed">
            Explore a selection of my projects showcasing expertise in
            full-stack and frontend development. Each project reflects my
            commitment to building scalable, user-focused solutions with modern
            technologies.
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
              aria-label={`Filter by ${category.label}`}
            >
              <Filter className="h-4 w-4 mr-1" />
              {category.label}
              <span className="ml-2 text-xs bg-base-200/50 rounded-full px-2 py-0.5">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group card bg-base-100 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=300&width=400"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3} // Prioritize first 3 images for LCP
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      className="btn btn-sm btn-primary backdrop-blur-sm"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Details
                    </button>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-sm btn-secondary backdrop-blur-sm">
                        <Rocket className="h-4 w-4 mr-1" />
                        Live
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs capitalize text-base-content/60 bg-base-200/50 rounded-full px-2 py-1">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-base-content/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        variants={tagVariants}
                        animate={inView ? "visible" : "hidden"}
                        transition={{
                          delay: index * 0.2 + techIndex * 0.05 + 0.5,
                        }}
                        className="text-xs bg-base-200/50 text-base-content/80 rounded-full px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-base-content/60">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-sm btn-ghost w-full">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </button>
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-sm btn-primary w-full">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal modal-open fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              role="dialog"
              aria-labelledby="modal-title"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ duration: 0.3 }}
                className="modal-box max-w-4xl w-full bg-base-100 border border-base-200 shadow-xl max-h-[90vh] overflow-y-auto"
              >
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 id="modal-title" className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={
                        selectedProject.image ||
                        "/placeholder.svg?height=400&width=600"
                      }
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      About This Project
                    </h4>
                    <p className="text-base-content/70 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-base-content/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-base-200/50 text-base-content/80 rounded-full px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-primary w-full">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Live Demo
                      </button>
                    </Link>
                    <Link
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-ghost w-full">
                        <Github className="h-4 w-4 mr-1" />
                        View Source Code
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
