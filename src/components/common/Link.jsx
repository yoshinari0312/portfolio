export const Link = ({children, url}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">{children}</a>
  )
}