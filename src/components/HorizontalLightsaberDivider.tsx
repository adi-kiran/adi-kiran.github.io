// src/components/HorizontalLightsaberDivider.tsx
import { motion } from "framer-motion";
import React from "react";

interface HorizontalLightsaberDividerProps {
  side: "left" | "right";
  color: string;
}

export default function HorizontalLightsaberDivider({
  side,
  color,
}: HorizontalLightsaberDividerProps) {
  // We use a CSS variable for the blade width instead of a fixed constant.
  // The CSS below will set --blade-width to 300px on screens >= 640px,
  // and to 150px on smaller screens.
  return (
    <div className="flex items-center w-full">
      {side === "left" ? (
        <div className="flex items-center w-full">
          <div className="flex items-center">
            {/* Hilt at the center line with responsive widths */}
            <div className="bg-gray-600 h-3 w-2 sm:w-3 rounded-l-lg" />
            <div className="bg-gray-800 h-3 w-5 sm:w-7" />
            <div className="bg-gray-600 h-3 w-2 sm:w-3" />
            <div className="bg-white h-3 w-2 sm:w-3 rounded-r-lg" />
            {/* Blade extends leftward; transformOrigin "left" to grow left */}
            <motion.div
              className="h-3 rounded-lg shadow-lg"
              style={{
                background: color,
                width: "var(--blade-width)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <div className="flex items-center">
            {/* Blade extends rightward; transformOrigin "right" */}
            <motion.div
              className="h-3 rounded-lg shadow-lg"
              style={{
                background: color,
                width: "var(--blade-width)",
                transformOrigin: "right",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* Hilt at the center line with responsive widths */}
            <div className="bg-white h-3 w-2 sm:w-3 rounded-l-lg" />
            <div className="bg-gray-600 h-3 w-2 sm:w-3" />
            <div className="bg-gray-800 h-3 w-5 sm:w-7" />
            <div className="bg-gray-600 h-3 w-2 sm:w-3 rounded-r-lg" />
          </div>
        </div>
      )}
      <style jsx>{`
        :global(:root) {
          --blade-width: 300px;
        }
        @media (max-width: 639px) {
          :global(:root) {
            --blade-width: 150px;
          }
        }
      `}</style>
    </div>
  );
}
