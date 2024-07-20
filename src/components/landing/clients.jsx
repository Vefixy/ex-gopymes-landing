import React from 'react';
import { Box, Heading, Image, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const bg = useColorModeValue('blue.800', 'gray.800');
  const text = useColorModeValue('white', 'white');
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const clients = [
    "./imagespublic/clients/akeneo.png",
    "./imagespublic/clients/contentstack.png",
    "./imagespublic/clients/contentful.png",
    "./imagespublic/clients/vefixylogo.svg"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // velocidad para el deslizamiento
    slidesToShow: isLargerThan768 ? 3 : 2, // varios logos al mismo tiempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // deslizamiento continuo
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box bg={bg} p={{ base: '1rem', md: '2rem' }} overflowX="hidden" position="relative">
      <Heading as="h2" size="xl" color={text} textAlign="center" >
        Nuestros Clientes
      </Heading>
      <Box
        overflow="hidden"
        position="relative"
        width="auto"
      >
        <Slider {...settings}>
          {clients.concat(clients).map((client, index) => (
            <Box
              key={index}
              display="inline-block"
              sx={{ '&:focus': { outline: 'none' } }}
              mx="4px" // Espacio de píxeles entre cada logo
            >
              <Image
                src={client}
                alt={`Cliente ${index}`}
                boxSize={{ base: '100px', md: '150px' }}
                objectFit="contain"
                mx="auto"
              />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        position="absolute"
        right="8px"
        top="50%"
        transform="translateY(-50%)"
        overflow="hidden"
        maxHeight="100%"
      >
        <Image
          src="./imagespublic/svg/stars.svg"
          alt="Stars decoration"
          objectFit="cover"
        />
      </Box>
      <Box
        position="absolute"
        left="8px"
        top="50%"
        transform="translateY(-50%)"
        overflow="hidden"
        maxHeight="100%"
      >
        <Image
          src="./imagespublic/svg/stars.svg"
          alt="Stars decoration"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Clients;
