import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import holy1 from"../../public/mocki1.png"
import holy2 from"../../public/mocki2.png"
import holy3 from"../../public/mocki3.png"




const InternalHoly = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    holy1,
    holy2,
    holy3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div style={{ display: 'flex', height: '40vh', width: '90vw' , backgroundColor: "red" }}>
  
      
      <div style={{ width: '100%', height: "100%", overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence initial={false} custom={currentImageIndex}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            custom={currentImageIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 1200, damping: 60, duration: 3.5  },
              opacity: { duration: 0.2 }
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={5}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(100, 100);

              if (swipe < -swipeConfidenceThreshold) {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
              } else if (swipe > swipeConfidenceThreshold) {
                setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
              }
            }}
            style={{
              position: 'absolute',
              width: "100%",
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </AnimatePresence>
      </div>
      
    </div>
  );
};

export default InternalHoly;


