// MUI Imports
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@core/components/contexts/intersectionContext'

// Component Imports
import Providers from '@core/components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@core/components/layout'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Cuando Llega Corrientes App',
  description:
    'Cuando Llega Corrientes App es una aplicación que te permite saber en tiempo real la ubicación de los colectivos de la ciudad de Corrientes.'
}

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const systemMode = await getSystemMode()

  return (
    <html id='__next' suppressHydrationWarning>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        <Providers direction='ltr'>
          <BlankLayout systemMode={systemMode}>
            <IntersectionProvider>
              <FrontLayout>{children}</FrontLayout>
            </IntersectionProvider>
          </BlankLayout>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
