import { Card, Grid } from "@mui/material"
import { Children } from "react"
import { SkillsIcon } from "./SkillsIcon"

export const SkillsGroup = ({title, children, awsIcons}) => {
  return (
    <Card sx={{width:"95vw", backgroundColor:"white", display:"flex", flexDirection:"column", padding:"0 0 0 20px", marginBottom:"20px"}}>
      <p>{title}</p>
      <Grid container spacing={4} style={{display: 'flex', alignItems: 'stretch', flexDirection:"row", padding:"20px 40px 10px 40px"}}>
        {Children.map(children, (child, index) => {
          return <Grid item key={index} sm={1.2} xs={2} style={{ display: 'flex', alignItems:"center", justifyContent:"center", padding:"20px"}}>{child}</Grid>
        })}
        {/* AWS関連アイコンを表示する場合 */}
        {awsIcons && awsIcons.map((icon, index) => (
          <Grid item key={`aws-icon-${index}`} sm={1.2} xs={2} style={{ display: 'flex', alignItems:"center", justifyContent:"center", padding:"20px"}}>
            <SkillsIcon imageUrl={icon.imageUrl} name={icon.name} />
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}