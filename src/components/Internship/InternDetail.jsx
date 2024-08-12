export const InternDetail = ({children}) => {
  return (
    <ul style={{paddingLeft:"0", margin:"0 0 0 0", fontSize:"15px"}}>
      {children.map((child) => {
        return <li style={{listStyle:"none"}}>ー {child}</li>
      })}
    </ul>
  )
}
