// MUI Imports
import Button from '@mui/material/Button'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@components/layout'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getSystemMode } from '@/@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import { Container } from '@mui/material'

export const metadata = {
  title: 'Cuando Llega Corrientes App',
  description:
    'Cuando Llega Corrientes App es una aplicación que te permite saber en tiempo real la ubicación de los colectivos de la ciudad de Corrientes.',
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
              <FrontLayout>
                <Container maxWidth='md' className='flex-auto flex flex-col'>
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
              </FrontLayout>
            </IntersectionProvider>
          </BlankLayout>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
