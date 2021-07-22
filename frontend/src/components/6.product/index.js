import React from 'react';
import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Product from '../7.Shop/Post/product';
//Actions
import { getTop10Products as listProducts } from "../../redux/actions/productActions";


export default function Product10() {
  const dispatch = useDispatch();

  const getTop10Products = useSelector((state) => state.getProducts);
  const { products } = getTop10Products;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]); 
  
        return  (
            <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Mặt hàng bán chạy</span></h2>
            <div className="row px-xl-5">
                {products.map((product) => (
                  <div className="col-lg-3 col-md-3 col-sm-3 pb-1">
                        <div  key={product._id}>
                          <Product product={product} />
                        </div>
                        </div>
                      ))}   
                {/* <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/assets/img/cat-3.jpg"} alt="" />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                      <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                      <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                      <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a href="detail" className="h6 text-decoration-none text-truncate">Đàn 1 </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>5.000.000 VNĐ</h5><h6 className="text-muted ml-2"><del>6.000.000 VNĐ</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>(99)</small>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
            
        )}