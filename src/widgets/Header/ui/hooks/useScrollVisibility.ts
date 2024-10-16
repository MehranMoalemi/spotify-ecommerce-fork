import { useEffect, useState } from 'react';

const useScrollVisibility = () => {
  const [isLightsVisible, setIsLightsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsLightsVisible(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isLightsVisible;
};

export default useScrollVisibility;
