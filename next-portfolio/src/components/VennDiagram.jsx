"use client";

import { motion } from "framer-motion";

export default function VennDiagram() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden px-4">

      {/* LEFT OUTSIDE LABEL */}
      <div className="absolute left-4 sm:left-10 md:left-20 lg:left-40 xl:left-60 text-right z-20">
        <p className="text-gray-400 tracking-widest text-xs sm:text-sm">
          SOFTWARE
        </p>
        <h2 className="text-lg sm:text-xl font-semibold tracking-wider">
          ENGINEER
        </h2>
      </div>

      {/* RIGHT OUTSIDE LABEL */}
      <div className="absolute right-4 sm:right-10 md:right-20 lg:right-40 xl:right-60 text-left z-20">
        <p className="text-gray-400 tracking-widest text-xs sm:text-sm">
          MACHINE
        </p>
        <h2 className="text-lg sm:text-xl font-semibold tracking-wider">
          LEARNING
        </h2>
      </div>

      {/* TITLE DROPPING INTO INTERSECTION */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: -40, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
        className="absolute top-[15%] sm:top-[18%] text-center z-30"
      >
        <h2 className="text-xs sm:text-sm tracking-widest text-gray-400">
          ARTIFICIAL
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider">
          INTELLIGENCE
        </h1>
        <h3 className="text-xs sm:text-sm tracking-widest text-gray-400">
          ENGINEER
        </h3>
      </motion.div>

      {/* Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 90 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute top-[28%] w-[1px] bg-gray-400 z-10 sm:h-[110px] md:h-[130px]"
      />

      {/* Dot at Intersection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute top-[40%] w-2 h-2 sm:w-3 sm:h-3 border border-gray-300 rounded-full bg-black z-20"
      />

      {/* CIRCLES CONTAINER */}
      <div
        className="
          relative
          w-[300px] sm:w-[420px] md:w-[520px] lg:w-[600px]
          h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px]
          flex items-center justify-center
        "
      >

        {/* LEFT CIRCLE */}
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            absolute
            w-[160px] h-[160px]
            sm:w-[220px] sm:h-[220px]
            md:w-[260px] md:h-[260px]
            lg:w-[300px] lg:h-[300px]
            border-2 border-gray-300 rounded-full
          "
        />

        {/* RIGHT CIRCLE */}
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            absolute
            w-[160px] h-[160px]
            sm:w-[220px] sm:h-[220px]
            md:w-[260px] md:h-[260px]
            lg:w-[300px] lg:h-[300px]
            border-2 border-gray-300 rounded-full
          "
        />

        {/* INTERSECTION HIGHLIGHT (loosened) */}
        <div
          className="
            absolute
            w-[50px] h-[120px]
            sm:w-[70px] sm:h-[160px]
            md:w-[90px] md:h-[200px]
            lg:w-[110px] lg:h-[240px]
          "
        />

        {/* LEFT UNCOMMON SKILLS */}
        <div
          className="
            absolute
            left-[8%] sm:left-[12%] md:left-[16%]
            top-1/2 -translate-y-1/2
            text-xs sm:text-sm text-gray-300
            space-y-1 sm:space-y-2 z-20
          "
        >
          <p>OOPs</p>
          <p>Rest APIs</p>
          <p>Git & Github</p>
          <p>System Design</p>
          <p>MySQL</p>
        </div>

        {/* RIGHT UNCOMMON SKILLS */}
        <div
          className="
            absolute
            right-[8%] sm:right-[12%] md:right-[16%]
            top-1/2 -translate-y-1/2
            text-xs sm:text-sm text-gray-300
            space-y-1 sm:space-y-2 z-20 text-right
          "
        >
          <p>Scikit-learn</p>
          <p>Probability & Stats</p>
          <p>Python</p>
          <p>LLM APIs</p>
          <p>Prompt Engineering</p>
        </div>

      </div>
    </div>
  );
}