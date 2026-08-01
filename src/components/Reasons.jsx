import { motion } from "framer-motion";
import { useState } from "react";
import Letter from "./Letter";
import BackgroundDecor from "./BackgroundDecor";

function Reasons() {
  const [next, setNext] = useState(false);

  if (next) return <Letter />;

  const reasons = [
    { emoji: "😊", title: "Your Smile", text: "It makes every bad day feel lighter and brighter." },
    { emoji: "😂", title: "Your Craziness", text: "You turn ordinary moments into unforgettable laughter." },
    { emoji: "💖", title: "Your Care", text: "You always make people feel seen, safe, and loved." },
    { emoji: "🌸", title: "Your Kindness", text: "Your heart carries warmth that words can barely describe." },
    { emoji: "🫶", title: "Our Friendship", text: "One of the sweetest gifts life ever gave me." },
    { emoji: "🐥", title: "My Chaklii", text: "You’ll always have a permanent place in my heart." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#3b0764,_#111827_45%,_#020617_100%)] py-20 px-6 sm:px-8">
      <BackgroundDecor />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto mb-12 max-w-4xl text-center"
      >
        <div className="mb-4 text-5xl sm:text-6xl">✨</div>
        <h1 className="text-4xl font-black text-white sm:text-6xl">
          Why You’re So Special
        </h1>
        <p className="mt-4 text-lg text-pink-100 sm:text-xl">
          A little tribute to the magic you bring into my world
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.04, y: -6, rotate: -1 }}
            className="rounded-[28px] border border-white/20 bg-white/10 p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.2)] backdrop-blur-xl"
          >
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 text-6xl"
            >
              {item.emoji}
            </motion.div>

            <h2 className="mb-3 text-2xl font-bold text-white">{item.title}</h2>
            <p className="leading-8 text-pink-100">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setNext(true)}
          className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 px-10 py-4 text-xl font-semibold text-white shadow-[0_0_30px_rgba(244,114,182,0.35)]"
        >
          Read My Letter 💌
        </motion.button>
      </div>
    </div>
  );
}

export default Reasons;