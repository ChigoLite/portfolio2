"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ExternalLink, Github, Eye } from "lucide-react";
import Link from "next/link";

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
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: "project1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
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
        "A comprehensive e-commerce solution built with the MERN stack. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, order management, and an admin dashboard for inventory management.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for product and order management",
      ],
    },
    {
      id: "project2",
      title: "Chat-up",
      description:
        "A collaborative Chat application with real-time updates and team workspaces.",
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
        "A real-time Chat application that allows teams to collaborate efficiently. The app includes features like task creation, assignment, status tracking, due dates, comments, and notifications. Real-time updates are implemented using Socket.io.",
      features: [
        "User authentication and team management",
        "Real-time updates and notifications",
        "Real-time chat system",
        "Task filtering and search functionality",
        "Activity logs and reporting",
      ],
    },
    {
      id: "project3",
      title: "Artwork shopping",
      description: "Art-work selling website.",
      image: "/art.png",
      technologies: ["React", "MUI"],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://ken-s-art.vercel.app/",
      longDescription:
        "The First Choice When It Comes To Art Framing And Editing Covered Your Request Is Our Concern",
      features: [
        "Integration with multiple Arts",
        "Buying of Artwork",
        "Audience insights and engagement metrics",
        "Custom reports and export functionality",
      ],
    },
    {
      id: "project4",
      title: "Learning management site.",
      description: "A learning management website",
      image: "/lms.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/ChigoLite",
      liveUrl: "https://learner-x.vercel.app/",
      longDescription:
        "A comprehensive Learning management Site. The application includes Course listings with detailed information, advanced search functionality, map integration for location-based searching, virtual tours, and user accounts for saving favorites and receiving notifications.",
      features: [
        "Courses listings with detailed information and media",
        "Advanced search with filters for location, price, etc.",
        "Virtual class and HD visualization",
      ],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on. Each project
            demonstrates different aspects of my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div className="text-primary" key={tech}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" flex justify-between ">
                  <div>
                    <button
                      className="btn bg-blue-600 "
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" /> Details
                    </button>
                  </div>
                  <div className=" flex gap-2">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github className=" h-4 w-4" />
                      View Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink className=" h-3 w-3" />
                      Visit
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {selectedProject && (
            <div
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
            >
              <div className="bg-secondary p-6 rounded-lg w-full max-w-3xl relative my-10 max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-4 right-4 text-gray-100 hover:text-black"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {selectedProject.description}
                </p>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="mb-4">{selectedProject.longDescription}</p>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                  <Link
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-800"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
