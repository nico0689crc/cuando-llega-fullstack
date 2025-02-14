'use client'

import { Stack, Card } from '@mui/material'
import { motion } from 'framer-motion'

type AnimatedCardProps = {
  index: number
  children: React.ReactNode
}

const AnimatedCard = ({ index, children }: AnimatedCardProps) => {
  return (
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
        {children}
      </Stack>
    </motion.div>
  )
}

export default AnimatedCard
