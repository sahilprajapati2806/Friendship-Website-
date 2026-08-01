import { useState } from "react";
import { motion } from "framer-motion";
import GiftBox from "./GiftBox";
import BackgroundDecor from "./BackgroundDecor";

function Hero() {
  const [openGift, setOpenGift] = useState(false);

  if (openGift) {
    return <GiftBox />;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-600 via-fuchsia-700 to-indigo-950">
      <BackgroundDecor />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: 1,
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6 text-7xl md:text-8xl"
        >
          💖
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white"
        >
          Happy Friendship Day ❤️
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-2xl sm:text-3xl text-pink-100"
        >
          To My Cute Chaklii 🐥
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-pink-100"
        >
          A little surprise full of love, happiness, memories and friendship,
          made especially for you. 💕
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenGift(true)}
          className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 text-white font-semibold shadow-xl"
        >
          Open My Surprise 🎁
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;