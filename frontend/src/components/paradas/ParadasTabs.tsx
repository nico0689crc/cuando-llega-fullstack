'use client'

import { Tabs, Tab } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'

const tabs = [
  { label: 'Calles', path: '/paradas/calles' },
  { label: 'Lineas', path: '/paradas/lineas' }
]

const ParadasTabs = () => {
  const router = useRouter()
  const path = usePathname()

  const currentTab = tabs.findIndex(tab => path.startsWith(tab.path))

  const handleChange = (_event: React.SyntheticEvent, newIndex: number) => {
    router.push(tabs[newIndex].path)
  }

  return (
    <Tabs value={currentTab} onChange={handleChange} aria-label='Navigation Tabs'>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} />
      ))}
    </Tabs>
  )
}

export default ParadasTabs
