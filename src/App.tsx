import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import Letter from './pages/Letter';
import Gallery from './pages/Gallery';

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);

  // Define the audio source as a constant
  const AUDIO_SOURCE = '/music/Daniel%20Caesar%20-%20Get%20You%20(feat.%20Kali%20Uchis).mp3';
  return (
    <BrowserRouter>
      {/* Global Audio Player */}
      <audio 
        loop 
        autoPlay 
        muted={isMuted}
        onError={(e) => {
          console.error("Audio failed to load:", e);
          setAudioError(true);
        }}
      >
        <source src={AUDIO_SOURCE} type="audio/mpeg" />
      </audio>

      {/* Global Mute Button */}
      {!audioError && (
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="fixed top-4 right-4 z-50 bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
        >
          {isMuted ? <VolumeX className="w-6 h-6 text-gray-600" /> : <Volume2 className="w-6 h-6 text-gray-600" />}
        </button>
      )}

      <Routes>
        <Route path="/" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;