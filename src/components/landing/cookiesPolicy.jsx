import React, { useState, useEffect } from 'react';
import {
  Stack,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';
import { CloseIcon } from '@chakra-ui/icons';

// Función para establecer una cookie
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// Función para obtener una cookie
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default function CookiesPolicy() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isPdfOpen, onOpen: onOpenPdf, onClose: onClosePdf } = useDisclosure();

  // Verifica el estado de aceptación de cookies y el tipo de dispositivo
  useEffect(() => {
    const checkCookieAndDevice = () => {
      const cookieAccepted = getCookie('cookiesAccepted');
      if (!cookieAccepted) {
        setShowBanner(true);
      } else {
        setShowBanner(false);  // Asegúrate de ocultar el banner si las cookies fueron aceptadas
      }

      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);

      if (isMobileDevice && !cookieAccepted) {
        onOpen();  // Abre el modal solo en dispositivos móviles si no se han aceptado las cookies
      }
    };

    checkCookieAndDevice();  // Ejecutar en la carga inicial
    window.addEventListener('resize', checkCookieAndDevice);  // Ejecutar al cambiar el tamaño de la ventana

    return () => window.removeEventListener('resize', checkCookieAndDevice);
  }, [onOpen]);

  const handleAcceptCookies = () => {
    setCookie('cookiesAccepted', 'true', 365);  // Guarda la cookie por 365 días
    setShowBanner(false);  // Oculta el banner de cookies
    onClose();  // Cierra el modal si está abierto
  };

  const handleOpenCookiePreferences = () => {
    if (isMobile) {
      window.open('/legal/cookiespolicy.pdf', '_blank');
    } else {
      onOpenPdf();
    }
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
    onClose();
  };

  return (
    <>
      {showBanner && !isMobile && (
        <Stack
          p="4"
          boxShadow="lg"
          borderRadius="md"
          position="fixed"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          width="80%"
          maxWidth="900px"
          bg="white"
          zIndex="1000"
          spacing="4"
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <Text fontWeight="semibold">Tu Privacidad</Text>
              <FcLock />
            </Stack>
            <IconButton
              aria-label="Close cookie banner"
              icon={<CloseIcon />}
              size="sm"
              variant="ghost"
              onClick={handleCloseBanner}
            />
          </Stack>

          <Text fontSize="sm" textAlign={'left'}>
            Utilizamos cookies y tecnologías similares para personalizar contenido, adaptar y medir anuncios, y 
            ofrecer una mejor experiencia. Al hacer clic en <b>"Acepto"</b> o activar una opción en las "Preferencias de Cookies", 
            <b> aceptas esto según se describe en nuestra Política de Cookies.</b> Al abrir las "Preferencias de Cookies", podrás 
            leer más sobre cómo usamos las cookies, y elegir aceptarlas o rechazarlas. <b>Si decides rechazar las cookies 
            cerrando el mensaje, este seguirá apareciendo debido a nuestra política de uso de cookies.</b>
          </Text>

          <Stack direction="row" justifyContent="center" spacing={3}>
            <Button variant="outline" colorScheme="green" size="sm" onClick={handleOpenCookiePreferences}>
              Preferencias de Cookies
            </Button>
            <Button colorScheme="green" size="sm" onClick={handleAcceptCookies}>
              Acepto 🍪
            </Button>
          </Stack>
        </Stack>
      )}

      <Modal isOpen={isOpen && isMobile} onClose={handleCloseBanner} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tu Privacidad <FcLock /></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm" textAlign={'left'}>
              Utilizamos cookies y tecnologías similares para personalizar contenido, adaptar y medir anuncios, y 
              ofrecer una mejor experiencia. Al hacer clic en <b>"Acepto"</b> o activar una opción en las "Preferencias de Cookies", 
              <b> aceptas esto según se describe en nuestra Política de Cookies.</b> Al abrir las "Preferencias de Cookies", podrás 
              leer más sobre cómo usamos las cookies, y elegir aceptarlas o rechazarlas. <b>Si decides rechazar las cookies 
              cerrando el mensaje, este seguirá apareciendo debido a nuestra política de uso de cookies.</b>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" justifyContent="center" spacing={3} width="100%">
              <Button variant="outline" colorScheme="green" size="sm" onClick={handleOpenCookiePreferences}>
                Preferencias de Cookies
              </Button>
              <Button colorScheme="green" size="sm" onClick={handleAcceptCookies}>
                Acepto 🍪
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isPdfOpen} onClose={onClosePdf} size="xl">
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
            <Button onClick={onClosePdf}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}