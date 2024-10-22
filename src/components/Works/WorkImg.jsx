import { CardMedia } from "@mui/material"

export const WorkImg = ({image, alt}) => {
  return (
    <CardMedia
      component="img"
      width="100"
      image={image}
      alt={alt}
    />
  )
}
