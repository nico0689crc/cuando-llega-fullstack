'use client'

// MUI Imports
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Typography } from '@mui/material'
import LinkMUI from '@mui/material/Link'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import ModeDropdown from '@core/components/layout/shared/ModeDropdown'
import Link from '@core/components/Link'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

const Header = ({ mode }: { mode: Mode }) => {
  // Detect window scroll
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  })

  return (
    <header className={classnames(frontLayoutClasses.header, styles.header)}>
      <div className={classnames(
        frontLayoutClasses.navbar, 
        styles.navbar, 
        { [styles.headerScrolled]: trigger },
        'flex items-center justify-between p-4'
      )}>
        <LinkMUI href="/" component={Link} variant='h4' color='primary' underline='none'>
          Cuándo Llega
        </LinkMUI>  
        <div className={classnames(frontLayoutClasses.navbarContent, styles.navbarContent)}>
          <LinkMUI href="/que-es-cuando-llega" component={Link} underline="hover">
            ¿Qué es Cuándo Llega?
          </LinkMUI>  
          <ModeDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
