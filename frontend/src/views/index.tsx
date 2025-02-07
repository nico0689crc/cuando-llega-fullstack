'use client'

// React Imports
import { useState } from 'react'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import { Button, Card, CardContent, Divider, Stack, Step, StepLabel, Stepper, Tab, TextField, Typography } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import StepperWrapper from '@/@core/styles/stepper'
import StepperCustomDot from '@/components/stepper-dot'
import { TypedDocumentNode, gql, useSuspenseQuery } from "@apollo/client";
import { ApolloClientProvider } from '@/lib/ApoloClientProvider'
//    next_arrivals(stopIdentifier: "CT31945", lineCode: "352") {
export const getArribosC: TypedDocumentNode<
  {
    next_arrivals: {
      message: string;
      statusCode: number;
      result: Array<{
        line_description: string;
        flag_description: string;
        arrival: string;
        latitude: number;
        longitude: number;
        stop_latitude: number;
        stop_longitude: number;
        short_flag_description: string;
        flag_sign_description: string;
        is_adapted: boolean;
        car_identifier: string;
        driver_identifier: string;
        schedule_deviation: string;
        last_gps_date: string;
        error_message: string;
        stop_line_code: string;
        position: string;
      }>;
    }
  },
  {
    stopIdentifier: string;
    lineCode: string;
  }
> = gql`
query Next_arrivals {
    next_arrivals(stopIdentifier: "CT31945", lineCode: "352") {
        message
        statusCode
        result {
            line_description
            flag_description
            arrival
            latitude
            longitude
            stop_latitude
            stop_longitude
            short_flag_description
            flag_sign_description
            is_adapted
            car_identifier
            driver_identifier
            schedule_deviation
            last_gps_date
            error_message
            stop_line_code
            position
        }
    }
}
`;

export const getArribosA: TypedDocumentNode<
  {
    next_arrivals: {
      message: string;
      statusCode: number;
      result: Array<{
        line_description: string;
        flag_description: string;
        arrival: string;
        latitude: number;
        longitude: number;
        stop_latitude: number;
        stop_longitude: number;
        short_flag_description: string;
        flag_sign_description: string;
        is_adapted: boolean;
        car_identifier: string;
        driver_identifier: string;
        schedule_deviation: string;
        last_gps_date: string;
        error_message: string;
        stop_line_code: string;
        position: string;
      }>;
    }
  },
  {
    stopIdentifier: string;
    lineCode: string;
  }
> = gql`
query Next_arrivals {
    next_arrivals(stopIdentifier: "CT31945", lineCode: "350") {
        message
        statusCode
        result {
            line_description
            flag_description
            arrival
            latitude
            longitude
            stop_latitude
            stop_longitude
            short_flag_description
            flag_sign_description
            is_adapted
            car_identifier
            driver_identifier
            schedule_deviation
            last_gps_date
            error_message
            stop_line_code
            position
        }
    }
}
`;


export const getArribosCaPuerto: TypedDocumentNode<
  {
    next_arrivals: {
      message: string;
      statusCode: number;
      result: Array<{
        line_description: string;
        flag_description: string;
        arrival: string;
        latitude: number;
        longitude: number;
        stop_latitude: number;
        stop_longitude: number;
        short_flag_description: string;
        flag_sign_description: string;
        is_adapted: boolean;
        car_identifier: string;
        driver_identifier: string;
        schedule_deviation: string;
        last_gps_date: string;
        error_message: string;
        stop_line_code: string;
        position: string;
      }>;
    }
  },
  {
    stopIdentifier: string;
    lineCode: string;
  }
> = gql`
query Next_arrivals {
    next_arrivals(stopIdentifier: "CT47873", lineCode: "352") {
        message
        statusCode
        result {
            line_description
            flag_description
            arrival
            latitude
            longitude
            stop_latitude
            stop_longitude
            short_flag_description
            flag_sign_description
            is_adapted
            car_identifier
            driver_identifier
            schedule_deviation
            last_gps_date
            error_message
            stop_line_code
            position
        }
    }
}
`;

export const getArribosAaPuerto: TypedDocumentNode<
  {
    next_arrivals: {
      message: string;
      statusCode: number;
      result: Array<{
        line_description: string;
        flag_description: string;
        arrival: string;
        latitude: number;
        longitude: number;
        stop_latitude: number;
        stop_longitude: number;
        short_flag_description: string;
        flag_sign_description: string;
        is_adapted: boolean;
        car_identifier: string;
        driver_identifier: string;
        schedule_deviation: string;
        last_gps_date: string;
        error_message: string;
        stop_line_code: string;
        position: string;
      }>;
    }
  },
  {
    stopIdentifier: string;
    lineCode: string;
  }
