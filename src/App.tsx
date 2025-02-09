import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "./context/AudioProvider";
import Letter from "./pages/Letter";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Letter />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
