
function Title({children,className}) {
    return (
      <div className={`text-lg text-primary my-3 ${className ? className : ""}`}>{children}</div>
    )
  }
  
  export default Title
  