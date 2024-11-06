export const SkillsIcon = ({imageUrl, name}) => {
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", padding:"0px", whiteSpace: 'pre-line'}}>
      <img src={imageUrl} alt={name} style={{height:"45px", width:"50px", objectFit: "contain" }} />
      <p style={{ fontSize: "15px", margin: "10px 0 0 0", textAlign: "center" }}>
        {name.split("\\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < name.split("\\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}
