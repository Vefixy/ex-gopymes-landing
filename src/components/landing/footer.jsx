import React from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { BiMailSend } from 'react-icons/bi';

const Logo = (props: any) => {
  return <img src="/imagespublic/logo.svg" alt="Logo" height={32} {...props} />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={4}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>© 2024 GoPymes. Todos los derechos reservados</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://x.com/vefixy'}>
                <BsTwitterX />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/vefixy'}>
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/vefixy/'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Nosotros</ListHeader>
            <Box as="a" href={'#'}>
              Sobre nosotros
            </Box>
            <Box as="a" href={'#'}>
              Vefixy
            </Box>
            <Box as="a" href={'#'}>
              Contactanos
            </Box>
            <Box as="a" href={'#'}>
              Planes
            </Box>
            <Box as="a" href={'#'}>
              Clientes
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
            <Box as="a" href={'#'}>
              Necesito ayuda
            </Box>
            <Box as="a" href={'#'}>
              Terminos y servicios
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
            Política de privacidad
            </Box>
            <Box as="a" href={'#'}>
              Estado
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Mantenete actualizado</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Ingresa tu correo'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
