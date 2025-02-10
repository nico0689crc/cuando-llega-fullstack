import { ChildrenType } from '@/@core/types'
import { TabPanel as TabPanelMUI } from '@mui/lab'
import classNames from 'classnames'

type TabPanelProps = ChildrenType & {
  value: string
  className?: string
}

const TabPanel = ({ children, value, className }: TabPanelProps) => {
  return (
    <TabPanelMUI value={value} className={classNames('flex flex-col justify-center', className)}>
      {children}
    </TabPanelMUI>
  )
}

export default TabPanel
