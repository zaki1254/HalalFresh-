import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";


const Footer = () => {
 return (
   <footer className="footer bg-dark text-light">
     <div className="container-fluid">
       <div className="row">
         <div className="col-md-6">
           <h1 className="footer__heading">HalalFresh</h1>
           <h5 className="footer__description">Bringing Somalia's Flavours to Your Doorstep</h5>
         </div>
         <div className="col-md-6">
         <h3>Contact Us For More Help</h3>
           <p>Email: <a href="halalfresh@gmail.com" className="footer__link">halalfresh@gmail.com</a></p>
           <p>Phone: <span className="footer__phone">416-888-8800</span></p>
         </div>
       </div>
       <div className="row">
         <div className="col-md-12 d-flex justify-content-center">
         
         </div>
       </div>
     </div>


       <p className="footer__copyright">© Copyright 2024, HalalFresh.</p>
 
   </footer>
 );
};


export default Footer;
