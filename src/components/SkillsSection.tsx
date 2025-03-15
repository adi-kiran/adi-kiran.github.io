// src/components/Skills.tsx
import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMui,
  SiSass,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiApachekafka,
  SiFastapi,
  SiFlask,
  SiSpring,
  SiSplunk,
  SiTerraform,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiTensorflow,
  SiSpacy,
  SiLangchain,
  SiTailwindcss,
  SiOllama,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbHexagonLetterC } from "react-icons/tb";
import { motion } from "framer-motion";

// Define the Skill interface.
interface Skill {
  name: string;
  icon: React.ReactNode;
}

// Type the skillsData object as a Record mapping category names to an array of Skills.
const skillsData: Record<string, Skill[]> = {
  "Programming Languages": [
    { name: "Python", icon: <SiPython size={40} className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-400" /> },
    { name: "C", icon: <TbHexagonLetterC size={40} className="text-indigo-700" /> },
  ],
  "Web Technologies": [
    { name: "React", icon: <SiReact size={40} className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
    { name: "NextJS", icon: <RiNextjsLine size={40} className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-white" /> },
    { name: "NodeJS", icon: <SiNodedotjs size={40} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={40} className="text-gray-300" /> },
    { name: "MaterialUI", icon: <SiMui size={40} className="text-blue-500" /> },
    { name: "SASS", icon: <SiSass size={40} className="text-pink-500" /> },
    { name: "HTML", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
  ],
  "Tools & Platforms": [
    { name: "Docker", icon: <SiDocker size={40} className="text-blue-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={40} className="text-blue-400" /> },
    { name: "Jenkins CI", icon: <SiJenkins size={40} className="text-red-500" /> },
    { name: "Spring Boot", icon: <SiSpring size={40} className="text-green-600" /> },
    { name: "Flask", icon: <SiFlask size={40} className="text-white" /> },
    { name: "FastAPI", icon: <SiFastapi size={40} className="text-teal-500" /> },
    { name: "Splunk", icon: <SiSplunk size={40} className="text-orange-600" /> },
    { name: "Kafka", icon: <SiApachekafka size={40} className="text-white" /> },
    { name: "Terraform", icon: <SiTerraform size={40} className="text-purple-500" /> },
    { name: "AWS", icon: <FaAws size={40} className="text-yellow" /> },
  ],
  "Machine Learning": [
    { name: "PyTorch", icon: <SiPytorch size={40} className="text-red-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={40} className="text-orange-500" /> },
    { name: "Keras", icon: <SiKeras size={40} className="text-red-500" /> },
    { name: "scikit-learn", icon: <SiScikitlearn size={40} className="text-blue-500" /> },
    { name: "NLTK", icon: <span className="text-lg">NLTK</span> },
    { name: "spaCy", icon: <SiSpacy size={40} className="text-blue-300" /> },
    { name: "LangChain", icon: <SiLangchain size={40} className="text-green-800" /> },
    { name: "Ollama", icon: <SiOllama size={40} className="text-white" /> },
  ],
  Certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      icon: <FaAws size={40} className="text-orange-400 w-20 h-20" />,
    },
  ],
};

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-black text-yellow">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill: Skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center w-full sm:w-1/3 lg:w-1/12"
                >
                  <div className="sm:text-sm lg:text-4xl">{skill.icon}</div>
                  <span className="mt-2 text-sm text-center text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
