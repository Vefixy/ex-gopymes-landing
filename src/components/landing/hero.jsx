import React, { useState, useRef } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  IconButton,
  Icon,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
} from '@chakra-ui/react';
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

export default function CallToActionWithVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const buttonBgColor = useColorModeValue('blue.400', 'blue.600');
  const buttonHoverBgColor = useColorModeValue('blue.500', 'blue.700');
  const buttonColor = useColorModeValue('white', 'gray.800');

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleButtonClick = () => {
    setShowConfetti(true);
    onOpen();
    setTimeout(() => {
      onClose();
      navigate('/login'); // Cambia '/login' por el link deseado
    }, 2000);
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    pressed: {
      scale: 0.9,
    },
  };

  return (
    <Container maxW={'7xl'}>
      {showConfetti && <Confetti />}
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.300',
                zIndex: -1,
              }}>
              GoPymes
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
              Un CRM Ágil para Automatizar Procesos
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Somos un <b>CRM</b> diseñado para empresas <b>argentinas</b>, permitiendo una
            gestión ágil y eficiente de tus procesos empresariales.
          </Text>
          <Stack spacing={{ base: 4, sm: 4 }} direction={{ base: 'column', sm: 'row' }} justify="center">
            <motion.div
              whileHover="hover"
              whileTap="pressed"
              variants={buttonVariants}
              onClick={handleButtonClick}
              style={{ position: 'relative' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                bg={buttonBgColor}
                _hover={{ bg: buttonHoverBgColor }}
                color={buttonColor}
                variant="solid"
              >
                Comenzar ahora
              </Button>
            </motion.div>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              variant="outline"
              colorScheme="blue">
              Cómo funciona
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'100%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('teal.50', 'blue.500')}
          />
          <Box
            position={'relative'}
            height={'280px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={isPlaying ? 'Pause Button' : 'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={isPlaying ? <IoIosPause size={24} /> : <IoIosPlay size={24} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={4}
              bottom={4}
              onClick={handlePlayPause}
              zIndex={1}  // Asegura que el botón esté en un z-index superior al video
            />
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src={'./imagespublic/media/heromedia.mp4'} type="video/mp4" />
            </video>
          </Box>
        </Flex>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody display="flex" justifyContent="center" alignItems="center" height="200px">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              as={motion.div}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
}
