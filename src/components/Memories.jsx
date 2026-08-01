import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Reasons from "./Reasons";
import BackgroundDecor from "./BackgroundDecor";

function Memories() {

  const [next, setNext] = useState(false);

  const bottomRef = useRef(null);

  const timerRef = useRef(null);

  useEffect(() => {

    timerRef.current = setTimeout(() => {

      bottomRef.current?.scrollIntoView({

        behavior: "smooth"

      });

    }, 2000);

    return () => clearTimeout(timerRef.current);

  }, []);

  // IMPORTANT
  // useEffect પછી return રાખ્યું છે
  if (next) {
    return <Reasons />;
  }

  const memories = [

    {
      img: "/photo1.jpg",
      emoji: "🌸",
      text: "Where our beautiful friendship began."
    },

    {
      img: "/photo2.jpg",
      emoji: "😂",
      text: "The funniest memories are always with you."
    },

    {
      img: "/photo3.jpg",
      emoji: "💖",
      text: "Every picture tells our story."
    },

    {
      img: "/photo4.jpg",
      emoji: "🫶",
      text: "Partners in crime forever."
    },

    {
      img: "/photo5.jpg",
      emoji: "🌈",
      text: "Thank you for always being there."
    },

    {
      img: "/photo6.jpg",
      emoji: "🐥",
      text: "Forever My Cute Chaklii ❤️"
    }

  ];

  return (

    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_#312e81,_#1f2937_35%,_#111827)] py-20 px-5 overflow-hidden">

      <BackgroundDecor />

      <motion.h1

        initial={{ opacity: 0, y: -40 }}

        animate={{ opacity: 1, y: 0 }}

        className="text-center text-5xl text-white font-bold mb-20 relative z-10"

      >

        ❤️ Our Beautiful Memories ❤️

      </motion.h1>

      <div className="max-w-6xl mx-auto">

        {memories.map((item, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 60 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className={`flex flex-col md:flex-row ${
              index % 2 ? "md:flex-row-reverse" : ""
            } items-center gap-14 mb-24`}

          >

            <img

              src={item.img}

              alt="memory"

              className="w-[320px] h-[420px] rounded-3xl object-cover border-4 border-pink-300"

            />

            <div className="text-white max-w-md">

              <h2 className="text-5xl mb-5">

                {item.emoji}

              </h2>

              <p className="text-2xl text-pink-100 leading-10">

                {item.text}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

      <div

        ref={bottomRef}

        className="flex justify-center"

      >

        <button

          onClick={() => {

            window.scrollTo({

              top: 0,

              behavior: "smooth"

            });

            setNext(true);

          }}

          className="bg-pink-500 hover:bg-pink-600 px-10 py-4 rounded-full text-white text-xl"

        >

          Continue ❤️

        </button>

      </div>

    </div>

  );

}

export default Memories;