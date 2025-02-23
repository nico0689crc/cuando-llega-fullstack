import React from 'react';
import { Container, Typography, Box, Paper, Stack } from '@mui/material';
import Link from '@/@core/components/Link';
import LinkMUI from '@mui/material/Link';

const QueEsCuandoLlega = () => {
  return (
    <Container maxWidth="md" sx={{ py: 15 }}>
      <Stack spacing={5} alignItems="center"> 
        <Typography variant="h4" component="h1" color='primary' mb={10}>
          ¿Qué es Cuando Llega?
        </Typography>
        <Typography variant="body1" textAlign='justify'>
          "Cuando Llega" es una aplicación que te permite conocer en tiempo real los próximos arribos de los colectivos en la ciudad de Corrientes Capital. 
          Con esta aplicación, puedes planificar mejor tus viajes y reducir el tiempo de espera en las paradas.
        </Typography>
        <Typography variant="body1" textAlign='justify'>
          La aplicación utiliza datos en tiempo real proporcionados por los sistemas de transporte público para ofrecerte información precisa y actualizada sobre los horarios de llegada de los colectivos.
        </Typography>
        <Typography variant="body1" textAlign='justify'>
          Además, puedes buscar las paradas más cercanas a tu ubicación y obtener información detallada sobre las líneas de colectivos que pasan por cada parada.
        </Typography>
        <LinkMUI href="/" component={Link} underline="hover" variant="body1">
          Buscar proximo arribo
        </LinkMUI>  
      </Stack>
    </Container>
  );
};

export default QueEsCuandoLlega;
