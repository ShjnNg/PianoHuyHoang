import React from 'react';
import "./index.css";
// import Slideshow from '../SlideShow/SlideShow';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Vendor() {
        return  (
            
            <div className="container-fluid py-5">
            <div className="rowvendor px-xl-5" >
              
                
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-1.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-2.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-3.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-4.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-6.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-7.jpg"} alt="" />
                  </div>
                  <div className="bg-light p-4">
                    <img className = "img-fluid" src={process.env.PUBLIC_URL + "/assets/img/vendor-8.jpg"} alt="" />
                  </div>
                
              
            </div>
          </div>

         
             
             
        )}