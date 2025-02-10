// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Header from '@components/layout/Header'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Third-party Imports
import classNames from 'classnames'

const FrontLayout = async ({ children }: ChildrenType) => {
  // Vars
  const mode = await getServerMode()

  return (
    <div className={classNames(frontLayoutClasses.root, 'flex flex-col min-h-screen mb-10')}>
      <Header mode={mode} />
      {children}
    </div>
  )
}

export default FrontLayout
