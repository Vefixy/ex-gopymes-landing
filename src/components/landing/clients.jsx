import React from 'react';
import { Box, Flex, Heading, Image, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const Clients = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation;

    const startAnimation = () => {
      const scrollAmount = 1;
      let currentScrollPosition = 0;

      const step = () => {
        currentScrollPosition += scrollAmount;
        container.scrollLeft = currentScrollPosition;

        if (currentScrollPosition >= container.scrollWidth / 2) {
          currentScrollPosition = 0;
        }

        animation = requestAnimationFrame(step);
      };

      animation = requestAnimationFrame(step);
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  const clients = [
    "./imagespublic/clients/garzonlogo.svg",
    "./imagespublic/clients/garzonlogo.svg",
    "./imagespublic/clients/garzonlogo.svg",
    "./imagespublic/clients/garzonlogo.svg",
    "./imagespublic/clients/garzonlogo.svg"
  ];

  return (
    <Box bg={bg} p="2rem">
      <Heading as="h2" size="xl" textAlign="center" mb="8">
        Nuestros Clientes
      </Heading>
      <Box
        ref={containerRef}
        overflow="hidden"
        whiteSpace="nowrap"
        maxW="2500px"
        mx="auto"
        position="relative"
      >
        <Flex
          align="center"
          justify="start"
          wrap="nowrap"
          style={{
            display: 'flex',
            animation: 'scroll 40s linear infinite'
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <Box
              key={index}
              w={isLargerThan768 ? "30%" : "50%"}
              p="4"
              display="inline-block"
              whiteSpace="normal"
            >
              <Image src={client} alt={`Cliente ${index}`} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Clients;
