import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import BackgroundDecor from "./BackgroundDecor";
import MusicPlayer from "./MusicPlayer";

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) {
    return (
      <>
        <Hero />
        <MusicPlayer />
      </>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e1b4b,_#0f172a_45%,_#020617)] flex flex-col items-center justify-center px-6 py-10">
      <BackgroundDecor />

      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 text-7xl sm:text-8xl"
      >
        💘
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mt-8 text-center text-4xl font-black tracking-wide text-white sm:text-5xl"
      >
        Welcome Chaklii 🐥
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 mt-5 text-center text-lg text-pink-200 sm:text-xl"
      >
        A cinematic friendship surprise is loading...
      </motion.p>

      <div className="relative z-10 mt-10 h-2 w-72 overflow-hidden rounded-full border border-white/20 bg-white/10 sm:w-80">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.6, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default Loading; 