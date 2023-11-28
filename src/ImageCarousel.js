import React, { useState } from 'react';
import './App.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="nav-button prev" onClick={handlePrevClick}>
          &lt; Prev
        </button>
        <img
          src={images[currentImageIndex]}
          alt=""
          className="carousel-image"
          onClick={() => handleImageClick(currentImageIndex)}
        />
        <button className="nav-button next" onClick={handleNextClick}>
          Next &gt;
        </button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

