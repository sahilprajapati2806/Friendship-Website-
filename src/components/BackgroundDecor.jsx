import { motion } from "framer-motion";

function BackgroundDecor() {
  const orbs = [
    { left: "8%", top: "12%", size: "220px", color: "rgba(244, 114, 182, 0.35)" },
    { left: "72%", top: "18%", size: "300px", color: "rgba(34, 211, 238, 0.25)" },
    { left: "15%", top: "70%", size: "260px", color: "rgba(251, 191, 36, 0.24)" },
    { left: "70%", top: "68%", size: "220px", color: "rgba(192, 132, 252, 0.28)" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.55, 0.22] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 42%)",
        }}
      />

      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-300/70"
          animate={{
            y: [0, -120, 0],
            x: [0, 30, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 4 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
          style={{
            left: `${6 + i * 5}%`,
            top: `${14 + (i % 4) * 16}%`,
            fontSize: `${12 + (i % 3) * 6}px`,
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

export default BackgroundDecor;
