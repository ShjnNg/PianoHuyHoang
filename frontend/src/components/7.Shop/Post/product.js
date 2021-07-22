import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../redux/actions/cartActions";
import toast, { Toaster } from 'react-hot-toast';
import { updateProduct } from '../../../redux/actions/productActions';
import {useHistory} from 'react-router-dom';

export default function Product({ product }) {
  
  const history = useHistory();
  const [qty] = useState(1);
  /* const [gia,setgia] = useState(''); */
  const dispatch = useDispatch();
  const notify = () => toast.success('Đã thêm mặt hàng ' + product.title + ' vào giỏ hàng', 
    {style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      },
    }
  );

  const addToCartHandler = async() => {
    dispatch(addToCart(product._id, qty));
  };

  const checkcost = React.useCallback((cost) => {
    if (cost == 0){
      return <h5 className = "cost" onClick = {function(){history.push(`/contact`)}}>Liên Hệ</h5>
    }
    else
    { 
      return <h5 className = "cost">{product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5>
    }
  });
  

  const onLikeBtnClick = React.useCallback(() => {
    dispatch(
      updateProduct({ ...product, likeCount: product.likeCount + 1 })
    );
  }, [dispatch, updateProduct]);

  return (
              
                <div className="product-item bg-light mb-4" >
                  <div className="product-img position-relative overflow-hidden">
                  <div className="product-img">
                    <img className="w-100 h-auto center" src={product.attachment} alt={product.name} />
                  </div>
                  
                    <div className="product-action btn" onClick = {function(){history.push(`/product/${product._id}`)}}>
                      <a className="btn btn-outline-dark btn-square" onClick={function(e){notify(); addToCartHandler();}}>
                        <i className="fa fa-shopping-cart" title="Thêm vào giỏ hàng" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" onClick={function(e){onLikeBtnClick();}}><i title="Yêu thích sản phẩm" className="far fa-heart"/></a>
                      {/* <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a> */}
                      <a className="btn btn-outline-dark btn-square" 
                          onClick = {function(){history.push(`/product/${product._id}`)}}
                      /* href={`/product/${product._id}`} */>
                        <i className="fa fa-search" title="Xem thông tin chi tiết"/>
                        </a>
                    </div>
                    
                  </div>
                  <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate btn"
                    onClick = {function(){history.push(`/product/${product._id}`)}}
                     >
                       {product.title}
                     </a>
                    <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                      {checkcost(product.cost)}
                      
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>{product.likeCount}</small>
                    </div> */}
                    <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
                    <button className="btn btn-primary btn-sm" onClick = {function(e){addToCartHandler().then(history.push('/cart'));}}>Đặt hàng</button>
                    {/* <small class="text-body">{product.likeCount}</small> */}
                    </div>
                  </div>
                  <Toaster />
                </div>
                
          
  );
}
