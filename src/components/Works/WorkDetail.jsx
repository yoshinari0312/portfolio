export const WorkDetail = ({children}) => {
  return (
    <ul style={{margin:"0 0 0 0", fontSize:"14px"}}>
      {children.map((child) => {
        return <li>{child}</li>
      })}
    </ul>
  )
}
