"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio website showcasing my skills and projects in the realm of web development.",
    image: "/images/projects/01.png",
    tag: ["All", "Web2"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Compnay Portfolio Website",
    description:
      "A comprehensive company portfolio website showcasing the services, projects, and expertise of the organization in the field of web development.",
    image: "/images/projects/02.png",
    tag: ["All", "Web2"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Revolutionize online medicine shopping with an E-commerce Medicine Application designed for seamless browsing, secure transactions, and detailed product information.",
    image: "/images/projects/03.png",
    tag: ["All", "Web2"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "College Rank Predictor Application",
    description:
      "Empower college choices with a data-driven College Rank Predictor Application based on three years of comprehensive analysis.",
    image: "/images/projects/04.png",
    tag: ["All", "Web2"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 6,
    title: "Full-stack Web3 Twitter clone",
    description:
      "Experience decentralized social networking with the Full-stack Web3 Twitter clone, seamlessly integrating blockchain technology for enhanced security and transparency in tweet interactions",
    image: "/images/projects/06.png",
    tag: ["All", "Web3"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Voting Daap",
    description:
      "Secure and transparent voting experience with the Voting Daap, a decentralized application utilizing blockchain technology for reliable and tamper-proof voting processes",
    image: "/images/projects/07.png",
    tag: ["All", "Web3"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Staking Daap",
    description:
      "Explore decentralized finance with the Staking Daap, a blockchain-powered application facilitating secure and transparent staking processes for cryptocurrency enthusiasts.",
    image: "/images/projects/08.png",
    tag: ["All", "Web3"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web2"
          isSelected={tag === "Web2"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
