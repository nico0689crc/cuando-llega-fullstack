'use client'

import AnimatedCard from '@core/components/AnimatedCard'
import CustomAvatar from '@core/components/mui/Avatar'
import { NextArrivalsResponse } from '@/queries/types'
import { Grid2, Typography, Stack, Button } from '@mui/material'
import Link from '@mui/material/Link'

type NextArrivalsViewProps = {
  data: NextArrivalsResponse
  lineCode: string
}

const NextArrivalsView = ({ data, lineCode }: NextArrivalsViewProps) => {
  return (
    <Stack direction='column' spacing={2} alignItems='flex-start' justifyContent='flex-start'>
      <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
        <Button
          variant='text'
          startIcon={<i className='ri-arrow-left-s-line' />}
          LinkComponent={Link}
          href={`/paradas/lineas/${lineCode}`}
        >
          Volver
        </Button>
      </Stack>
      <Typography variant='h3' sx={{ textAlign: 'center', width: '100%', p: 2, color: 'primary.main' }}>
        {data?.next_arrivals?.result && data?.next_arrivals?.result.length > 0
          ? `Próximos arribos a la parada ${data?.next_arrivals?.result[0].line_description}`
          : 'Próximos arribos a la parada'}
      </Typography>
      {data?.next_arrivals?.result && data?.next_arrivals?.result.length > 0 ? (
        <Grid2 container spacing={5} sx={{ width: '100%' }}>
          {data?.next_arrivals.result.map((arrival, index: number) => (
            <Grid2 size={12} key={index}>
              <AnimatedCard index={index}>
                <Stack
                  direction='row'
                  sx={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: 2,
                    paddingLeft: 5
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
                      {arrival.line_description}
                    </Typography>
                    <Typography variant='subtitle2' color='secondary.main'>
                      {arrival.flag_description}
                    </Typography>
                    <Typography variant='subtitle2' color='secondary.main'>
                      {arrival.arrival}
                    </Typography>
                  </Stack>
                </Stack>
              </AnimatedCard>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography variant='h5' color='error' sx={{ textAlign: 'center', width: '100%', p: 2 }}>
          No hay arribos próximos
        </Typography>
      )}
    </Stack>
  )
}

export default NextArrivalsView
