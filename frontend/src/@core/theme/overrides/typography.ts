// MUI Imports
import type { Theme } from '@mui/material/styles'

const typography: Theme['components'] = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }) => ({
        marginBottom: theme.spacing(2)
      })
    }
  }
}

export default typography
