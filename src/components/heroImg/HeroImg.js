import React from "react"
import "./heroImg.css"
import { Link } from "react-router-dom"
 
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
<img className="into-img" src="https://images.unsplash.com/photo-1608403890614-ec62cb35b46e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
alt="introImg"/>
        </div>
<div className="content">
    <p>hi. i'm a freelancer.</p>
<h1> React Developer.</h1>
<div>
    <Link to='/project'
    className="btn">Projects</Link>
       <Link to='/contact'
    className="btn btn-light">CONTACTS</Link>
</div>
</div>
    </div>
  )
}

export default HeroImg