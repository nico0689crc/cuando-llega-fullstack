// Type Imports
import type { ChildrenType } from '@core/types'

// Third-party Imports
import classNames from 'classnames'
import { Button, Container } from '@mui/material'

// Component Imports
import Header from '@core/components/layout/Header'
import ScrollToTop from '../scroll-to-top'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = async ({ children }: ChildrenType) => {
  // Vars
  const mode = await getServerMode()

  return (
    <div className={classNames(frontLayoutClasses.root, 'flex flex-col min-h-screen mb-10')}>
      <Header mode={mode} />
      <Container maxWidth='md' className='flex flex-col gap-10'>
        {children}
        <ScrollToTop className='mui-fixed'>
          <Button
            variant='contained'
            className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
          >
            <i className='ri-arrow-up-line' />
          </Button>
        </ScrollToTop>
      </Container>
    </div>
  )
}

export default FrontLayout
