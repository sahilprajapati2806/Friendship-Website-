import { useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundDecor from "./BackgroundDecor";

function Final() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.reload();
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  return (

    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#be185d,_#4c1d95_45%,_#111827_100%)] text-center px-5">
      <BackgroundDecor />

      <motion.h1

      initial={{scale:0}}

      animate={{scale:1}}

      transition={{duration:1}}

      className="relative z-10 text-5xl sm:text-7xl text-white font-black">

      ❤️ Happy Friendship Day ❤️

      </motion.h1>

      <motion.h2

      initial={{opacity:0}}

      animate={{opacity:1}}

      transition={{delay:1}}

      className="relative z-10 text-3xl sm:text-4xl mt-10 text-pink-100">

      My Cute Chaklii 🐥

      </motion.h2>

      <motion.p

      initial={{opacity:0}}

      animate={{opacity:1}}

      transition={{delay:2}}

      className="relative z-10 mt-12 text-xl sm:text-2xl text-white leading-8 sm:leading-10 max-w-2xl">

      Thank you for being the most wonderful best friend.

      No matter where life takes us,

      you'll always have a special place in my heart.

      💖

      </motion.p>

      <motion.div

      animate={{
        y:[0,-15,0]
      }}

      transition={{
        repeat:Infinity,
        duration:2
      }}

      className="relative z-10 text-7xl sm:text-8xl mt-12">

      ❤️

      </motion.div>

      <h2 className="relative z-10 text-pink-200 mt-10 text-2xl sm:text-3xl">

      Made With Love By Sahil 💖

      </h2>

    </div>

  )

}

export default Final;