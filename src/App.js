
import './App.css';
//import Gallery from './Components/Gallery';
// import ContactUs from './Components/ContactUs';

import Header from './Components/Header';

import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Courses from './Components/Courses';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
