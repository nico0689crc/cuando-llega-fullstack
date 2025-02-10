import { Stack, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100%',
        minHeight: '5rem'
      }}
      direction='column'
    >
      <CircularProgress />
    </Stack>
  )
}
