import { ChildrenType } from '@core/types'
import ParadasTabs from '@/components/paradas/ParadasTabs'
import { Stack } from '@mui/material'

const ParadasLayout = async ({ children }: ChildrenType) => {
  return (
    <Stack spacing={5}>
      <ParadasTabs />
      {children}
    </Stack>
  )
}

export default ParadasLayout
