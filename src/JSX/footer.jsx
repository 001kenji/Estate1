import React from "react";
import '../CSS/footer.css'



import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import footerImg from '../assets/images/logos/logo.png'




export default Footer 
function Footer () {

    const date = new Date()
    const year = date.getFullYear()


    return (
        <>
        
        <div className=" bg-slate-800 text-slate-300" id="owning-footer-div">{/* owning footer div */}

        <div id="summery-footer-div">{/* summery info footer div */}
            <img src={footerImg} alt="" />
            <textarea disabled className=" text-slate-300"  >
            Own a piece of the American dream, invest in your future with a home that's yours, and put down roots and create lasting memories in a place you can call your own.
            </textarea>
        </div>

        <div id="info-footer-div"> {/* info link */}
            <span>CityRealEstate@domain.com</span>
            <span>www.cityrealesate.com</span>
            <span>PO Box 16122 Collins Street West Victoria 8007 Muranga</span>
            <span>+254 7123456789</span>
        </div>

        <div id="social-footer-div">{/* social  div */}
            <span  className=" hover:text-lime-600 focus:text-lime-600 cursor-pointer " > <FaFacebookF /> FaceBook</span>
            <span  className=" hover:text-lime-600 focus:text-lime-600 cursor-pointer " ><FaGithub />  Github</span>
            <span  className=" hover:text-lime-600 focus:text-lime-600 cursor-pointer " ><FiTwitter /> Twitter</span>
            <span  className=" hover:text-lime-600 focus:text-lime-600 cursor-pointer " ><FaDribbble /> Dribbble</span>
            <span  className=" hover:text-lime-600 focus:text-lime-600 cursor-pointer " ><BsPinterest /> Pinterest</span>
        </div>

        </div>


        <div id="developer-footer-div" className=" bg-slate-800 sm:text-lg  text-slate-300"> {/* developer tab  div */}
            <span>All Rights Reserved. &#169; {year}. Designed by Brian Njuguna</span>
        </div>
        </>
    )
}