import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Button, useColorMode, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TiChevronRightOutline } from "react-icons/ti";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBgColor = useColorModeValue('blue.400', 'blue.600');
  const buttonHoverBgColor = useColorModeValue('blue.500', 'blue.700');
  const buttonColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const emojis = ['💫', '✨', '⭐', '🥳', '🎈', '🎉', '🎊'];

  const handleButtonClick = () => {
    setShowConfetti(true);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1, ease: "easeInOut" }}>
          <Image id="logo" width="100%" src="./imagespublic/logo.svg" alt="Logo" />
        </motion.div>
      </Flex>

      <Box
        display={{ base: 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex align="center" justify="center" direction="row">
          <Menu isOpen={isOpen} onClose={handleMenuToggle}>
            <MenuButton as={Button} rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />} variant="link" _hover={{ textDecoration: 'none' }} onClick={handleMenuToggle}>
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
                  <Text fontSize="sm">Te presentamos detalladamente todas las funciones y características de nuestro sistema</Text>
                </Box>
                <Box>
                  <TiChevronRightOutline />
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <motion.div
          whileHover="hover"
          whileTap="pressed"
          variants={buttonVariants}
          onClick={handleButtonClick}
          style={{ position: "relative" }}
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
          {showConfetti && (
            emojis.map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ y: -50, x: Math.random() * 100 - 50 }}
                animate={{ y: 300, x: Math.random() * 100 - 50, rotate: Math.random() * 360 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ position: "absolute", top: "0", left: "50%", overflow: "hidden" }}
              >
                {emoji}
              </motion.div>
            ))
          )}
        </motion.div>
      </Box>
    </Flex>
  );
};

const NavItem = ({ children, href }) => {
  return (
    <Box ml={{ base: 0, md: 8 }} mt={{ base: 4, md: 0 }}>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={href}
      >
        {children}
      </motion.a>
    </Box>
  );
};

export default Navbar;
