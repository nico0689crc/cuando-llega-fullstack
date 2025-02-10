import LinesContent from './LinesContent'
import StopsLines from './StopsLines'
import { AnimatePresence, motion } from 'framer-motion'
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'

type StopsType = {
  stopCode: string
  lineCode: string
  lineDescription: string
  abbreviationFlag: string
  expandedAbbreviationFlag: string
  abbreviationFlagGit: string
  position: string
}

const Lines = () => {
  const { selectedLine } = useStopProviderContext()

  return (
    <AnimatePresence mode='wait'>
      {selectedLine ? (
        <motion.div
          key='stops'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <StopsLines />
        </motion.div>
      ) : (
        <motion.div
          key='lines'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
        >
          <LinesContent />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lines
