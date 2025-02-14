// pages/404.tsx
import { Button, Container, Typography, Box, Stack } from '@mui/material'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <Stack sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h1' color='error' gutterBottom>
        404
      </Typography>
      <Typography variant='h4' color='textSecondary' gutterBottom>
        Linea no encontrada, por favor verifique la URL
      </Typography>
      <Typography variant='body1' color='textSecondary' paragraph>
        La página que buscas no existe o ha sido eliminada.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        LinkComponent={Link}
        href={`/paradas/lineas`}
        sx={{
          marginTop: 3,
          borderRadius: 2,
          padding: '10px 20px'
        }}
      >
        Regresar a la página principal
      </Button>
    </Stack>
  )
}

export default NotFoundPage
