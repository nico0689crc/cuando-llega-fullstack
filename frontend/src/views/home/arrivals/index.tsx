import CustomAvatar from '@/@core/components/mui/Avatar'
import { Loading } from '@/components/Loading'
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'
import { useNextArrivals } from '@/queries'
import { NextArrivalType } from '@/queries/types'
import { Button, Card, Grid2, IconButton, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const Arrives = () => {
  const { selectedStop, setSelectedStop } = useStopProviderContext()

  if (!selectedStop) {
    return <Loading />
  }

  const { arrivals, isLoading, message, statusCode } = useNextArrivals({
    lineCode: selectedStop.lineCode,
    stopIdentifier: selectedStop.stop.identificator
  })

  if (!isLoading && !arrivals) {
    return <Loading />
  }

  if (statusCode !== 200) {
    return (
      <Stack alignItems='flex-start' justifyContent='flex-start' sx={{ height: '5rem' }}>
        <Button variant='text' startIcon={<i className='ri-arrow-left-s-line' />} onClick={() => setSelectedStop(null)}>
          Volver
        </Button>
        <Stack sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Typography variant='h3' color='primary.main'>
            {message}
          </Typography>
          <Typography variant='h5'>{`Linea: ${selectedStop.lineDescription}`}</Typography>
          <Typography variant='h5'>{`Parada: ${selectedStop.stop.description}`}</Typography>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack direction='column' spacing={5} alignItems='flex-start' justifyContent='flex-start'>
      <Button variant='text' startIcon={<i className='ri-arrow-left-s-line' />} onClick={() => setSelectedStop(null)}>
        Volver
      </Button>
      <Typography variant='h3' sx={{ textAlign: 'center', width: '100%', p: 2 }}>
        Proximos Arribos
      </Typography>
      <Typography variant='h5' color='primary.main'>{`Linea: ${selectedStop.lineDescription}`}</Typography>
      <Typography variant='subtitle1' color='primary.main'>{`Parada: ${selectedStop.stop.description}`}</Typography>
      <Grid2 container spacing={5} sx={{ width: '100%' }}>
        {arrivals?.map((stop: NextArrivalType, index: number) => {
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
                        d='M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM13 11h4v2h-6V6h2z'
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
                      {stop.line_description}
                    </Typography>
                    <Typography variant='subtitle2' color='secondary.main'>
                      {stop.flag_description}
                    </Typography>
                    <Typography variant='subtitle2' color='secondary.main'>
                      {stop.arrival}
                    </Typography>
                  </Stack>
                  <IconButton color='primary' sx={{ borderColor: 'primary.main', border: 1 }} onClick={() => {}}>
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

export default Arrives
