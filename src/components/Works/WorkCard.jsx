import { Card } from "@mui/material"

export const WorkCard = ({children}) => {
  return (
    <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {children}
    </Card>
  )
}
