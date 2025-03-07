import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  IconButton,
  useDisclosure,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TiChevronRightOutline } from 'react-icons/ti';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

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
      window.location.href = '/login';  // Redirige a /login directamente
    }, 2000);
  };

  const handleMenuButtonClick = (hash) => {
    onDrawerClose(); // Cierra el Drawer primero
    setTimeout(() => {
      window.location.hash = hash; // Navega a la sección una vez cerrado el Drawer
    }, 200); // Le damos un pequeño retardo para permitir el cierre del Drawer
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

        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={<FaBars />}
            onClick={onDrawerOpen}
            variant="ghost"
            aria-label="Open Menu"
            color={navButtonColor}
          />
        </Box>

        <Flex align="center" justify="center" flex="1" display={{ base: 'none', md: 'flex' }}>
          <Button
            variant="link"
            _hover={{ textDecoration: 'none' }}
            mr="4"
            fontWeight="bold"
            fontSize="1rem"
            color={navButtonColor}
            onClick={() => handleMenuButtonClick('#about')}
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
            onClick={() => handleMenuButtonClick('#clients')}
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
            onClick={() => handleMenuButtonClick('#contact')}
          >
            Contacto
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaChevronDown />}
              variant="link"
              _hover={{ textDecoration: 'none' }}
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

        <Flex align="center" display={{ base: 'none', md: 'flex' }}>
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

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu de navegación</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mb="4"
              fontWeight="bold"
              fontSize="1.25rem"
              color={navButtonColor}
              onClick={() => handleMenuButtonClick('#about')}
            >
              Sobre nosotros
            </Button>
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mb="4"
              fontWeight="bold"
              fontSize="1.25rem"
              color={navButtonColor}
              onClick={() => handleMenuButtonClick('#clients')}
            >
              Clientes
            </Button>
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mb="4"
              fontWeight="bold"
              fontSize="1.25rem"
              color={navButtonColor}
              onClick={() => handleMenuButtonClick('#contact')}
            >
              Contacto
            </Button>
            <Button
              variant="link"
              _hover={{ textDecoration: 'none' }}
              mb="4"
              fontWeight="bold"
              fontSize="1.25rem"
              color={navButtonColor}
              onClick={onDrawerClose}
            >
              Más información
            </Button>
            <motion.div
              whileHover="hover"
              whileTap="pressed"
              variants={buttonVariants}
              onClick={() => {
                handleButtonClick();
                onDrawerClose();
              }}
              style={{ position: 'relative' }}
            >
              <Button
                bg={buttonBgColor}
                _hover={{ bg: buttonHoverBgColor }}
                color={buttonColor}
                variant="solid"
                borderRadius="8px"
                p="0.75rem 1.5rem"
                fontSize="1.25rem"
                fontWeight="bold"
                mb="4"
              >
                Comencemos
              </Button>
            </motion.div>
            <Button
              aria-label="Toggle Color Mode"
              onClick={() => {
                toggleColorMode();
                onDrawerClose();
              }}
              mb="4"
            >
              {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

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
    </>
  );
};

export default Navbar;