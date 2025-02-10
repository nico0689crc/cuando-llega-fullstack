'use client'

// MUI Component Imports
import { Card, CardContent, Stack } from '@mui/material'

// Custom Component Imports
import Stops from './stops'
import Arrives from './arrivals'
import Steppers from './steppers'
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'

// Framer Motion Imports
import { AnimatePresence, motion } from 'framer-motion'

const HomePageWrapper = () => {
  const { isNextArrivesStepsActive } = useStopProviderContext()

  return (
    <Stack spacing={10} direction='column' className='mt-5'>
      <Steppers />
      <Card sx={{ borderRadius: 1.5 }} className='flex-grow'>
        <CardContent className='flex flex-col min-h-96'>
          <AnimatePresence mode='wait'>
            {!isNextArrivesStepsActive ? (
              <motion.div
                key='stops_step'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Stops />
              </motion.div>
            ) : (
              <motion.div
                key='arrives_step'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <Arrives />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default HomePageWrapper
