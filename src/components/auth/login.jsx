import React from 'react';
import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import GetDemo from './getdemo';

export default function SplitScreen() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
            <Text fontSize={'lg'} color={'gray.600'}>Inicia sesión para ver las últimas actualizaciones.</Text>
            <FormControl id="email">
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" placeholder="Ingresa tu email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="Ingresa tu contraseña" />
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