> = gql`
query Next_arrivals {
    next_arrivals(stopIdentifier: "CT31886", lineCode: "350") {
        message
        statusCode
        result {
            line_description
            flag_description
            arrival
            latitude
            longitude
            stop_latitude
            stop_longitude
            short_flag_description
            flag_sign_description
            is_adapted
            car_identifier
            driver_identifier
            schedule_deviation
            last_gps_date
            error_message
            stop_line_code
            position
        }
    }
}
`;



// Vars
const steps = [ 'Paradas', 'Arribos' ]

const Home = ({ mode }: { mode: Mode }) => {
  const [activeStep, setActiveStep] = useState(0)

  const [tabValue, setTabValue] = useState('1')

  const { data: data106C } = useSuspenseQuery(getArribosC, {
    context: {
      fetchOptions: {
        cache: "no-store"
      }
    }
  });

  const { data: data106A } = useSuspenseQuery(getArribosA, {
    context: {
      fetchOptions: {
        cache: "no-store"
      }
    }
  });


  const { data: data106CaPuerto } = useSuspenseQuery(getArribosCaPuerto, {
    context: {
      fetchOptions: {
        cache: "no-store"
      }
    }
  });

  const { data: data106AaPuerto } = useSuspenseQuery(getArribosAaPuerto, {
    context: {
      fetchOptions: {
        cache: "no-store"
      }
    }
  });

  // const { data: data106A } = useSuspenseQuery(getArribos, {
  //   context: {
  //     fetchOptions: {
  //       cache: "no-store"
  //     }
  //   },
  //   variables: {
  //     stopIdentifier: "CT31945", 
  //     lineCode: "350"
  //   }
  // });

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(() => newValue)
  }

  return (
    
      <Stack spacing={10} direction='column' className='mt-5'>
        <StepperWrapper>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel
                    slots={{
                      stepIcon: StepperCustomDot
                    }}
                  >
                    <div className='step-label'>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {label}
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
                {/* <Tab label='Por Calles' value='1' /> */}
                <Tab label='Por Lineas' value='1' />
                <Tab label='Por Lineas' value='2' />
                <Tab label='Por Lineas' value='3' />
                <Tab label='Por Lineas' value='4' />
              </TabList>
              {/* <TabPanel value='1' sx={{ my: 5 }}>
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
              </TabPanel>*/}
              <TabPanel value='1'>
                {data106CaPuerto?.next_arrivals?.result && data106CaPuerto?.next_arrivals?.result.map((rocket, index) => (  
                  <Stack spacing={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h6'>{rocket.line_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.flag_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.arrival}</Typography>
                    <a href={rocket.position} target='_blank' rel='noreferrer'>Ver mapa</a>
                    <Divider sx={{ width: '100%' }} textAlign="left" />
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel value='2'>
                {data106AaPuerto?.next_arrivals?.result && data106AaPuerto?.next_arrivals?.result.map((rocket, index) => (  
                  <Stack spacing={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h6'>{rocket.line_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.flag_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.arrival}</Typography>
                    <a href={rocket.position} target='_blank' rel='noreferrer'>Ver mapa</a>
                    <Divider sx={{ width: '100%' }} textAlign="left" />
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel value='3'>
                {data106C?.next_arrivals?.result && data106C?.next_arrivals?.result.map((rocket, index) => (  
                  <Stack spacing={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h6'>{rocket.line_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.flag_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.arrival}</Typography>
                    <a href={rocket.position} target='_blank' rel='noreferrer'>Ver mapa</a>
                    <Divider sx={{ width: '100%' }} textAlign="left" />
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel value='4'>
                {data106A?.next_arrivals?.result && data106A?.next_arrivals?.result.map((rocket, index) => (  
                  <Stack spacing={2} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h6'>{rocket.line_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.flag_description}</Typography>
                    <Typography variant='subtitle1'>{rocket.arrival}</Typography>
                    <a href={rocket.position} target='_blank' rel='noreferrer'>Ver mapa</a>
                    <Divider sx={{ width: '100%' }} textAlign="left" />
                  </Stack>
                ))}
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Stack>
  )
}


export const HomePageWrapper = (  { mode }: { mode: Mode }  ) => {
  return (
    <ApolloClientProvider>
      <Home mode={mode} />
    </ApolloClientProvider>
  )
}

export default HomePageWrapper
