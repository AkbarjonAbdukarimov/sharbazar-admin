import { Box, CircularProgress } from '@mui/material'

export default function ListLoading() {
  return (
    <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
  )
}
