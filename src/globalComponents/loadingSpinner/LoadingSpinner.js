import { useOutletContext } from "react-router-dom"
import "./LoadingSpinner.css"

function LoadingSpinner() {
  const {navHeight} = useOutletContext()
  
  const navBarHeight = {
    height: navHeight? window.innerHeight - navHeight : window.innerHeight - 77
  }

  return (
    <div className="loadingSpinner__container" style={navBarHeight} >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default LoadingSpinner