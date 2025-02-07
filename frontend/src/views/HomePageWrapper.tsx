'use client'

// React Imports
import { useEffect, useState } from 'react'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import { useSettings } from '@core/hooks/useSettings'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid2, Stack, Step, StepLabel, Stepper, Tab, TextField, Typography } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import StepperWrapper from '@/@core/styles/stepper'
import StepperCustomDot from '@/components/stepper-dot'

// Vars
const steps = [
  {
    title: 'Paradas',
  },
  {
    title: 'Arribos',
  }
]

const HomePageWrapper = ({ mode }: { mode: Mode }) => {
  const [activeStep, setActiveStep] = useState(0)

  const [tabValue, setTabValue] = useState('1')

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(() => newValue)
  }
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack spacing={10} direction='column' className='mt-5'>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label.title}>
                <StepLabel
                  slots={{
                    stepIcon: StepperCustomDot
                  }}
                >
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title' color='text.primary'>
                        {label.title}
                      </Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ borderRadius: 1.5 }}>
        <CardContent>
          <TabContext value={tabValue}>
            <TabList variant="fullWidth" onChange={handleTabChange}>
              <Tab label='Por Calles' value='1' />
              <Tab label='Por Lineas' value='2' />
            </TabList>
            <TabPanel value='1' sx={{ my: 5 }}>
              <Stack spacing={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button variant='contained' color='primary' className='flex items-center justify-center gap-2'>
                  <i className='ri-map-pin-line' />
                  Cercanas a mi ubicación
                </Button>
                <Divider sx={{ width: '100%' }} textAlign="left" />
                <Typography variant="h6">O Busca Por Calle</Typography>
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', width: '100%' }} gap={4}>
                  <TextField label='Buscar por calle' variant='outlined' fullWidth />
                  <Button variant='contained' color='primary' className='flex items-center justify-center mt-0'>
                    <i className='ri-search-line' />
                  </Button>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value='2'>
              <Typography variant='body1'>Por Lineas</Typography>
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default HomePageWrapper
