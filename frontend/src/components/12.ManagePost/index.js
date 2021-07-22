import React from 'react';
import { useDispatch } from 'react-redux';
import {  delProduct } from '../../redux/actions/productActions';
import {useHistory} from 'react-router-dom';


export default function ManagerProduct({ product }) {
/*   const classes = useStyles(); */
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteproduct = (id) => {
    dispatch(delProduct(id));
    window.location.reload();
  };
  return (
    <div className="product-item bg-light mb-4" >
    <div className="product-img position-relative overflow-hidden">
    <div className="product-img">
      <img className="w-100 h-auto center" src={product.attachment} alt={product.name} />
    </div>
    
      <div className="product-action btn" onClick = {function(){history.push(`/product/${product._id}`)}}>
        {/* <a className="btn btn-outline-dark btn-square" onClick={function(e){notify(); addToCartHandler();}}>
          <i className="fa fa-shopping-cart" title="Thêm vào giỏ hàng" />
        </a> */}
        <a className="btn btn-outline-dark btn-square" 
            onClick = {function(){history.push(`/product/${product._id}`)}}
        >
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
        <h5 className = "cost">{product.cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </h5>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>{product.likeCount}</small>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
      <button className="btn btn-primary btn-sm" /* onClick = {function(e){addToCartHandler().then(history.push('/cart'));}} */>Đặt hàng</button>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2 word-wrap">
        <button className="cartItem__deleteBtn"  onClick={() => deleteproduct(product._id)} >
        <i className="fas fa-trash">Xóa</i>
        </button>
      </div>
                    
    </div>
  </div>
          
  );
}
