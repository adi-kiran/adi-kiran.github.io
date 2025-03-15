import React from "react";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; 

const projects = [
  {
    title: "BurnOut",
    description:
      "Health Management Application. Track food intake, calorie intake, excersie duration, calorie burnout, weight and sign-up for community events. Check out charts and graphs to follow the progress towards your health-goals. Clean and responsive UI powered by React, MaterialUI and Recharts.",
    image: "/burnout.gif",
    tech: ["Javascript", "React", "Redux", "MaterialUI", "Python", "Flask", "MongoDB", "CI/CD", "Github Actions", "SwaggerDocs"],
    links: {
      github: "https://github.com/adi-kiran/burnout-healthgoalsapp",
      live: "",
    },
    starwarsLeft: "/starwars-png/palpatine.png",
    starwarsRight: "/starwars-png/obi-wan-old.png",
  },
  {
    title: "Code RECAP",
    description:
      "A source code archaeology tool for repository-level context aware summarization and question answering. Parses and indexes souce code files and function using AST parsers and store indexed vector embeddings in efficient FAISS indexes. Used retrieval-augmented generation (RAG) and ReACT (Reason+Act) paradigm based LLM agents to obtain context-aware and relevant answers to natural language queries about a codebase. Benchamarked on the downstream task of File Location using the SWE Bench dataset consisting of large scale open source python repos achieving a Recall@3 score of 87%.",
    tech: ["Python", "Natural Language Processing (NLP)", "FAISS", "LLM (large language models)", "RAG (retrieval-augmented generation)", "ReAct Agent", "TF-IDF", "Vector Databases", "Streamlit", "OpenAI APIs", "Llama3.1", "Ollama", "Azure Model Inference", "UniXcoder"],
    links: {
      github: "https://github.com/adi-kiran/CodeRECAP",
      live: "",
    },
    starwarsLeft: "/starwars-png/c3po.png",
    starwarsRight: "/starwars-png/r2d2.png",
  },
  {
    title: "Career Flow",
    description:
      "A user-friendly platform to track your applications, build your industry contacts and get insightful statistics on your job search. It provides a smooth Kanban-style board (developed from scratch using React) for tracking your applications status, followed by insightful graphs (implemented using Recharts) that provide statistics on your job hunt!",
    tech: ["Javascript", "React", "Redux", "MaterialUI", "Python", "Flask", "MongoDB", "CI/CD", "Github Actions", "SwaggerDocs", "Pytest", "Jest"],
    image: "/careerflow.gif",
    links: {
      github: "https://github.com/adi-kiran/career-flow",
      live: "",
    },
    starwarsLeft: "/starwars-png/obi-wan.png",
    starwarsRight: "/starwars-png/vader.png",
  },
  
  // Add more projects here
];

export default function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black">
      {/* Title and "See More Projects" Button */}
      <div className="w-full flex justify-around items-center px-6 md:px-20 mb-6">
        <h2 className="text-yellow-400 text-3xl font-bold">Projects</h2>
      </div>
        <Link href="/projects" legacyBehavior>
          <a className="text-blue-400 hover:underline text-lg">See More Projects →</a>
        </Link>

      {/* Carousel */}
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <Card key={idx} className="relative bg-black border-none p-4 text-yellow-400">
              <CardHeader className="pt-6 px-4">
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-white">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2">
                {project.image && <img src={project.image} alt={project.title} className="w-full object-cover rounded-md" />}
                <h3 className="font-semibold mb-2 py-1">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div key={index + "-div"} className="bg-gradient-to-r from-red-600 to-blue-600 p-[2px] rounded">
                      <span className="bg-black px-3 py-2 rounded text-sm text-white block">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-4 py-4 flex justify-evenly space-x-4">
                <img src={project.starwarsLeft} alt="Star Wars Left Character" className="w-25 h-30" />
                <Link href={project.links.github} legacyBehavior>
                  <a target="_blank" className="flex items-center text-blue-400 hover:underline">
                    <FaGithub className="w-6 h-6" />
                    <span className="pl-2">GitHub</span>
                  </a>
                </Link>
                <img src={project.starwarsRight} alt="Star Wars Right Character" className="w-30 h-35" />
              </CardFooter>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}
