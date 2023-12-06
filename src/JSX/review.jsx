import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import '../CSS/review.css'
//import reviewData from '../FILES/review.json'


import clientimg1 from '../assets/images/uploads/testi_01.png'
import clientimg2 from '../assets/images/uploads/testi_02.png'
import clientimg3 from '../assets/images/uploads/testi_03.png'
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { PiQuotesFill } from "react-icons/pi";

//<PiQuotesFill /> for quotes

export default Reviews 

function Reviews()  {
    const mappingref = createContext()
  
    const reviewData = [
        {
          "title": "Luxurious Living Spaces",
          "information": "Explore the epitome of elegance and comfort with our luxurious living spaces. Immerse yourself in a lifestyle of sophistication and modern design. Discover the perfect home that reflects your unique style.",
          "name": "Grace Thompson",
          "img" : clientimg1,
          "residence": "Cityview Residences"
        },  
        {
          "title": "Prime Investment Opportunities",
          "information": "Unlock prime investment opportunities in the real estate market. Our expert team identifies lucrative properties with high potential returns. Seize the chance to grow your wealth through strategic real estate investments.",
          "name": "Alex Rodriguez",
          "img" : clientimg2,
          "residence": "Horizon Plaza"
        },
        {
          "title": "Family-Friendly Homes",
          "information": "Discover family-friendly homes designed for comfort and joy. Our range of properties includes spacious layouts, safe neighborhoods, and proximity to schools and parks. Create lasting memories in a home that suits your family's needs.",
          "name": "Emily Harris",
          "img" : clientimg3,
          "residence": "Serenity Street"
        }
      ] 
      
        const reviewDataMapper = reviewData.map((details) => 
            <div className=" bg-slate-200"  id="owner-mapping-div">
                <div id="card1-mapping-div">
                <span>
                    <PiQuotesFill className=" text-slate-600 rotate-180" /> 
                    {details.title}
                     <PiQuotesFill className="text-slate-600 " /></span>
                <textarea disabled name="" id="" >
                    {details.information}
                </textarea>
                <div id="card2-mapping-div">
                    <div id="card2-img-div"><img className="" src={details.img} alt="" /></div>
                    <div id="card2-detail-div">
                        <big>{details.name}</big>
                        <small>{details.residence}</small>
                    </div>
                </div>
                </div>
            </div>
        
        )


        

 var containerMap = document.getElementById('hosting-review-div')
  
    

function Mover(props) {
    var previousIndex, currentIndex;
    if(props == 'left') {
       previousIndex = reviewData[0]
       console.log(containerMap.clientWidth)
       containerMap.scrollBy(-300,0)
       
    }else if (props == 'right') {
        containerMap.scrollBy(300,0)
    }
}




    return (
        <>
        <div className=" bg-slate-300" id="owning-review-div">{/* owning review div */}

        <div className=" text-slate-900" id='heading-review-div'>{/* heading review div */}
            <big>Happy Customers</big>
            <span className="">What our clients say ?</span>
        </div>

        <div id="container-review-div">{/*  review display div */}
            <CiSquareChevLeft id='arrow' onClick={() => Mover('left')} size={40} className="  hover:bg-blue-400  hover:text-slate-100 focus:text-slate-100 focus:bg-blue-400 rounded-md p-0 text-blue-600" />
            <div id="hosting-review-div">{/* mapped review display div */}
                {reviewDataMapper}
                
            </div>

            <CiSquareChevRight onClick={() => Mover('right')} id='arrow' size={40} className=" hover:bg-blue-400 hover:text-slate-100 focus:text-slate-100 focus:bg-blue-400 rounded-md p-0 text-blue-600" />
        </div>


        </div>
        
        </>
    )
}