import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
import ContactMe from "@/components/ContactMe";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Timeline from "@/components/Timeline";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ProjectsCarousel from "@/components/ProjectsCarousel";


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

export default function Home() {
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

      {/* Main page content */}
      <Header />
      <main className="space-y-20">
        <div className="container mx-auto px-4 space-y-20">
          <section id="about">
            <Hero />
          </section>
          <section id="journey">
            <Timeline />
          </section>
          <section id="projects">
            <ProjectsCarousel />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="contact">
            <ContactMe />
          </section>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        /* Responsive adjustments for small screens */
        @media (max-width: 640px) {
          .custom-cursor {
            width: 30px !important;
            height: 30px !important;
          }
        }
      `}</style>
    </div>
  );
}
