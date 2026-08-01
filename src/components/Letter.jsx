import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Final from "./Final";
import BackgroundDecor from "./BackgroundDecor";

function Letter() {
  const [displayText, setDisplayText] = useState("");
  const [next, setNext] = useState(false);

  const text = `Dear Chaklii 🐥❤️

Sometimes life gives us people who become more than friends.

Thank you for every smile.
Thank you for every laugh.
Thank you for always being there.

I don't know what the future holds,
but I know one thing...

Our friendship will always be special.

Happy Friendship Day ❤️

With Lots of Love,
Sahil 💖`;

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  if (next) {
    return <Final />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#4c1d95,_#111827_55%,_#020617_100%)] flex items-center justify-center px-5">
      <BackgroundDecor />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <pre className="text-pink-100 whitespace-pre-wrap leading-8 sm:leading-9 text-lg sm:text-xl font-sans">
          {displayText}
        </pre>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setNext(true)}
            className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(244,114,182,0.35)]"
          >
            One Last Surprise 🎁
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Letter;