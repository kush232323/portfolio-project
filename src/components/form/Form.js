import React from "react"
import './form.css'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Massage</label>
    <textarea rows="6" placeholder="Type Your message Here"/>
        <button className="btn">Summit</button>
    
 
        </form>
    </div>
  )
}

export default Form