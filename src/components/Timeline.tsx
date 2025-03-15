import React, { useState } from "react";
import HorizontalLightsaberDivider from "./HorizontalLightsaberDivider";
import TimelineModal from "./TimelineModal";
import { motion } from "framer-motion";

interface TimelineEvent {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  align: "left" | "right";
  jobFunctions: string[];
  skillsGained: string[];
  characterImage: string;
}

const timelineData: TimelineEvent[] = [
  {
    title: "Software Engineer Intern",
    subtitle: "ScienceLogic",
    date: "Jun 2024 - Aug 2024",
    description: "",
    align: "left",
    jobFunctions: [
      "Automated the upgraded and migrated of a SaaS service via a Jenkins job using Python.",
      "Used the AWS boto3 SDK to transfer resources (transfer Elastic IPs, register/deregister Target Groups, modify Security Groups, etc.",
      "Developed a SNMP-based log parsing tool that raises alerts if the log files have dataflow or synchronization issues",
    ],
    skillsGained: ["Python", "AWS", "Jenkins", "SQL"],
    characterImage: "/starwars-png/yoda.png",
  },
  {
    title: "Master of Science in Computer Science",
    subtitle: "North Carolina State University",
    date: "Aug 2023 - May 2025",
    description: "Focus on Machine Learning, AI and Distributed Systems",
    align: "right",
    jobFunctions: [],
    skillsGained: ["Python", "PyTorch", "NLP", "LLMs and AI Agents", "GenAI", "Graph Neural Networks", "Computer Networks", "Security", "Biometrics", "Software Engineering", "Data Science", "Machine Learning", "Deep Learning"],
    characterImage: "/starwars-png/obi-wan-old.png",
  },
  {
    title: "Software Engineer (SDE 2)",
    subtitle: "Kickdrum",
    date: "Jul 2022 - Jul 2023",
    description: "",
    align: "left",
    jobFunctions: [
      "Refactored a massive monolith application 2mil+ LOC (Java, Python, Shell, C++, Perl) to service-oriented architecture.",
      "Eliminated 200+ cyclical dependencies among Java packages and extracted 10+ components.",
      "Identified patterns and developed tools to automate and streamline the refactoring process, leading to improved developer productivity and efficiency.",
      "Modernized the legacy build environment, replacing legacy Scons with Jenkins, achieving 58% reduction in build duration by utilizing parallel build stages.",
      "Trained KDU interns on best practices in full-stack development with Java, React and AWS.",
      "Was awarded the Drummer Award (top 3 employees every half) for pro-actively identifying and developing innovative solutions and driving discussions with clients!",
    ],
    skillsGained: ["Java", "Python", "Jenkins", "Docker", "Artifactory", "Shell", "Microservices", "SOA", "Dependency Injection", "Kubernetes", "Docker", "Gradle", "Scons", "Mercurial"],
    characterImage: "/starwars-png/vader.png",
  },
  {
    title: "Software Developer (SDE 1)",
    subtitle: "Kickdrum",
    date: "Aug 2021 - Jun 2022",
    description: "",
    align: "right",
    jobFunctions: [
      "Designed a pipeline to parse and index unstructured documents (Google Docs and Google Slides) into smaller searchable chunks and stored them in ElasticSearch.",
      "Developed a search engine with dynamicially populated filters to query and retrieve the documents indexed in ElasticSearch.",
      "Created RESTful APIs for indexing, searching and deleting documents.",
      "Architected and deployed the application in AWS using Lambdas, S3, ElasticSearch, APIGateWay, WAF, CloudFront, Route 53 and Cognito. Architected to ensure high availability, data reliability and security.",
      "Optimized search queries to improve performance and reduce costs.",
    ],
    skillsGained: ["Python", "React", "AWS", "Lambdas", "ElasticSearch", "Serverless", "RDS", "APIGateWay", "SSO with Conito", "S3", "CloudFront", "Step Functions", "Kibana"],
    characterImage: "/starwars-png/luke.png",
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Kickdrum",
    date: "Jan 2021 - Jul 2021",
    description: "",
    align: "left",
    jobFunctions: [
      "Developed a web application in SpringBoot and React that analyzes an AWS Account's resource usage, and identifies security and data reliability config issues.",
      "Uses an IAM role with minimal read-only permissions, to efficiently check AWS account configurations, without having to setup Control Tower or run any other applications withing the AWS account.",
    ],
    skillsGained: ["Java", "SpringBoot", "Hibernate", "React", "AWS", "IAM", "Config", "Microservices", "Maven"],
    characterImage: "/starwars-png/anakin.png",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    subtitle: "PES University",
    date: "2017 - 2021",
    description: "Specialization in Data Science",
    align: "right",
    jobFunctions: [],
    skillsGained: ["C", "Python", "Docker", "Machine Learning", "Data Science", "Analytics", "Operating Systems", "Linux", "Javascript"],
    characterImage: "/starwars-png/maul.png",
  },
];

