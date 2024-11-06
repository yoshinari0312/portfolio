import { Box } from "@mui/material"

export const AboutOutline = ({children}) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div>
      {childrenArray.map((outline, index) => {
        return <Box key={index} sx={{fontSize: "14px", marginTop: "6px"}}>{outline}</Box>
      })}
    </div>
  )
}
