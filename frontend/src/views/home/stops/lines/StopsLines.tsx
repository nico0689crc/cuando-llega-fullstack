import CustomAvatar from '@/@core/components/mui/Avatar'
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'
import { StopType } from '@/queries/types'
import { Button, Card, Grid2, IconButton, Link, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const StopsLines = () => {
  const { setSelectedLine, setSelectedStop, stops, selectedLine } = useStopProviderContext()

  return (
    <Stack direction='column' spacing={2} alignItems='flex-start' justifyContent='flex-start'>
      <Button variant='text' startIcon={<i className='ri-arrow-left-s-line' />} onClick={() => setSelectedLine(null)}>
        Volver
      </Button>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center', width: '100%', p: 2 }}
      >{`Paradas de Linea: ${selectedLine?.description}`}</Typography>
      <Grid2 container spacing={5}>
        {stops?.map((stop: StopType, index: number) => {
          return (
            <Grid2 size={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{ width: '100%' }}
              >
                <Stack
                  direction='row'
                  spacing={2}
                  alignItems='center'
                  justifyContent='start'
                  component={Card}
                  sx={{
                    border: 1,
                    borderColor: 'primary.main',
                    padding: 4
                  }}
                >
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
                  <IconButton
                    color='primary'
                    sx={{ borderColor: 'primary.main', border: 1 }}
                    onClick={() => setSelectedStop(stop.stopCode)}
                  >
                    <i className='ri-arrow-right-s-line' />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid2>
          )
        })}
      </Grid2>
    </Stack>
  )
}

export default StopsLines
