import React, { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext<{
  isMuted: boolean;
  toggleMute: () => void;
}>({
  isMuted: false,
  toggleMute: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted((prev) => !prev);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/daniel_caesar_get_you.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
