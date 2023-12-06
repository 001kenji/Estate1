import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'
import './CSS/navbar.css'
import tick from './assets/tick.jpg'
import fail from './assets/fail.jpg'
import loadImg from './assets/loader.png'

import navIcon from './assets/images/logos/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";


import Home from './JSX/home'
import About from './JSX/about'
import Agent from './JSX/agent'
import Reviews from './JSX/review'
import Footer from './JSX/footer'
function App() {
  const [showNav, setShowNav] = useState(false)
  const showNavStyle = {
    display : showNav ? 'flex' : window.innerWidth >=1024 ? 'flex' : 'none'
  }

window.addEventListener('resize', function () {
  window.innerWidth >=1024 ? setShowNav(true) : setShowNav(false)
})



  function ShowN() {
    setShowNav((e) => !e)
  }

 window.addEventListener('load', function() {
  window.innerWidth >=780 ? setShowNav(true) : ''
 })


 const [progError,seterror] = useState(false)
 const [progSuccess,setSuccess] = useState(false)
 const [progLoad, setload] = useState(false)
 const progressSuccess = {
     display : progSuccess ? 'flex' : 'none'
 }
 const progressError = {
     display : progError ? 'flex' : 'none'
 }
 const progressLoad = {
     display : progLoad ? 'flex' : 'none'
 }

 function Showerror(props){
   if(props == 'show'){
      seterror(true)
   }else if(props == 'hide'){
       seterror(false)
   }
}
function ShowSuccess(props){
   if(props == 'show'){
       setSuccess(true)
   }else if(props == 'hide'){
       setSuccess(false)
   }
}
function ShowLoad(props){
   const loadDiv = document.getElementsByName('loadDiv')
   if(props == 'show'){
       setload(true)
   }else if(props == 'hide'){
       setload(false)
   }
}

useLayoutEffect(() => {
  ShowLoad('show')
},[])

useEffect(() => {
  setTimeout(() => {
    ShowLoad('hide')
   
      
  }, 5000);



},window.onload)





  return (
    <>

    <div className=' sticky top-0' >
       <div className=' bg-slate-100' id='master-navbar-div'> {/* master div */}

      <div id='navbar-alpha-div'>
        <div id='navbar-icon-div'> {/* icon div */}
            <img src={navIcon} alt="" />
        </div>

        <div style={showNavStyle} id='navbar-content-div'> {/* content navbar div */}
            <ul id='navbar-content-list'>
                <li ><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#Reviews">Reviews</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>


        </div>
      </div>
       <div  id='navbar-ham-div'> {/* hamburger div */}
           <GiHamburgerMenu onClick={ShowN} size={30} className=' overflow-hidden text-slate-900 hover:bg-blue-800 bg-green-700 rounded-sm' />
       </div>

       </div>
       
    
    </div>
        
    <div className=' sticky top-0'>
        <div style={progressError} className="top-0 sticky" name='errorDiv' id="notifier">
                    <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
                  <p className="text-sm   sm:text-base" id="error">Error</p>   
                </div>
                <div style={progressSuccess} className="top-0 sticky" name='successDiv' id="notifier" > 
                    <img className="w-6 sm:w-8 "  src={tick} alt="" />
                    <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">Successfull</p>
              </div>
                <div style={progressLoad} className="top-0 sticky" name='loadDiv' id="notifier">
                    <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                    <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >Loading...</p>
                </div>
    </div>


    <div id='home'>{/* home div */}
      <Home />
    </div>

    





    <div id='about'>{/* home div */}
        <About />
    </div>

    <div id='service'>{/* agent div */}
      <Agent />
    </div>

    <div id='Reviews'>{/* review div */}
      <Reviews />
    </div>
    
    <div id='footer'>{/* footer div */}
      <Footer />
    </div>
    
    
    </>
  )
}

export default App
