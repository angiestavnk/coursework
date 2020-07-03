import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
  const [showButton, setShowButton] = React.useState(true)
  React.useEffect(() => {
    if(localStorage.token) {
      setShowButton(false)
    }
}, [])
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Universal Helper</h1>
            <p className="lead">
            Learn statistics. Control the light and fan. Create comfort Conditions.
            </p>
            <div className="buttons" style={{visibility: showButton ? "visible" : "hidden"}}>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Landing;