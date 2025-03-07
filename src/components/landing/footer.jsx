import React, { useState, useEffect } from 'react';
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
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
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

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function LargeWithNewsletter() {
  const { isOpen: isPdfOpenPrivacy, onOpen: onOpenPdfPrivacy, onClose: onClosePdfPrivacy } = useDisclosure();
  const { isOpen: isPdfOpenTerms, onOpen: onOpenPdfTerms, onClose: onClosePdfTerms } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handlePrivacyPolicyClick = () => {
    if (isMobile) {
      window.open('/legal/cookiespolicy.pdf', '_blank');
    } else {
      onOpenPdfPrivacy();
    }
  };

  const handleTermsConditionsClick = () => {
    if (isMobile) {
      window.open('/legal/termsandconditions.pdf', '_blank');
    } else {
      onOpenPdfTerms();
    }
  };

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack align={'center'} spacing={4}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>
              © {getCurrentYear()} <Box as="a" href="#footer">GoPymes</Box>. Todos los derechos reservados
            </Text>
            <Text fontSize={'sm'}>
              Hecho con ❤️ por <Box as="a" href="https://www.vefixy.com" target="_blank" rel="noopener noreferrer">Vefixy</Box>
            </Text>
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

          <Stack
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <ListHeader>Nosotros</ListHeader>
            <Box as="a" href={'#about'}>
              Sobre nosotros
            </Box>
            <Box as="a" href="https://vefixy.com/" target="_blank" rel="noopener noreferrer">
              Vefixy
            </Box>
            <Box as="a" href={'#contact'}>
              Contactanos
            </Box>
            <Box as="a" href={'#'}>
              Planes
            </Box>
            <Box as="a" href={'#clients'}>
              Clientes
            </Box>
          </Stack>

          <Stack
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <ListHeader>Soporte</ListHeader>
            <Box as="a" href={'#contact'}>
              Necesito ayuda
            </Box>
            <Box as="a" href="#footer" onClick={handleTermsConditionsClick}>
              Términos y condiciones
            </Box>
            <Box as="a" href="#footer" onClick={handlePrivacyPolicyClick}>
              Política de privacidad
            </Box>
            <Box as="a" href='https://www.status.vefixy.com/' target="_blank" rel="noopener noreferrer">
              Estado
            </Box>
          </Stack>

          <Stack
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <ListHeader>Mantenete actualizado</ListHeader>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} w={'full'}>
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

      {/* Modal para mostrar el PDF de Política de Cookies usando un iframe */}
      <Modal isOpen={isPdfOpenPrivacy} onClose={onClosePdfPrivacy} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Política de Cookies</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src="/legal/cookiespolicy.pdf"
              title="Política de Cookies"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClosePdfPrivacy}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal para mostrar el PDF de Términos y Condiciones usando un iframe */}
      <Modal isOpen={isPdfOpenTerms} onClose={onClosePdfTerms} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Términos y Condiciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src="/legal/termsandconditions.pdf"
              title="Términos y Condiciones"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClosePdfTerms}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
