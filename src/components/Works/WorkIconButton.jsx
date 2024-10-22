import { Button } from '@mui/material'

export const WorkIconButton = ({href, char, color, children}) => {
  return (
    <Button href={href}>
      {children}
      <p style={{color:color, margin:"0 0 0 5px "}}>{char}</p>
    </Button>
  )
}
