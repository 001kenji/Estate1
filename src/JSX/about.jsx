import React, { useEffect } from "react";
import '../CSS/about.css'


import aboutImg from '../assets/images/uploads/about_bg.jpg'

import furnishingImg from '../assets/images/uploads/icon-01.png'
import SequrityImg from '../assets/images/uploads/icon-04.png'
import fittingImg from '../assets/images/uploads/icon-03.png'
import NatureLivingImg from '../assets/images/uploads/icon-02.png'
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";




export default About 
function About()  {
const aboutData = [
    {
        img : SequrityImg,
        title : 'Non Stop Security',
        description : 'Non Stop security ensures your real estate sleeps soundly while you dream of peace of mind'
    },
    {
        img : furnishingImg,
        title : 'Full Furnished',
        description : 'We offer a convenient and hassle-free solution for those who need a move-in ready space, complete with furniture, appliances, and even household essentials.'
    },
    {
        img : NatureLivingImg,
        title : 'Lining Inside a Nature ',
        description : 'Conducive environments curated: your real estate matchmaker for a life well-lived.'
    },
    {
        img : fittingImg,
        title : 'Luxurious Fitting',
        description : 'Elevate your living experience with bespoke fitments curated for your luxurious estate.'
    }
]
  const aboutDataMapper = aboutData.map((details) => 

    <div id="about-mapped-div">
        <div id="mapped-img-div">
            <img src={details.img} alt="" />
        </div>
        <div id="mapped-info-div">
            <big className=" sm:text-2xl">{details.title}</big>
            <textarea  disabled>{details.description}</textarea>
        </div>
    </div>

  )
  useEffect(() => {
    setTimeout(() => {
    Mover('auto')

},3000)
console.log('rendered')
  })

  function Mover(props) {
   var currentIndex =  document.querySelector('#about-mapped-div')
   var slide = document.querySelector('#about-slider-div') 
    var newIndex = currentIndex.clientWidth + 27  //57
   if(props == 'left') {
        console.log(currentIndex.clientWidth)
        slide.scrollBy(-newIndex,0)
    
    }else if (props == 'right') {
        slide.scrollBy(newIndex,0)
    }
    else if(props = 'auto') {
        slide.scrollBy(50,0)
    }
  }

    return (
        <>
      
            <div className=" bg-slate-200" id="about-own-div">  {/* owning about div */}
                <div><CiSquareChevLeft onClick={() => Mover('left')} size={40} className=" hover:bg-blue-400 hover:text-slate-100 focus:text-slate-100 focus:bg-blue-400 rounded-md p-0 text-blue-600" /></div>

                <div id="about-slider-div">{/* slider about div */}         
                        {aboutDataMapper}
                </div>
                <div><CiSquareChevRight onClick={() => Mover('right')} size={40} className=" hover:bg-blue-400 hover:text-slate-100 focus:text-slate-100 focus:bg-blue-400 rounded-md p-0 text-blue-600" /></div>
                <div id="about-info-div">{/* more info about div */}

                </div>

            </div>

            <div>{/* more info owning div */}
                <div className=" bg-green-400 sm:bg-opacity-40 rounded-sm sm:justify-center sm:align-middle p-2">
                    <img className=" rounded-sm sm:align-middle sm:justify-center mx-auto" src={aboutImg} alt="" />
                </div>{/* more info img div */}

                <div className=" bg-slate-300" id="more-info-div">
                    <small className=" sm:text-base">AWARDS WINNING REAL ESTATE COMPANY</small>
                    <big className=" sm:text-3xl">Welcome to CITY Real Estate</big>
                    <textarea className=" sm:text-lg" disabled >
                    Welcome to City Real Estate We're thrilled to have you join our growing community of clients. Whether you're looking to buy, sell, or invest in property, our team of experienced professionals is here to guide you every step of the way. We're passionate about helping people achieve their real estate goals, and we're confident that you'll find the perfect fit with us.
                    </textarea>

                    <button className=" bg-lime-600 sm:text-lg hover:text-lime-600 hover:bg-slate-100 focus:text-lime-600 focus:bg-slate-100 text-slate-100">Read More</button>
                </div>{/* more info content div */}
            </div>
        </>
    )
}