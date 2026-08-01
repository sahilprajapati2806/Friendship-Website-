import { useState } from "react";
import { motion } from "framer-motion";
import Memories from "./Memories";
import BackgroundDecor from "./BackgroundDecor";

function GiftBox() {
  const [open, setOpen] = useState(false);

  if (open) {
    return <Memories />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#4c1d95] to-[#831843]">
      <BackgroundDecor />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{
            scale: 1,
            rotate: [0, -8, 8, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 2,
            },
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setOpen(true)}
          className="cursor-pointer text-[180px] sm:text-[240px]"
        >
          🎁
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="text-white text-4xl sm:text-5xl font-bold mt-6"
        >
          Hey Chaklii 🐥
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="text-pink-200 text-lg mt-4"
        >
          Click the gift and let the magic begin ❤️
        </motion.p>
      </div>
    </div>
  );
}

export default GiftBox;