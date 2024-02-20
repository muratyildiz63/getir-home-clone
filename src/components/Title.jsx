
function Title({children,className}) {
  return (
    <div className={`text-sm font-semibold mb-3 md:md-5 ${className}`}>{children}</div>
  )
}

export default Title
