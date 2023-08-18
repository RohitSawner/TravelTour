import React from 'react'
//import { Link } from 'react-router-dom'
import{FaWhatsappSquare,FaLinkedin,FaInstagram,FaGithub, FaTelegram} from "react-icons/fa"
const Footers = () => {
  return (

<div className="bg-dark text-center text-white">

  <div className="container p-4">

    <div className="mb-4">
      
    <a class="btn btn-outline-light" href="/"
        >{<FaWhatsappSquare size={20} style={{color:"#fff", marginRight:"0.1rem"}}/>}
      </a>
      <a class="btn btn-outline-light" href="http://linkedin.com/in/rohit-sawner-7aa04b241"
        >{<FaLinkedin size={20} style={{color:"#fff", marginRight:"0.2rem"}}/>}
      </a>
      <a class="btn btn-outline-light" href="https://instagram.com/ro___hit7489?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        >{<FaInstagram size={20} style={{color:"#fff", marginRight:"0.2rem"}}/>}
      </a>
      <a class="btn btn-outline-light" href="https://github.com/RohitSawner/Restaurant-Website.git"
        >{<FaGithub size={20} style={{color:"#fff", marginRight:"0.2rem"}}/>}
      </a>
      <a class="btn btn-outline-light" href="/"
        >{<FaTelegram size={20} style={{color:"#fff", marginRight:"0.1rem"}}/>}
      </a>
    </div>



    <div className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div> 
          <div className="col-md-5 col-12">
           
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              
            </div>
          </div>
          <div className="col-auto">
            
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div> 
        </div>
      </form>
    </div>
  
    <div className="">
     
      <div className="row">
        
        <div className="col-lg-12 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase"> Social Links</h5>
              <a href="Home" className="text-white"style={{paddingRight:"2rem"}}>Home</a>
            
              <a href="About" className="text-white"style={{paddingRight:"2rem"}}>About</a>
            
              <a href="Service" className="text-white"style={{paddingRight:"2rem"}}>Services</a>
            
              <a href="Contact" className="text-white"style={{paddingRight:"2rem"}}>Contact</a>
            
        </div>
      </div>
  </div>

  <div className="text-center p-3" style={{backgrounColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:
  </div>
  
</div>
</div>
  )
}

export default Footers