interface TimelineItemProps {
  event: TimelineEvent;
  onClick: (event: TimelineEvent) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, onClick }) => {
  const borderInitial = { clipPath: "inset(0 100% 0 0)" };
  const borderAnimate = { clipPath: "inset(0 0 0 0)" };

  return (
    <div className="relative py-4" onClick={() => onClick(event)}>
      <div className="flex flex-col md:flex-row items-center">
        {event.align === "left" ? (
          <>
            {/* Text box on left side: full width on mobile, half on md+, right-aligned */}
            <div className="w-full md:w-1/2 flex md:justify-end justify-center md:pr-5">
              <motion.div
                initial={borderInitial}
                whileInView={borderAnimate}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  border: "2px solid",
                  borderImage: "linear-gradient(to right, blue, red) 1",
                }}
                whileHover={{ scale: 1.1, 
                  border: "2px solid",
                  borderImage: "linear-gradient(to right, red, blue) 1",
                }}
                // transition={{ type: "spring", stiffness: 300 }}
                className="bg-black bg-opacity-75 p-4 rounded shadow text-yellow text-center md:text-right max-w-xs"
              >
                <h3 className="text-lg md:text-xl font-bold text-yellow">{event.title}</h3>
                {event.subtitle && (
                  <h4 className="text-base md:text-lg font-semibold">{event.subtitle}</h4>
                )}
                <span className="text-xs md:text-sm text-gray-400">{event.date}</span>
                <p className="mt-2 text-xs md:text-sm text-white">{event.description}</p>
                <p className="mt-2 text-xs md:text-sm text-gray-400 italic text-right">{"See more"}</p>
                </motion.div>
            </div>
            {/* Divider on left side: full width on mobile (centered), half on md+ */}
            <div className="w-full md:w-1/2 hidden md:flex justify-center items-center pl-5 mt-4 md:mt-0">
              <HorizontalLightsaberDivider side="left" color="#00aaff" />
            </div>
          </>
        ) : (
          <>
            {/* Divider on right side */}
            <div className="w-full md:w-1/2 hidden md:flex justify-center items-center pl-11 mt-4 md:mt-0">
              <HorizontalLightsaberDivider side="right" color="#ff0000" />
            </div>
            {/* Text box on right side: full width on mobile, half on md+; left-aligned */}
            <div className="w-full md:w-1/2 flex md:justify-start justify-center md:pl-5">
              <motion.div 
                className="bg-black bg-opacity-75 p-4 rounded shadow text-yellow text-center md:text-left"
                  initial={borderInitial}
                  whileInView={borderAnimate}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    border: "2px solid",
                    borderImage: "linear-gradient(to right, red, blue) 1",
                  }}
                  whileHover={{ scale: 1.1, 
                    border: "2px solid",
                    borderImage: "linear-gradient(to right, blue, red) 1",
                  }}
                  // transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                {event.subtitle && (
                  <h4 className="text-base md:text-lg font-semibold">{event.subtitle}</h4>
                )}
                <span className="text-xs md:text-sm text-gray-400">{event.date}</span>
                <p className="mt-2 text-xs md:text-sm text-white">{event.description}</p>
                <p className="mt-2 text-xs md:text-sm text-gray-400 italic text-right">{"See more"}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const closeModal = () => setSelectedEvent(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
      className="container mx-auto px-4">
    <h1 className="text-2xl md:text-4xl font-bold text-center pb-3">My Journey</h1>
    <h2 className="text-center pb-3 italic">[Click on the boxes to learn more about my experiences]</h2>
    <div className="relative bg-black py-12">
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[6px] rounded bg-gradient-to-b from-blue-500 to-red-500 transform -translate-x-1/2" />
      {/* Container width is capped so items remain near the center */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        {timelineData.map((event, index) => (
          <TimelineItem key={index} event={event} onClick={setSelectedEvent}/>
        ))}
      </div>
      {selectedEvent && (
        <TimelineModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  </motion.div>
  );
};

export default Timeline;
