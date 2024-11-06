import { Children } from "react"

export const SkillsLayout = ({children}) => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
      {Children.map(children, (child, index) => {
        return <div key={index}>{child}</div>
      })}
    </div>
  )
}
