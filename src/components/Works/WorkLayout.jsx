import { Box, Grid } from "@mui/material"
import { Children } from "react"

export const WorkLayout = ({children}) => {
  return (
    <Box sx={{mx:6, mt:2}}>
      <Grid container spacing={4} style={{display: 'flex', alignItems: 'stretch'}}>
        {Children.map(children, (child) => {
          return <Grid item lg={4} sm={6} xs={12} style={{ display: 'flex' }}>{child}</Grid>
        })}
      </Grid>
    </Box>
  )
}
