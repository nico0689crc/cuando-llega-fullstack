'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLines } from '@/queries'
import { LineType, StopType } from '@/queries/types'

type LinesStopsContextType = {
  lines: LineType[] | null
  stops: StopType[] | null
  selectedLine: LineType | null
  selectedStop: StopType | null
  isLoadingLines: boolean
  isNextArrivesStepsActive: boolean
  setSelectedLine: (code: string | null) => void
  setSelectedStop: (code: string | null) => void
}

export const LinesStopsContext = createContext<LinesStopsContextType>({
  lines: null,
  stops: null,
  selectedLine: null,
  selectedStop: null,
  isLoadingLines: false,
  isNextArrivesStepsActive: false,
  setSelectedLine: () => {},
  setSelectedStop: () => {}
})

export const LinesStopsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: lines, isLoading: isLoadingLines } = useLines({ page: 1, pageSize: 40 })
  const [selectedLine, _setSelectedLine] = useState<LineType | null>(null)
  const [selectedStop, _setSelectedStop] = useState<StopType | null>(null)

  const setSelectedLine = useCallback(
    (code: string | null) => {
      _setSelectedLine(() => lines?.find(line => line.code === code) ?? null)
      if (code === null) {
        _setSelectedStop(() => null)
      }
    },
    [lines]
  )

  const setSelectedStop = useCallback(
    (code: string | null) => {
      _setSelectedStop(() => selectedLine?.stops.find(stop => stop.stopCode === code) ?? null)
    },
    [selectedLine]
  )

  const values = useMemo(
    () => ({
      lines,
      stops: selectedLine ? selectedLine.stops : null,
      selectedLine,
      selectedStop,
      isLoadingLines,
      isNextArrivesStepsActive: !!selectedLine && !!selectedStop,
      setSelectedLine,
      setSelectedStop
    }),
    [lines, isLoadingLines, selectedLine, selectedStop]
  )

  return <LinesStopsContext.Provider value={values}>{children}</LinesStopsContext.Provider>
}

export const useStopProviderContext = () => {
  const context = useContext(LinesStopsContext)

  if (context === undefined) {
    throw new Error('useStopProviderContext must be used within a StopProvider')
  }
  return context
}
