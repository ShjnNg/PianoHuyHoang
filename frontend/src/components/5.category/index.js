import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Category() {
  const history = useHistory();
        return  (
<div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Danh mục</span></h2>
        <div className="row align-items-left px-xl-5 pb-3">
          <div  className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href= {`/search/${'Piano'}`} */ 
            onClick = {function(){history.push(`/search/${'Piano'}`)}} >
              <div className="cat-item d-flex align-items-center mb-4" > 
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src= {process.env.PUBLIC_URL + "/assets/img/cat-1.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Piano</h6>
                  <small className="text-body">100 sản phẩm</small>                           
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'Organ'}`} */
            onClick = {function(){history.push(`/search/${'Organ'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-2.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Organ</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'Guitar'}`} */ 
            onClick = {function(){history.push(`/search/${'Guitar'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-3.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Guitar</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'Ukulele'}`} */
            onClick = {function(){history.push(`/search/${'Ukulele'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-4.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Ukulele</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'Violin'}`} */
            onClick = {function(){history.push(`/search/${'Violin'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-5.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Violin</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'trong'}`} */
            onClick = {function(){history.push(`/search/${'trong'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-6.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Trống-bộ gõ</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'ken'}`} */
            onClick = {function(){history.push(`/search/${'trong'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-7.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Kèn-Sáo</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'phukien'}`} */
            onClick = {function(){history.push(`/search/${'phukien'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-8.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Phụ kiện</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a className="text-decoration-none" /* href={`/search/${'suachua'}`} */
            onClick = {function(){history.push(`/search/${'suachua'}`)}} >
              <div className="cat-item img-zoom d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                  <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/cat-9.jpg"} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>Sữa chữa</h6>
                  <small className="text-body">100 sản phẩm</small>
                </div>
              </div>
            </a>
          </div>
        </div></div>

        )}