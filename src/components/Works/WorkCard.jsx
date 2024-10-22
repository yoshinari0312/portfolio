import { Card } from "@mui/material"

export const WorkCard = ({children}) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      {children}
    </Card>
  )
}
