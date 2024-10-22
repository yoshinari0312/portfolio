import { Typography } from "@mui/material"

export const WorkTitle = ({children}) => {
  return (
    <Typography gutterBottom variant="h6" component="div" sx={{m:0}}>
      {children}
    </Typography>
  )
}
