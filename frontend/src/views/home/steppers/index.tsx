// Importing necessary components from MUI
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

// Importing custom components and styles
import StepperWrapper from '@/@core/styles/stepper'
import StepperCustomDot from '@/components/stepper-dot'

// Importing context hooks
import { useStopProviderContext } from '@/contexts/lines-stops-context/LinesStopsContext'

// Defining the steps for the stepper
const steps = ['Paradas', 'Arribos']

const Steppers = () => {
  const { isNextArrivesStepsActive } = useStopProviderContext()

  return (
    <StepperWrapper>
      <Stepper activeStep={isNextArrivesStepsActive ? 1 : 0} alternativeLabel>
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

export default Steppers
