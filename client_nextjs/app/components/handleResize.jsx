"use client"
import { useState, useEffect } from 'react';

const useIsSmallDevice = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768);
    };

    handleResize(); // Check the screen size initially

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallDevice;
};

export default useIsSmallDevice;
