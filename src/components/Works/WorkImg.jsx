export const WorkImg = ({src, alt, children}) => {
  return (
    <div style={{position:"relative"}}>
      <img src={src} alt={alt} style={{width:"100px", height:"auto"}}/>
      <p style={{position:"absolute", bottom:"10px", left:"10px", fontWeight:"bold"}}>{children}</p>
    </div>
  )
}
