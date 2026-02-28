import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Age from './components/Age';
import Colour from './components/Colour';
import Day from './components/Day';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    let name= "BarApp"
   
  return (
    
    // <div>
    //   Helo world!!
    // </div>
    // <>
    // <div className='red'>
    //   Welcome to {name }
    // </div>
    // <h1>TEst</h1>
    // </>

    <>

    <BrowserRouter>

      <nav>
        <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">Aboutu</Link>
      </nav>


      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>




      <Navbar passedname={name} />
    <Hero/>
    <Counter/>
    <Age age={66}/>
    <Colour/>
    <Footer/>
    <Day/>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
