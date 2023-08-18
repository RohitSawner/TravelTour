import React from 'react'
import Paris from '../Images/Paris.jpg'
import Swiz from '../Images/Swiz.jpg'
import India from '../Images/India.jpg'
import './Pack.css'
const Pack = () => {
  return (
    <div className='super'>
    <div className=' container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12-col-sm-12'>
        <div className='deatils'>
 <h5 className='text-center'>
    Our Popular Pacckage
 </h5>
 </div>
 </div>
        </div>
        </div>
        <div class="container">
  <div class="row">
    
    <div class="col-lg-4 col-md-12 col-sm-12">
    <div class="card adj">
  <img src={Paris} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Paris:-The City Of France</h5>
    <p class="card-text">Paris is a picturesque dream destination. Spread over the banks of Seine River in Northern France, it stands out for being one of those glitzy metropolises of the world. </p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    
    <div class="col-lg-4 col-md-12 col-sm-12">
    <div class="card adj" >
  <img src={Swiz} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Switzerland</h5>
    <p class="card-text">The amazing natural beauty of the majestic Alps, the placid lakes, quaint villages, cosmopolitan cities and towering castles – that's just some of what Switzerland has to offer. Add to it some shopping,</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

 
    <div class="col-lg-4 col-md-12 col-sm-12">
    <div class="card adj">
  <img src={India} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">India</h5>
    <p class="card-text">India is one of the world's most attractive countries, and multiple factors have increased its popularity among tourists. Its natural wonders, artificial marvels, national parks, theme parks, etc. </p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
   
  </div>
</div>
</div>
</div>
</div>
   
  )
}

export default Pack
