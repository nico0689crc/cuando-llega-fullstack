'use client'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <Stack sx={{ textAlign: 'center', justifyContent: 'center', mt: 4 }}>
      <Typography variant='h1' color='error'>
        ¡Ups!
      </Typography>
      <Typography variant='h5' color='text.secondary' gutterBottom>
        Algo salió mal...
      </Typography>
      <Typography variant='body1' color='text.secondary' paragraph>
        Parece que hubo un problema en la aplicación. Intenta refrescar la página o regresar al inicio.
      </Typography>
      <Stack direction={'column'}>
        <Button variant='contained' color='primary' onClick={reset} sx={{ mt: 2 }}>
          Reintentar
        </Button>
        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/' sx={{ mt: 2 }}>
          Ir al inicio
        </Button>
      </Stack>
    </Stack>
  )
}
