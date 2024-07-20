import React, { useEffect, useState } from 'react';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const bgColor = useColorModeValue('blue.400', 'blue.600');
  const hoverBgColor = useColorModeValue('blue.500', 'blue.700');
  const iconColor = useColorModeValue('white', 'gray.800');
  const [showButton, setShowButton] = useState(false);
  const [animateParticles, setAnimateParticles] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAnimateParticles(true);
    setTimeout(() => setAnimateParticles(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      particles.push(
        <motion.div
          key={i}
          initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, scale: [1, 1.5, 0], x, y }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: bgColor,
            borderRadius: '50%',
            position: 'absolute',
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
          >
            <IconButton
              onClick={scrollToTop}
              icon={<FaArrowUp />}
              aria-label="Scroll to top"
              bg={bgColor}
              _hover={{ bg: hoverBgColor }}
              color={iconColor}
              borderRadius="full"
              size="lg"
              shadow="md"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {animateParticles && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', pointerEvents: 'none' }}>
          {generateParticles()}
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
