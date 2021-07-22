import React from 'react';
import "./index.css";
import {useHistory} from 'react-router-dom';

export default function Footer() {
  const history = useHistory();
        return  (
            <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
            <div className="row px-xl-5 pt-5">
              <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">Thông tin cửa hàng</h5>
                <p className="mb-4">Huy Hoàng Piano - Dạy Piano - Organ - Guitar tại Đà Nẵng - Mua bán Piano, Organ, Guitar nhập khẩu trực tiếp</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />CS1: 237 Lê Quảng Chí-Hoà Xuân-Đà Nẵng (tổng kho sỉ, lẻ)</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />CS2: 131 Thái Văn Lung-Hoà xuân-Đà Nẵng</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />Tranhongan708@gmail.com </p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />0934 825 780 - Hoàng</p>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <h5 className="text-secondary text-uppercase mb-4">Chuyển trang</h5>
                    <div className="d-flex flex-column justify-content-start">
                      <a className="text-secondary mb-2 text-left btn" onClick = {function(){history.push(``)}}><i className="fa fa-angle-right mr-2" />Trang chủ</a>
                      <a className="text-secondary mb-2 text-left btn" onClick = {function(){history.push(`/shop`)}}><i className="fa fa-angle-right mr-2" />Mua hàng</a>
                      <a className="text-secondary mb-2 text-left btn" onClick = {function(){history.push(`/cart`)}}><i className="fa fa-angle-right mr-2" />Giỏ hàng</a>
                      <a className="text-secondary mb-2 text-left btn" onClick = {function(){history.push(`/checkout`)}}><i className="fa fa-angle-right mr-2" />Thanh toán</a>
                      <a className="text-secondary text-left btn" onClick = {function(){history.push(`/contact`)}}><i className="fa fa-angle-right mr-2" />Liên hệ</a>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-5">
                    <h5 className="text-secondary text-uppercase mb-4">Tin tức</h5>
                    <p>Bản tin tin tức ........</p>
                    <form action>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email Address" />
                        <div className="input-group-append">
                          <button className="btn btn-primary">Sign Up</button>
                        </div>
                      </div>
                    </form>
                    <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow </h6>
                    <div className="d-flex">
                      <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-twitter" /></a>
                      <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-facebook-f" /></a>
                      {/* <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-linkedin-in" /></a> */}
                      <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
              <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                  © <a className="text-primary" href="https://www.facebook.com/daynhactaidanang">HUYHOANG</a>. All Rights Reserved. Designed by
                  <a className="text-primary" href="https://www.facebook.com/sinhguyendn"> Sinh</a>
                </p>
              </div>
              <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluidfooter" src={process.env.PUBLIC_URL + "/assets/img/payments.png"} alt="" />
              </div>
            </div>
          </div>
            
        )}