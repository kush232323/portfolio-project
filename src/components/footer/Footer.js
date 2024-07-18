import React from 'react'
import "./footer.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
<div className='footer-container'>
    <div className='left'>
<div className='location'>

<FaHome size={20} style={{color: 'white', marginRight: '2rem'}}/>
<div>
    <p>Bhootnath</p>
    <p>Patna</p>
</div>
</div>

<div className='phone'>
<h4>   
<FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/>
9199274438</h4>
</div>

<div className='email'>
<h4>   
<FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/>
kushhaina@gmail.com</h4>
</div>
    </div>


    <div className='right'>
      <h4> About the company</h4>  
      <p> "This is Kush Kumar, 
        a student at the College of Commerce, Arts & Science in Patna.
         I am passionate about taking on new projects and design challenges.
      </p>
    <div className='social'>
    <FaFacebook 
 size={30} 
 style={{color: 'white',
  marginRight: '1rem'}}
  />
   <FaTwitter 
 size={30} 
 style={{color: 'white',
  marginRight: '1rem'}}
  />
   <FaLinkedin
 size={30} 
 style={{color: 'white',
  marginRight: '1rem'}}
  />

</div>
    </div>
        
        </div>    
</div> 

  )
}

export default Footer