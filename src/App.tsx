import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import Letter from './pages/Letter';
import Gallery from './pages/Gallery';

function App() {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    document.title = "Our Valentine's Gallery";
  }, []);

  return (
    <BrowserRouter>
      <audio 
        ref={audioRef}
        loop 
        autoPlay 
        muted={isMuted}
        onError={(e) => console.error("Audio failed to load:", e)}
      >
        <source src="/music/Daniel Caesar - Get You (feat. Kali Uchis).mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-pink-500"
        />
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-6 h-6 text-gray-600" /> : <Volume2 className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;