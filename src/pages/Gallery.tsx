import React, { useState } from 'react';
import { Heart, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Gallery() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  const photos = [
    "/images/20241230_181530.jpg",
    "/images/20250114_184050.jpg",
    "/images/20250201_133047.jpg",
    "/images/20250201_174056.jpg"
  ];

  const totalImages = photos.length;

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const loadingProgress = (imagesLoaded / totalImages) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 p-8">
      {imagesLoaded < totalImages && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="relative mb-8">
              <Loader2 className="w-16 h-16 text-pink-500 animate-spin" />
              <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Our Memories</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="h-full bg-pink-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-gray-600">
              {imagesLoaded} of {totalImages} photos loaded
            </p>
            <p className="text-sm text-gray-500 mt-2 italic">
              Each photo holds a special moment...
            </p>
          </div>
        </div>
      )}

      <Link 
        to="/" 
        className="fixed top-4 left-4 z-50 bg-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-pink-50 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
        <span className="text-gray-600">Back to Letter</span>
      </Link>

      <header className="text-center mb-12 pt-20">
        <Heart className="inline-block w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 font-serif">Our Beautiful Memories</h1>
        <p className="mt-2 text-xl text-gray-600">Every moment with you is a treasure</p>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative aspect-square overflow-hidden rounded-lg shadow-lg group transition-transform duration-500 ${
                imagesLoaded === totalImages ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // You could add functionality here to show the image in a modal
                }
              }}
            >
              <img 
                src={photo} 
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onLoad={handleImageLoad}
                onError={(e) => {
                  console.error(`Failed to load image: ${photo}`);
                  (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;