import { Card } from "@mui/material"

export const WorkCard = ({children}) => {
  return (
    <Card sx={{ maxWidth: 400, flex: 1, display: 'flex', flexDirection: 'column' }}>
      {children}
    </Card>
  )
}
