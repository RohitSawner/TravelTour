import React from 'react'
import Maldives from '../Images/Maldives.jpg'
import China from '../Images/China.jpg'
import India from '../Images/India.jpg'
import Paris from '../Images/Paris.jpg'
import jap from '../Images/jap.jpg'
import Thi from '../Images/Thi.jpg'
import Russia from '../Images/Russia.jpg'
import Sweden from '../Images/Sweden.jpg'
import Norway from '../Images/Norway.jpg'
import './Pacckage.css'
import { Link } from 'react-router-dom'
const Pacckage = () => {
  return (
    <div className="travel" >
    <div className=' container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12-col-sm-12'>
        <div className='deatils'>
 <h5 className='text-center'>
    Our Popular destination
 </h5>
 <p>
 "Your Journey, Our Expertise: Welcome to [Travel Tour Website Name], where wanderlust meets seamless adventure. Embark on unforgettable journeys curated by passionate explorers who understand your craving for discovery. Our commitment is to craft exceptional travel experiences that whisk you away from the ordinary, introducing you to cultures, landscapes, and moments that redefine your perspective. Whether you're an intrepid solo traveler or seeking to create cherished memories with loved ones, our meticulously designed tours promise to ignite your sense of wonder. Trust us to handle the details, while you focus on soaking in the joy of the voyage. Join us as we transform your travel dreams into a reality worth reliving. Let's explore the world, one destination at a time."
 </p>
 </div>
 </div>
        </div>
        </div>
          <br/>
          <br/>
          <div className="container">
            <div className="row">
            <div className=" col-lg-4  col-md-6 col-12">
              <div className="card mal" style={{width: "18rem"}}>
                <img src={Maldives} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"> Maldives </h5>
                  <p className="card-text">Trip :5-10 Days | Servers:1
                     Offerse $1900.20 <del>$2500.10</del> </p>
                  <Link to="/" className="btn btn-primary">Book Now</Link>
                </div>
              </div>
              </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={China} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">China</h5>
                    <p className="card-text">Trip :10-15 Days | Servers:1
                       Offerse $3200.20 <del>$3500.10</del> </p>
                    <Link to="/" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
                </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={India} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> India </h5>
                    <p className="card-text">Time :10-15 Days | Servers:1
                       Offerse $3020.20 <del>$3500.10</del> </p>
                    <Link to="#" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
                </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={Paris} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> Paris </h5>
                    <p className="card-text">Trip :10-15 Days | Servers:4
                       Offerse $4550.20 <del>$5650.10</del> </p>
                    <Link to="/" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
              </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={jap} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Japan</h5>
                    <p className="card-text">Trip :30-45 Days | Servers:5
                       Offerse $3350.20 <del>$3450.10</del> </p>
                    <Link to="/" className="btn btn-primary">Order Now</Link>
                  </div>
                </div>
              </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={Thi} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> Thiland </h5>
                    <p className="card-text">Trip :30-45 Days | Servers:5
                       Offerse $6250.20 <del>$7450.10</del> </p>
                    <Link to="/" className="btn btn-primary">Order Now</Link>
                  </div>
                </div>
              </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={Russia} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Russia</h5>
                    <p className="card-text">Trip :10-15 Days | Servers:1
                       Offerse $5300.20 <del>$6500.10</del> </p>
                    <Link to="/" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
                </div>

              <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={Sweden} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> Sweden </h5>
                    <p className="card-text">Time :10-15 Days | Servers:1
                       Offerse $245020.20 <del>$33500.10</del> </p>
                    <Link to="#" className="btn btn-primary">Book Now</Link>
                  </div>
                </div>
                </div>

                <div className=" col-lg-4  col-md-6 col-12">
                <div className="card mal " style={{width: "18rem"}}>
                  <img src={Norway} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title"> Norway </h5>
                    <p className="card-text">Trip :30-45 Days | Servers:5
                       Offerse $4250.20 <del>$5450.10</del> </p>
                    <Link to="/" className="btn btn-primary">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>


  )
}

export default Pacckage