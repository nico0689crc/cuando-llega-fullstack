'use client'

// Importing necessary components from MUI
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

// Importing custom components and styles
import StepperWrapper from '@core/components/steppers/styles/stepper'
import StepperCustomDot from '@core/components/stepper-dot'

// Defining the steps for the stepper
const steps = ['Paradas', 'Arribos']

type StepperComponentProps = {
  path: string
}

const StepperComponent = ({ path }: StepperComponentProps) => {
  const activeStep = path.startsWith('/paradas') ? 0 : 1

  return (
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
  )
}

export default StepperComponent
