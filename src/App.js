//import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Service' element={<Services/>}/>
    <Route path='Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
