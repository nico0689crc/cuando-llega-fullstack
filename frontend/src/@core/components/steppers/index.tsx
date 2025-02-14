import { cookies } from 'next/headers'
import StepperComponent from './components/stepper'

const Steppers = async () => {
  const cookiesList = await cookies()
  const path = cookiesList.get('current_path')?.value || '/'

  return <StepperComponent path={path} />
}

export default Steppers
