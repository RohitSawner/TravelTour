import React from 'react'
import Zero from '../../Video/Zero.mp4'
import './Hero.css'
function Hero (){
  return (
    <div>
<div className="c-item">
      <video src={Zero} className="d-block w-100 c-video" muted autoPlay loop type='video/mp4'/>
      <div className="carousel-caption ">
        <h5>About US PAGE</h5>
        <h2>Our Mission</h2>
        <p>To be a high performance company that:
<ol>
Attracts customers and exceeds their expectations.
Provides an enriching, fulfilling and rewarding environment for employees.
values long-term relationships with suppliers.
Serves and supports the community.
Achieves solid financial performance.
</ol>
            </p>
      </div>
      </div>
      

      
      </div>
   
  )
}

export default Hero