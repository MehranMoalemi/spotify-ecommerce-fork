import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useScrollVisibility = () => {
  const [isLightsVisible, setIsLightsVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path === '/') {
      setIsLightsVisible(true);
    } else {
      setIsLightsVisible(false);
    }
  }, [path]); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsLightsVisible(scrollPosition === 0);
    };
    if(path==='/')
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [path]);

  return {isLightsVisible,setIsLightsVisible};
};

export default useScrollVisibility;
