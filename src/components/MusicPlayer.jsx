import { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    const playMusic = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked by browser");
      }
    };

    playMusic();
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 bg-pink-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        {playing ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </>
  );
}

export default MusicPlayer;