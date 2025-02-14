'use client'

import AnimatedCard from '@core/components/AnimatedCard'
import CustomAvatar from '@core/components/mui/Avatar'
import { LineResponse } from '@/queries/types'
import { Grid2, Typography, IconButton, Stack, Button, FormControlLabel, Switch } from '@mui/material'
import Link from '@mui/material/Link'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

const FAVORITOS_COOKIE_KEY = 'CuandoLlegaFavoritos'

type Favorito = {
  [lineaCode: string]: string[]
}

type ParadasLineaProps = {
  data: LineResponse
}

const ParadasLineaView = ({
  data: {
    line: { result }
  }
}: ParadasLineaProps) => {
  const [favorites, setFavorites] = useState<Favorito>({})
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    const storedFavorites = Cookies.get(FAVORITOS_COOKIE_KEY)

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const toggleFavorite = (stopIdentifier: string) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = { ...prevFavorites }

      if (!result?.data?.code) return updatedFavorites

      // Si la parada ya está marcada como favorita, la eliminamos
      if (updatedFavorites[result?.data?.code]?.includes(stopIdentifier)) {
        updatedFavorites[result?.data?.code] = updatedFavorites[result?.data?.code].filter(id => id !== stopIdentifier)
        if (updatedFavorites[result?.data?.code].length === 0) {
          delete updatedFavorites[result?.data?.code]
        }
      } else {
        // Si no está marcada, la agregamos
        updatedFavorites[result?.data?.code] = updatedFavorites[result?.data?.code]
          ? [...updatedFavorites[result?.data?.code], stopIdentifier]
          : [stopIdentifier]
      }

      // Guardamos los favoritos actualizados en las cookies
      Cookies.set(FAVORITOS_COOKIE_KEY, JSON.stringify(updatedFavorites), { expires: 365 })

      return updatedFavorites
    })
  }

  // Filtrar las líneas de parada solo si el toggle de favoritos está activado
  const displayedLines = showFavorites
    ? result?.data?.stopLines?.filter(line => favorites[result?.data?.code]?.includes(line.stopCode))
    : result?.data?.stopLines

  return (
    <Stack direction='column' spacing={2} alignItems='flex-start' justifyContent='flex-start'>
      <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
        <Button
          variant='text'
          startIcon={<i className='ri-arrow-left-s-line' />}
          LinkComponent={Link}
          href='/paradas/lineas'
        >
          Volver
        </Button>
        <FormControlLabel
          control={<Switch checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />}
          label='Favoritos'
        />
      </Stack>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', width: '100%', p: 2 }}
      >{`Paradas de Linea: ${result?.data?.description}`}</Typography>
      {displayedLines?.length && displayedLines?.length > 0 ? (
        <Grid2 container spacing={5} sx={{ width: '100%' }}>
          {displayedLines?.map((stop, index: number) => (
            <Grid2 size={12} key={index}>
              <AnimatedCard index={index}>
                <CustomAvatar variant='rounded' skin='light' size={54} color='primary'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8l3-3l-3-3H5v6z'
                    />
                  </svg>
                </CustomAvatar>
                <Stack
                  direction='column'
                  sx={{
                    flexGrow: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    rowGap: 2,
                    paddingLeft: 5
                  }}
                >
                  <Typography variant='subtitle1' color='primary.main'>
                    {stop.stop.description}
                  </Typography>
                  <Typography variant='subtitle2' color='secondary.main'>
                    {stop.abbreviationFlag}
                  </Typography>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${stop.stop.lat},${stop.stop.lng}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Ver en Mapa
                  </Link>
                </Stack>
                <Stack>
                  <IconButton
                    color={favorites[result?.data?.code!]?.includes(stop.stopCode) ? 'primary' : 'default'}
                    onClick={() => toggleFavorite(stop.stopCode)}
                  >
                    {favorites[result?.data?.code!]?.includes(stop.stopCode) ? (
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path
                          fill='#ffea00'
                          d='M12.865 2.996a1 1 0 0 0-1.73 0L8.421 7.674a1.25 1.25 0 0 1-.894.608L2.44 9.05c-.854.13-1.154 1.208-.488 1.76l3.789 3.138c.35.291.515.75.43 1.197L5.18 20.35a1 1 0 0 0 1.448 1.072l4.79-2.522a1.25 1.25 0 0 1 1.164 0l4.79 2.522a1 1 0 0 0 1.448-1.072l-.991-5.205a1.25 1.25 0 0 1 .43-1.197l3.79-3.139c.665-.55.365-1.63-.49-1.759l-5.085-.768a1.25 1.25 0 0 1-.895-.608z'
                        />
                      </svg>
                    ) : (
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M10.486 4.114c.675-1.162 2.353-1.162 3.028 0l2.065 3.56c.19.328.52.551.895.608l3.43.518c1.494.226 2.018 2.114.854 3.078l-2.499 2.07a1.25 1.25 0 0 0-.43 1.197l.7 3.676c.274 1.44-1.238 2.558-2.535 1.876L12.582 18.9a1.25 1.25 0 0 0-1.164 0l-3.412 1.797c-1.297.683-2.809-.436-2.535-1.876l.7-3.676a1.25 1.25 0 0 0-.43-1.197l-2.5-2.07c-1.163-.964-.64-2.852.856-3.078l3.43-.518a1.25 1.25 0 0 0 .894-.609zm1.73.753a.25.25 0 0 0-.432 0l-2.066 3.56a2.75 2.75 0 0 1-1.967 1.338l-3.43.518a.25.25 0 0 0-.122.44l2.499 2.07a2.75 2.75 0 0 1 .947 2.632l-.7 3.676a.25.25 0 0 0 .362.268l3.412-1.796a2.75 2.75 0 0 1 2.562 0l3.412 1.796a.25.25 0 0 0 .362-.268l-.7-3.676a2.75 2.75 0 0 1 .947-2.632l2.5-2.07a.25.25 0 0 0-.123-.44l-3.43-.518a2.75 2.75 0 0 1-1.967-1.339z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </IconButton>
                  <IconButton
                    color='primary'
                    sx={{ borderColor: 'primary.main', border: 1 }}
                    LinkComponent={Link}
                    href={`/arribos/linea/${result?.data?.code}/parada/${stop.stop.identificator}`}
                  >
                    <i className='ri-arrow-right-s-line' />
                  </IconButton>
                </Stack>
              </AnimatedCard>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography variant='h5' color='primary.main' sx={{ textAlign: 'center', width: '100%', p: 2 }}>
          No hay paradas disponibles
        </Typography>
      )}
    </Stack>
  )
}

export default ParadasLineaView
