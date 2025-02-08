import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Letter from './pages/Letter';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;