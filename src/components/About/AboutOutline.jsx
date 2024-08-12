import { Box } from "@mui/material"

export const AboutOutline = ({children}) => {
  return (
    <div>
      {children.map((outline) => {
        return <Box sx={{fontSize: "14px", marginTop: "6px"}}>{outline}</Box>
      })}
    </div>
  )
}
