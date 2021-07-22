import React from 'react';
// import Slideshow from '../SlideShow/SlideShow';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';

export default function Carousell() {
  const history = useHistory();
  return (
    <div className="banner-top">
      <div className="row px-xl-5">
        <div className="col-lg-12">
          <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-1.jpg"} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Huy Hoàng</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Mua bán Piano nhập khẩu trực tiếp, dạy đàn piano</p>
                  <a onClick={function () { history.push(`/shop`) }} className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">Mua ngay</a>
                </div>
              </div>
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-4.jpg"} />
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-2.jpg"} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Huy Hoàng</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">CS1: 237 Lê Quảng Chí-Hoà Xuân-Đà Nẵng (tổng kho sỉ, lẻ)</p>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">CS2: 131 Thái Văn Lung-Hoà xuân-Đà Nẵng</p>
                  <a onClick={function () { history.push(`/shop`) }} className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">Mua ngay</a>
                </div>
              </div>
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-5.jpg"} />
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-3.jpg"} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Huy Hoàng</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">CS1: 237 Lê Quảng Chí-Hoà Xuân-Đà Nẵng (tổng kho sỉ, lẻ)</p>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">CS2: 131 Thái Văn Lung-Hoà xuân-Đà Nẵng</p>
                  <a onClick={function () { history.push(`/shop`) }} className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp">Mua ngay</a>
                </div>
              </div>
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-5.jpg"} />
            </div>
            <div>
              <img class="sale_image" src={process.env.PUBLIC_URL + "/assets/img/carousel-6.jpg"} />
            </div>
          </Carousel>
        </div>
      </div>

    </div>

  )
}