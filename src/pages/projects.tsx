// src/pages/projects.tsx
import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust the import path as needed
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub } from "react-icons/fa";



interface Star {
    id: number;
    x: number;
    y: number;
  }
  
const StarDot: React.FC<{
  star: Star;
  onAnimationComplete: (id: number) => void;
}> = ({ star, onAnimationComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => onAnimationComplete(star.id)}
      style={{
        position: "absolute",
        left: star.x,
        top: star.y,
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "#FB923C", // Orange
        pointerEvents: "none",
      }}
    />
  );
};
  
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
    starwarsRight: "/starwars-png/palpatine.png",
    starwarsLeft: "/starwars-png/yoda.png",
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
    title: "Simplified Graph Neural Networks for Recommendation Systems",
    description:
      "Light Graph Convolution Network significantly simplifies the training of reommendation systems when compared to graph Convolution Networks. This novel implementation simplifies Light Graph Convolution Networks further, modifying to be trained as an inductive model instead of a transductive model. Benchmarks on the Amazon Books dataset indicate that inductive models can be trained based on the Light GCN architecture without any loss in performance (recall and precision).",
    tech: ["Python", "PyTorch", "PyTorch Geometric"],
    links: {
      github: "https://github.com/adi-kiran/LightGCN-Simplified",
      live: "",
    },
    starwarsLeft: "/starwars-png/grevious.png",
    starwarsRight: "/starwars-png/obi-wan-old.png",
  },
  {
    title: "Emotion Detection in Videos",
    description:
      "Multimodal sentiment analysis using deep neural networks. Developed a pipeline to extract MFCC features from the audio stream and facial features (using pre-trained masks) from images sampled from the visual stream. Trained deep neural networks to classify the multimodal (audio-visual) features into 8 different emotions. Trained on the Ryerson Audio Visual Database of Emotional Speech and Song.",
    tech: ["Python", "Tensorflow", "Keras"],
    links: {
      github: "https://github.com/adi-kiran/sentiment-classification-based-on-audio-visual-data",
      live: "",
    },
    starwarsLeft: "/starwars-png/han.png",
    starwarsRight: "/starwars-png/boba.png",
  },
  {
    title: "Benchmarking and Characterization of GVisor Performance",
    description:
      "GVisor is a container runtime technology developed by Google with a focus on security. Benchmarked security and performance metrics for Standard Docker runtime (runc), gVisor (runsc), and host VMs in terms of container lifecycles, network throughput, storage and memory I/O throughput. Tested container breakout exploits and identified that GVisor (runsc) was secure and Docker (runc) was vulnerable to these exploits. Concluded that while gVisor was significantly poorer in performance across most categories (network/storage/memory throughput) it was significantly more secure.",
    tech: ["Python", "Linux", "Docker", "gVisor", "Profiling", "memperf", "perf", "smem", "Security", "netperf", "sysdig"],
    links: {
      github: "https://github.com/adi-kiran/CCBD-gVisor-characterization",
      live: "",
    },
    starwarsRight: "/starwars-png/ahsoka.png",
    starwarsLeft: "/starwars-png/maul.png",
  },
  {
    title: "Damn Vulnerable Microservice Web App",
    description:
      "A microservice web application with known vulnerabilities intentinally exposed for security benchmarking. Inspired by the infamous security benchmark DVWA (Damn Vulnerable Web Application) and a lack of microservice applications for security benchmarking, I developed a microsrvice version of the application to run tests on exposed vulnerabilities in a microservice setting. Implemented a container breakout using ping and privilege escalation through sql injection in mysql",
    tech: ["Python", "Microservices", "Flask", "ping", "MySQL", "Security", "Networking", "Docker", "gVisor"],
    links: {
      github: "https://github.com/adi-kiran/vulnerable-microservice-web-app",
      live: "",
    },
    starwarsLeft: "/starwars-png/storm_trooper.png",
    starwarsRight: "/starwars-png/rex.png",
  },
  {
    title: "Secure Deployment of Microservices",
    description:
      "Developed an adaptive security model for multi-level microservice architectures, to protect applications deployed on edge systems and the host system itself from breaches in applications running in containers. The hybrid secure deployment algorithm combines static vulnerability analysis and remidiation techniques with dynamic intrusion detection and alerting to selectively deploy specific microservices in Docker and GVisor. Static Vulnerability Analysis involves scanning container images with Trivy to identify CVEs and remidiate them by automatically upgrading necessary packages. Dynamic Vulnerability Detection involves extracting syscalls under expected workloads and training anomaly detection models (SVMs and AutoEncoders) that are deployed in side car containers to actively monitor syscalls for attacks. Vulnerable services are then deployed in the more secure gVisor containers, while safer services are deployed in less secure but more performant Standard Docker containers. This adaptive deployment uses a combination of Docker and gVisor runtimes to ensure security while maintaining a balance with application performance.",
    tech: ["Python", "Docker", "GVisor", "Tensorflow", "scikit-learn", "sysdig", "Trivy", "CVE", "falco", "SVM", "AutoEncoders"],
    links: {
      github: "https://github.com/adi-kiran/adaptive-deployment-of-microservices",
      live: "",
    },
    starwarsLeft: "/starwars-png/thrawn.png",
    starwarsRight: "/starwars-png/ezra.png",
  },
];

const ProjectsPage: React.FC = () => {
    // Use window-level mouse tracking so the dots and cursor persist across the page
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [stars, setStars] = useState<Star[]>([]);

  // Attach mousemove on window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Use raw client coordinates
      const newStar: Star = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY };
      setStars((prev) => [...prev, newStar]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const removeStar = (id: number) => {
    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  const rotateCursor = 45;

  return (
    <div className="relative bg-black text-yellow-400 min-h-screen cursor-none">
      {/* Fixed overlay for custom cursor and star dots */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {stars.map((star) => (
          <StarDot key={star.id} star={star} onAnimationComplete={removeStar} />
        ))}
        <motion.div
          className="absolute pointer-events-none custom-cursor"
          style={{
            width: 50,
            height: 50,
            x: mouseX,
            y: mouseY,
            translateX: -25,
            translateY: -25,
            rotate: rotateCursor,
          }}
        >
          <img
            src="/milleniumfalcon.png" // Check your filename: milleniumfalcon.png vs. millenniumfalcon.png
            alt="Millennium Falcon"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    <Header />
    <div className="h-auto bg-black text-yellow-400 py-12 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="relative bg-black border-1 border-purple-400 p-4 text-yellow-400">
              <CardHeader className="pt-6 px-4">
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-white">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-2">
                {project.image && <img src={project.image}/>}
                <h3 className="font-semibold mb-2 py-1">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div key={index+"-div"} className="bg-gradient-to-r from-red-600 to-blue-600 p-[2px] rounded">
                    <span
                      key={index}
                      className="bg-black px-3 py-2 rounded text-sm text-white block"
                    >
                      {tech}
                    </span>
                  </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-4 py-4 flex justify-evenly space-x-4">
                <img
                  src={project.starwarsLeft}
                  alt="Star Wars Top Left Character"
                  className="w-25 h-30"
                />
                <Link href={project.links.github} legacyBehavior>
                  <a target="_blank" className="flex items-center text-blue-400 hover:underline">
                    <FaGithub className="w-6 h-6" />
                    <span className="pl-2">GitHub</span>
                  </a>
                </Link>
                <img
                  src={project.starwarsRight}
                  alt="Star Wars Top Left Character"
                  className="w-30 h-35"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProjectsPage;
