export const WorkDetail = ({children}) => {
  return (
    <ul style={{margin:"6px 0 0 0", fontSize:"14px", paddingLeft:"20px"}}>
      {children.map((child) => {
        return <li>{child}</li>
      })}
    </ul>
  )
}
