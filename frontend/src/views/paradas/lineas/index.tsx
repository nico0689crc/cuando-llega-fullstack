import AnimatedCard from '@core/components/AnimatedCard'
import CustomAvatar from '@core/components/mui/Avatar'
import { LinesResponse } from '@/queries/types'
import { Grid2, Typography, IconButton } from '@mui/material'
import Link from 'next/link'

type ParadasLineProps = {
  data: LinesResponse
}

const ParadasLinesView = async ({ data }: ParadasLineProps) => {
  if (!data?.lines?.result && data?.lines?.statusCode !== 200) {
    return (
      <Typography variant='h5' color='error'>
        {data?.lines?.message}
      </Typography>
    )
  }

  if (!data?.lines?.result?.data?.length) {
    return (
      <Typography variant='h5' color='error'>
        No hay líneas disponibles
      </Typography>
    )
  }

  return (
    <Grid2 container spacing={5}>
      {data?.lines?.result?.data?.map((line: any, index: number) => (
        <Grid2 size={12} key={index}>
          <AnimatedCard index={index}>
            <CustomAvatar variant='rounded' skin='light' size={54} color='primary'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm2-8V5H5v7zm0 2H5v4h14zM6 15h4v2H6zm8 0h4v2h-4z'
                />
              </svg>
            </CustomAvatar>
            <Typography variant='h5' color='primary.main' className='flex-grow ml-5'>
              {line.description}
            </Typography>
            <Link href={`/paradas/lineas/${line.code}`} passHref>
              <IconButton color='primary' sx={{ borderColor: 'primary.main', border: 1 }}>
                <i className='ri-arrow-right-s-line' />
              </IconButton>
            </Link>
          </AnimatedCard>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default ParadasLinesView
