import About from "./components/About"
import Card from "./components/Card"
import Cartoon from "./components/Cartoon"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Marky from "./components/Marky"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';





function App() {
 
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
   <div className="w-full h-screen bg-white"> 
   
    <Navbar/>
    <Landing/>
    <Marky/>
    <About/>
    <Cartoon/>
    <Feature/>
    <Card/>
    <Footer/>
    </div>  

    </>
  )
}

export default App
