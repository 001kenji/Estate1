import React from "react";
import '../CSS/home.css'


import slide1 from '../assets/images/uploads/slider_01.jpg'
import slide2 from '../assets/images/uploads/slider_02.jpg'
import slide3 from '../assets/images/uploads/slider_03.jpg'
export default Home 
function Home() {


    return (
         <>
            <div id="home-owning-div">{/* owning div */}
                <div className=" bg-slate-800 bg-opacity-30 h-fit" id="home-content-div">{/* content div */}
                    <big className=" text-slate-50  sm:text-2xl sm:font-semibold text-xl">
                    Sell Your Property With CITY Real Estate
                    </big>
                    <textarea className=" font-semibold text-slate-100 sm:text-lg text-base" disabled >
                    With CITY Real Estate responsive landing page template, you can promote your all property & real estate projects.
                    </textarea>

                    <button className=" focus:bg-slate-100 focus:text-lime-400 bg-lime-400 sm:font-semibold sm:text-lg text-base p-1 rounded-sm text-slate-100">View Gallery</button>
                </div>

            </div>
         
         </>
    )
}