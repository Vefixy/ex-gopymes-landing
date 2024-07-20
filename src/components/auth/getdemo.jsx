import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const countryOptions = [
  { value: '+54', label: 'Argentina', flag: 'https://flagicons.lipis.dev/flags/4x3/ar.svg' },
  { value: '+591', label: 'Bolivia', flag: 'https://flagicons.lipis.dev/flags/4x3/bo.svg' },
  { value: '+56', label: 'Chile', flag: 'https://flagicons.lipis.dev/flags/4x3/cl.svg' },
  { value: '+57', label: 'Colombia', flag: 'https://flagicons.lipis.dev/flags/4x3/co.svg' },
  { value: '+506', label: 'Costa Rica', flag: 'https://flagicons.lipis.dev/flags/4x3/cr.svg' },
  { value: '+53', label: 'Cuba', flag: 'https://flagicons.lipis.dev/flags/4x3/cu.svg' },
  { value: '+593', label: 'Ecuador', flag: 'https://flagicons.lipis.dev/flags/4x3/ec.svg' },
  { value: '+503', label: 'El Salvador', flag: 'https://flagicons.lipis.dev/flags/4x3/sv.svg' },
  { value: '+502', label: 'Guatemala', flag: 'https://flagicons.lipis.dev/flags/4x3/gt.svg' },
  { value: '+504', label: 'Honduras', flag: 'https://flagicons.lipis.dev/flags/4x3/hn.svg' },
  { value: '+52', label: 'México', flag: 'https://flagicons.lipis.dev/flags/4x3/mx.svg' },
  { value: '+505', label: 'Nicaragua', flag: 'https://flagicons.lipis.dev/flags/4x3/ni.svg' },
  { value: '+507', label: 'Panamá', flag: 'https://flagicons.lipis.dev/flags/4x3/pa.svg' },
  { value: '+595', label: 'Paraguay', flag: 'https://flagicons.lipis.dev/flags/4x3/py.svg' },
  { value: '+51', label: 'Perú', flag: 'https://flagicons.lipis.dev/flags/4x3/pe.svg' },
  { value: '+598', label: 'Uruguay', flag: 'https://flagicons.lipis.dev/flags/4x3/uy.svg' },
  { value: '+58', label: 'Venezuela', flag: 'https://flagicons.lipis.dev/flags/4x3/ve.svg' },
];

const GetDemo = ({ isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = React.useState('');

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Solicitar una demostración gratuita</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={2}>
            <FormControl id="nombre" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" placeholder="Ingresa tu nombre" />
            </FormControl>
            <FormControl id="apellido" isRequired>
              <FormLabel>Apellido</FormLabel>
              <Input type="text" placeholder="Ingresa tu apellido" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" placeholder="Ingresa tu email" />
            </FormControl>
            <FormControl id="empresa" isRequired>
              <FormLabel>Empresa</FormLabel>
              <Input type="text" placeholder="Ingresa el nombre de tu empresa" />
            </FormControl>
            <FormControl id="telefono" isRequired>
              <FormLabel>Teléfono móvil</FormLabel>
              <Flex>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} maxW="140px" overflow="hidden">
                    {selectedCountry
                      ? countryOptions.find((option) => option.value === selectedCountry).label
                      : 'País'}
                  </MenuButton>
                  <MenuList maxH="150px" overflowY="auto">
                    {countryOptions.map((country) => (
                      <MenuItem key={country.value} onClick={() => handleCountrySelect(country.value)}>
                        <Image src={country.flag} boxSize="20px" mr="8px" />
                        {country.label} ({country.value})
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Input type="tel" placeholder="Número" flex="1" ml={2} />
              </Flex>
            </FormControl>
            <FormControl id="empleados">
              <FormLabel>Cantidad de empleados</FormLabel>
              <Input type="number" placeholder="Número de empleados" />
            </FormControl>
            <FormControl id="mensaje">
              <FormLabel>Mensaje</FormLabel>
              <Textarea placeholder="Escribe un breve mensaje" rows={2} />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>Enviar</Button>
          <Button onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GetDemo;
