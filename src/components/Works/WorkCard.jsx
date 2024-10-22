import { Card, CardActionArea } from "@mui/material"

export const WorkCard = ({children}) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      {children}
    </Card>
  )
}
