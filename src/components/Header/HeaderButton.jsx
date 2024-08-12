import { Button } from "@mui/material"

export const HeaderButton = ({href, children}) => {
  return (
    <div>
      <Button key={children} href={href} sx={{ color: '#fff', fontSize: '16px'}}>
        {children}
      </Button>
    </div>
  )
}
