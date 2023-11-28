import React from 'react';
import ImageCarousel from './ImageCarousel';

const App = () => {
  const images = [
    'https://picsum.photos/1600/800', 
    ' https://placekitten.com/800/400',
    'https://picsum.photos/800/400',
    'https://picsum.photos/800/400',
    'https://picsum.photos/1200/600',
    'https://picsum.photos/1600/800',
    
  ];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;
