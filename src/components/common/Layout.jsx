export const Layout = ({id, children}) => {
  return (
    <section>
      <div id={id}>
        {children}
      </div>
    </section>
  )
}
