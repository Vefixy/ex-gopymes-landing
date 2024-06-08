import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Stack, 
  Container, 
  Avatar, 
  useColorModeValue 
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Experiencia de nuestros clientes</Heading>
          <Text>Conocé una breve experiencia de nuestros usuarios más activos</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Colaboración eficiente</TestimonialHeading>
              <TestimonialText>
                GoPymes ha revolucionado la forma en que gestionamos nuestros procesos. Es una herramienta indispensable para nuestra empresa.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://img.freepik.com/fotos-premium/logotipo-inteligente-simple_553012-47539.jpg'}
              name={'Mariana García'}
              title={'TechSolutions S.A, Directora de Tecnología'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Diseño intuitivo</TestimonialHeading>
              <TestimonialText>
                La facilidad de uso y la eficiencia de GoPymes nos han permitido ahorrar tiempo y recursos. ¡Altamente recomendado!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://i.pinimg.com/236x/44/f1/e8/44f1e81ee6058782db0a7390b31579b8.jpg'}
              name={'Alejandro Fernández'}
              title={'Innovatech, Gerente de Operaciones'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Servicio alucinante</TestimonialHeading>
              <TestimonialText>
                Desde que implementamos GoPymes, nuestra productividad ha mejorado significativamente. Es una solución completa para nuestras necesidades.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'https://img.freepik.com/vector-premium/2shvioletesferas_177517-1601.jpg'}
              name={'Sofía Martínez'}
              title={'EcoAgro, Desarrollo de Negocios'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
