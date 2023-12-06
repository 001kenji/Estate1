import React from "react";
import '../CSS/agent.css'
export default Agent 

import { MdOutlineMail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



function Agent()  {

    return (
        <>
        <div className=" text-slate-200 bg-slate-800" id="agent-owning-div">{/* owning agent div */}
            
            <div id="agent-details-div">{/* agent details div */}
                <big className=" sm:text-3xl">Agent Details</big>
                <textarea className=" text-slate-400" disabled>
                Our agents have been in the real estate business for over 10 years, and they have a deep understanding of the local market. They are also familiar with the different types of properties available, as well as the different financing options that are available to buyers. 
                </textarea>
            </div>

            <div id="more-agent-div">{/* more agent details div */}
                <small className=" text-slate-400">THE AGENT</small>
                <big>Jenny Martines</big>
                <textarea className=" text-slate-400" disabled>Jenny Martines is fluent in english, french, spanish and kiswahili, making her a valuable asset to our team of diverse agents. She is also a member of the City Real estate, demonstrating her commitment to the community.</textarea>
                <button className="focus:text-lime-600 font-semibold  focus:bg-slate-100 hover:text-lime-600  hover:bg-slate-100  bg-lime-600  text-slate-100 p-1 rounded-sm">Contact Me</button>
            </div>

            <div className=" text-slate-400" id="social-agent-div">{/* social agent details div */}
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><MdOutlineMail size={20}/> JennyMartines@gmail.com</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><FaLink size={20} />www.JennyMartines.co.ke</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><FaPhoneSquareAlt size={20} /> +254 7123456789</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><IoDocumentAttachOutline size={20} /> +254 7912345633</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><IoLogoFacebook size={20} />JennyMartines.co.ke</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><FaSquareTwitter size={20} />JennyMartines.co.ke</span>
                    <span className=" cursor-pointer hover:text-lime-600 focus:text-lime-600" ><FaLinkedin size={20} />JennyMartines.co.ke</span>
            </div>

        </div>
        </>
    )
}