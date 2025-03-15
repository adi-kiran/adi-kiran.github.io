import { motion } from "framer-motion";

interface LightsaberProps {
  side: "left" | "right";
  color: string;
}

export default function Lightsaber({ side, color }: LightsaberProps) {
  const containerClasses =
    side === "left"
      ? `absolute top-1/5 sm:top-1/2 -translate-y-1/2 left-[5%] sm:left-[8%] hidden md:flex flex-col items-start sm:rotate-[-25deg]`
      : `absolute top-1/5 sm:top-1/2 -translate-y-1/2 right-[5%] sm:right-[8%] hidden md:flex flex-col items-end sm:rotate-[25deg]`;

  return (
    <div className={containerClasses}>
      {/* Blade: mobile default is w-4, h-60; larger screens get w-6, h-96 */}
      <motion.div
        className="w-2 h-34 sm:w-6 sm:h-96 rounded-lg shadow-lg"
        style={{ background: color, transformOrigin: "bottom" }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      {/* Hilt + Handle: mobile default is width 4; larger screens get width 6 */}
      <div className="flex flex-col items-center w-2 sm:w-6">
        <div className="bg-white h-3 w-full rounded-t-lg" />
        <div className="bg-gray-600 h-2 w-full" />
        <div className="bg-gray-800 h-10 w-full" />
        <div className="bg-gray-600 h-2 w-full rounded-b-lg" />
      </div>
    </div>
  );
}
