import { Box } from "@mui/material"

export const AboutSchool = ({color, children}) => {
  return (
    <div>
      <Box sx={{color:{color}}}>{children}</Box>
    </div>
  )
}
