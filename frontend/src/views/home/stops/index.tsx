// React imports
import { useState } from 'react'

// MUI imports
import { Tab, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

// Local imports
import Lines from './lines'
import TabPanel from './components/TabPanel'

const Stops = () => {
  const [tabValue, setTabValue] = useState('1')

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(() => newValue)
  }

  return (
    <TabContext value={tabValue}>
      <TabList variant='fullWidth' onChange={handleTabChange}>
        <Tab label='Por Paradas' value='1' />
        <Tab label='Por Lineas' value='2' />
      </TabList>
      <TabPanel value='1'>
        <Typography variant='h5' gutterBottom>
          Paradas
        </Typography>
      </TabPanel>
      <TabPanel value='2'>
        <Lines />
      </TabPanel>
    </TabContext>
  )
}

export default Stops
