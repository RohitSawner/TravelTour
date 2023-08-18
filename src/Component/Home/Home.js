import React from 'react'
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import Middle from '../Middlepart/Middle';
import Footers from '../Footer/Footers';

 const Home = () => {
  return (
    <div>
        <Navbar/>
      <Carousel/>
      <Middle/>
     <Footers/>
    
    </div>
  )
}
export default Home;