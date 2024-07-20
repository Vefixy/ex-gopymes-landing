import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TiChevronRightOutline } from 'react-icons/ti';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBgColor = useColorModeValue('blue.400', 'blue.600');
  const buttonHoverBgColor = useColorModeValue('blue.500', 'blue.700');
  const buttonColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const navButtonColor = useColorModeValue('gray.800', 'white');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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

  const handleButtonClick = () => {
    setShowConfetti(true);
    onOpen();

    setTimeout(() => {
      onClose();
      navigate('/login');
    }, 2000);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (hash) => {
    window.location.hash = hash;
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem 2rem"
        bg={bgColor}
        color={textColor}
        borderBottom={`2px solid ${borderColor}`}
      >
        <Flex align="center">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1, ease: 'easeInOut' }}>
            <Image id="logo" width="100%" src="./imagespublic/logo.svg" alt="Logo" />
          </motion.div>
          <Text
            ml={3}
            fontSize="1.5rem"
            fontWeight="bold"
            color={textColor}
            style={{ fontFamily: 'inherit' }}
          >
            GoPymes
          </Text>
        </Flex>

        <Flex align="center" justify="center" flex="1">
          <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mr="4"
              fontWeight="bold"
              fontSize="1rem"
              color={navButtonColor}
              onClick={() => navigateTo('#about')}
            >
              Sobre nosotros
            </Button>
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mr="4"
              fontWeight="bold"
              fontSize="1rem"
              color={navButtonColor}
              onClick={() => navigateTo('#clients')}
            >
              Clientes
            </Button>
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mr="4"
              fontWeight="bold"
              fontSize="1rem"
              color={navButtonColor}
              onClick={() => navigateTo('#contact')}
            >
              Contacto
            </Button>
          </Box>

          <Menu isOpen={isOpen} onClose={handleMenuToggle}>
            <MenuButton
              as={Button}
              rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
              variant="link"
              _hover={{ textDecoration: 'none' }}
              onClick={handleMenuToggle}
              color={navButtonColor}
              fontWeight="bold"
            >
              Más información
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Box flex="1">
                  <Text fontWeight="bold">Costo del servicio</Text>
                  <Text fontSize="sm">Conoce los valores de nuestro CRM</Text>
                </Box>
                <Box>
                  <TiChevronRightOutline />
                </Box>
              </MenuItem>
              <MenuItem>
                <Box flex="1">
                  <Text fontWeight="bold">Funcionalidades</Text>
                  <Text fontSize="sm">
                    Te presentamos detalladamente todas las funciones y características de nuestro sistema
                  </Text>
                </Box>
                <Box>
                  <TiChevronRightOutline />
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex align="center">
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: 'none' }}
            w="fit-content"
            mr="7px"
          >
            {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
          </Button>

          <motion.div
            whileHover="hover"
            whileTap="pressed"
            variants={buttonVariants}
            onClick={handleButtonClick}
            style={{ position: 'relative' }}
          >
            <Button
              bg={buttonBgColor}
              _hover={{ bg: buttonHoverBgColor }}
              color={buttonColor}
              variant="solid"
              borderRadius="8px"
              p="0.75rem 1.5rem"
              fontSize="1rem"
              fontWeight="bold"
            >
              Comencemos
            </Button>
          </motion.div>
        </Flex>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={onClose} isCentered>
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
    </>
  );
};

export default Navbar;
