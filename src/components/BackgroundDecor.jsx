import { motion } from "framer-motion";

function BackgroundDecor() {
  const orbs = [
    { left: "8%", top: "12%", size: "220px", color: "rgba(244, 114, 182, 0.35)" },
    { left: "72%", top: "18%", size: "300px", color: "rgba(34, 211, 238, 0.25)" },
    { left: "15%", top: "70%", size: "260px", color: "rgba(251, 191, 36, 0.24)" },
    { left: "70%", top: "68%", size: "220px", color: "rgba(192, 132, 252, 0.28)" },
  ];

  const sparkles = [...Array(18)].map((_, i) => ({
    left: `${6 + i * 5}%`,
    top: `${14 + (i % 4) * 16}%`,
    size: `${10 + (i % 3) * 4}px`,
    delay: i * 0.15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.1, 0.35, 0.12, 0.22] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(168,85,247,0.14), transparent 25%)",
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{ x: [0, 42, -32, 0], y: [0, -26, 28, 0], scale: [1, 1.08, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          left: "50%",
          top: "20%",
          width: "320px",
          height: "320px",
          background: "rgba(56, 189, 248, 0.14)",
          transform: "translateX(-50%)",
        }}
      />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -28, 24, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
        />
      ))}

      {sparkles.map((sparkle, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300/80"
          animate={{ y: [0, -120, 0], x: [0, 24, -20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4.2 + i * 0.16, repeat: Infinity, delay: sparkle.delay, ease: "easeInOut" }}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            fontSize: sparkle.size,
          }}
        >
          ✦
        </motion.span>
      ))}

      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`heart-${i}`}
          className="absolute text-pink-200/80"
          animate={{
            y: [0, -180, -120, 0],
            x: [0, -12, 12, 0],
            opacity: [0, 0.7, 0.4, 0],
            scale: [0.8, 1, 0.9, 0.8],
          }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
          style={{
            left: `${8 + i * 7}%`,
            top: `${68 - (i % 3) * 10}%`,
            fontSize: `${14 + (i % 4) * 6}px`,
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}

export default BackgroundDecor;
