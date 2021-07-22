import "./CartScreen.css";
import {Container} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((cost, item) => cost + item.cost * item.qty, 0)
  };

  return (
    <Container maxWidth="xl" className = {{}}>
    <Header/>
    <NavBar/>
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Giỏ hàng</h2>

          {cartItems.length === 0 ? (
            <div>
              Giỏ hàng đang trống <Link className="btn" onClick = {function(){history.push(`/shop`)}}>Quay lại mua sắm</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Tổng ({getCartCount()}) sản phẩm</p>
            <p>{getCartSubTotal().toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} VNĐ</p>
          </div>
          <div>
          <Link to="/checkout">
            <button>
                <p1>Đặt hàng</p1>
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
    <Footer/>
    </Container>
    
  );
};

export default CartScreen;
