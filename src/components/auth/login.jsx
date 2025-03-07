import React, { useState } from 'react';
import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import GetDemo from './getdemo';

export default function SplitScreen() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // Estado para mostrar u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'} position="relative">
          <Button
            leftIcon={<FaArrowLeft />}
            variant="link"
            position="absolute"
            top="10px"
            left="10px"
            onClick={() => navigate('/')}
          >
            Volver al sitio principal
          </Button>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Bienvenido a nuestro CRM.</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Inicia sesión para ver las últimas actualizaciones.
            </Text>
            <FormControl id="email">
              <FormLabel>Correo electrónico</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdEmail color="gray.300" />
                </InputLeftElement>
                <Input type="email" placeholder="Ingresa tu email" />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="gray.300" />
                </InputLeftElement>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Ingresa tu contraseña"
                />
                <InputRightElement>
                  <Button
                    variant="ghost"
                    size={1}
                    onClick={handlePasswordVisibility}
                    _focus={{ boxShadow: 'none' }}
                  >
                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
              <Button colorScheme={'blue'} variant={'solid'}>
                Iniciar sesión
              </Button>
              <Button colorScheme={'gray'} variant={'outline'} onClick={onOpen}>
                Solicitar una demostración gratuita
              </Button>
            </Stack>
          </Stack>
        </Flex>
        {isDesktop && (
          <Flex flex={1} bg={bgColor} position="relative">
            <Spline scene="https://prod.spline.design/4INWMvRd-fmhTSk5/scene.splinecode" />
          </Flex>
        )}
      </Stack>
      <GetDemo isOpen={isOpen} onClose={onClose} />
    </>
  );
}