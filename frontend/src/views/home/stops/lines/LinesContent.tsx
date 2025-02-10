// Custom components
import CustomAvatar from '@/@core/components/mui/Avatar'
import { Loading } from '@/components/Loading'
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'

// MUI components
import { Card, Grid2, IconButton, Stack, Typography } from '@mui/material'

// Animation library
import { motion } from 'framer-motion'

const LinesContent = () => {
  const { isLoadingLines, lines, setSelectedLine } = useStopProviderContext()

  if (isLoadingLines) {
    ;<Loading />
  }

  return (
    <Grid2 container spacing={5}>
      {lines?.map((line: any, index: number) => {
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
                      d='M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm2-8V5H5v7zm0 2H5v4h14zM6 15h4v2H6zm8 0h4v2h-4z'
                    />
                  </svg>
                </CustomAvatar>
                <Typography variant='h5' color='primary.main' className='flex-grow ml-5'>
                  {line.description}
                </Typography>
                <IconButton
                  color='primary'
                  sx={{ borderColor: 'primary.main', border: 1 }}
                  onClick={() => setSelectedLine(line.code)}
                >
                  <i className='ri-arrow-right-s-line' />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid2>
        )
      })}
    </Grid2>
  )
}
export default LinesContent
