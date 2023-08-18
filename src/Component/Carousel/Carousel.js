import React from 'react'
import Ander from '../Images/Ander.jpg';
import Nath from '../Images/Nath.jpg';
import Mount from '../Images/Mount.jpg';
import "./Caursel.css"
const Carousel = () => {
  return (
    <div>
  <div id="carouselExampleCaptions" className="carousel slide .carousel-fade" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img src={Ander} className="d-block w-100 c-imag" alt="..."/>
      <div className="carousel-caption">
        <h5>Welcome to Our Travel Tour</h5>
        <p>Your Destination Your Journey.</p>
        <div className='sliderbtn'>
        <button type="button" class="btn btn-info">Our Services</button>
<button type="button" class="btn btn-warning">Contact Us</button>
        </div>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src={Nath} className="d-block w-100 c-imag" alt="..."/>
      <div className="carousel-caption ">
        <h5>Some Special Places for You</h5>
        <p>Our Travel Tour suggest you These Place are you visit Atleast One Time.</p>
        <div className='sliderbtn'>
        <button type="button" class="btn btn-info">Our Services</button>
<button type="button" class="btn btn-warning">Contact Us</button>
        </div>
      </div>
    </div>
    <div className="carousel-item c-item">
      <img src={Mount} className="d-block w-100 c-imag" alt="..."/>
      <div className="carousel-caption ">
        <h5>Thank You For Visting</h5>
        <p>Our Travel Tour Specially thanks for visting these websties.</p>
        <div className='sliderbtn'>
        <button type="button" class="btn btn-info">Our Services</button>
<button type="button" class="btn btn-warning">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden mb-20p">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
