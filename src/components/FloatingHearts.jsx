function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 animate-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${15 + Math.random() * 25}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;