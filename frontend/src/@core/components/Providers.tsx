// Type Imports
import type { ChildrenType, Direction } from '@core/types'

// Context Importss
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@core/components/theme'

// Util Imports
import { getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'
import { ApolloWrapper } from '@/queries/client'

type Props = ChildrenType & {
  direction: Direction
}

const Providers = async (props: Props) => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = await getMode()
  const settingsCookie = await getSettingsFromCookie()
  const systemMode = await getSystemMode()

  return (
    <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
      <ThemeProvider direction={direction} systemMode={systemMode}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </ThemeProvider>
    </SettingsProvider>
  )
}

export default Providers
