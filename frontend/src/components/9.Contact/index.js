import React from 'react';

export default function Contact() {
        return  (
<div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Liên hệ</span></h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input type="text" className="form-control" id="name" placeholder="Nhập họ tên" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="email" className="form-control" id="email" placeholder="Nhập Email" required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" id="subject" placeholder="Tiêu đề" required="required" data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea className="form-control" rows={8} id="message" placeholder="Tin nhắn" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Gửi tin nhắn</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe style={{width: '100%', height: '250px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d691.1176654783768!2d108.220854413502!3d16.013668776529023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421b018e166967%3A0xefcc71270485d396!2zSHV5IEhvw6BuZyBQaWFubyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1617933076967!5m2!1svi!2s" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="bg-light p-30 mb-3">
              <p href="https://www.facebook.com/daynhactaidanang" target="blank" className="mb-contact"><i className="fa fa-map-marker-alt text-primary mr-3" />CS1: 237 Lê Quảng Chí-Hoà Xuân-Đà Nẵng (tổng kho sỉ, lẻ)</p>
              <p href="https://www.facebook.com/daynhactaidanang" target="blank" className="mb-contact"><i className="fa fa-map-marker-alt text-primary mr-3" />CS2: 131 Thái Văn Lung-Hoà xuân-Đà Nẵng</p>
              <p className="mb-contact"><i className="fa fa-envelope text-primary mr-3" />Tranhongan708@gmail.com </p>
              <p className="mb-contact"><i className="fa fa-phone-alt text-primary mr-3" />0934 825 780 - Hoàng</p>
            </div>
          </div>
        </div>
      </div>
        )}