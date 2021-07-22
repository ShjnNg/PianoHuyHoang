import React from "react";
import { useSelector } from "react-redux";
import emailjs from 'emailjs-com';
import {  TextareaAutosize } from '@material-ui/core';
/* import sendEmail from './sendemail';
var send = sendEmail; */

export default function Contact() {
  var  listproduct = ''
  var  data = {
    from_name:'',
    list: '',
    address: '',
    phone:'',
    email:'',
    messenger:'',
  }; 
  const [data1, setData] = React.useState({
    inputname:'',
    inputname2:'',
    inputaddress: '',
    inputphone:'',
    inputemail:'',
    inputmessenger:'',
    inputcity:'',
    inputdistrict:'',
    inputward:'',

  });
  
  const handleClick = React.useCallback(() => {
      console.log(data);
      data.from_name = data1.inputname2 +' '+ data1.inputname;
      data.address = data1.inputaddress +' - '+ data1.inputward +' - '+ data1.inputdistrict +' - '+ data1.inputcity;
      data.phone = data1.inputphone;
      data.email = data1.inputemail;
      data.messenger = data1.inputmessenger;
      data.list = listproduct;
      send(data);
  });


  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartSubTotal = () => {
    return cartItems
      .reduce((cost, item) => cost + item.cost * item.qty, 0)
  };

  function send(dataa) {
    emailjs.send('service_xr5gjjb', 'template_xhd3xy5', dataa, 'user_djIpFuQRz8xT7GITyze2a')
      .then((result) => {
        console.log(result.status, result.text);
         
      }, (error) => {
          console.log(error.text);
      });
  }
  const body = (
<div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
            <div className="bg-light p-30 mb-5">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label>Tên</label>
                  <input className="form-control" type="text" placeholder="Ân" 
                  value={data1.inputname} 
                  onChange={e => setData({ ...data1, inputname: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Họ</label>
                  <input className="form-control" type="text" placeholder="Nguyễn Văn"/*  
                  value={inputname2} 
                  onInput={e => setInputname2(e.target.value)} */
                  value={data1.inputname2} 
                  onChange={e => setData({ ...data1, inputname2: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>E-mail</label>
                  <input className="form-control" type="text" placeholder="example@email.com" 
                  /* value={inputemail} 
                  onInput={e => setInputemail(e.target.value)} */
                  value={data1.inputemail} 
                  onChange={e => setData({ ...data1, inputemail: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Số điện thoại</label>
                  <input className="form-control" type="text" placeholder="+123 456 789" 
                  /* value={inputphone} 
                  onInput={e => setInputphone(e.target.value)} */
                  value={data1.inputphone} 
                  onChange={e => setData({ ...data1, inputphone: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Địa chỉ</label>
                  <input className="form-control" type="text" placeholder="123 Lê Duẩn" 
                  /* value={inputaddress} 
                  onInput={e => setInputaddress(e.target.value)} */
                  value={data1.inputaddress} 
                  onChange={e => setData({ ...data1, inputaddress: e.target.value })}
                  />
                </div>
                
                <div className="col-md-6 form-group">
                  <label>Thành phố</label>
                  <input className="form-control" type="text" placeholder="Đà Nẵng" 
                  value={data1.inputcity} 
                  onChange={e => setData({ ...data1, inputcity: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Quận</label>
                  <input className="form-control" type="text" placeholder="Cẩm Lệ" 
                  value={data1.inputdistrict} 
                  onChange={e => setData({ ...data1, inputdistrict: e.target.value })}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label>Phường</label>
                  <input className="form-control" type="text" placeholder="Hòa Xuân" 
                  value={data1.inputward} 
                  onChange={e => setData({ ...data1, inputward: e.target.value })}
                  />
                </div>
                <label>Ghi chú</label>
                <TextareaAutosize className="col-md-6 form-group"
                  rowsMin={3}
                  rowsMax={8}
                  className="form-control" type="text" placeholder="Lời nhắn ghi chú đến shop"
                  value={data1.inputmessenger} 
                  onChange={e => setData({ ...data1, inputmessenger: e.target.value })}
                  />
              </div>
            </div>
            
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Thông tin đặt hàng</span></h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom">
                <h6 className="mb-3">Sản phẩm</h6>
                {cartItems.length === 0 ? (
                  <div>
                    Giỏ hàng đang trống 
                  </div>
                  ) : (
                cartItems.map((item) => (
                  listproduct = listproduct +' --- '+ item.qty+' '+item.title,
                  <div className="d-flex justify-content-between">
                    <p>{item.qty}.{item.title}</p>
                    <p>{(item.cost * item.qty).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                  </div>
                  ))
                )}
              </div>
              <div className="border-bottom pt-3 pb-2">
                {/* <div className="d-flex justify-content-between mb-3">
                  <h6>Tổng cộng</h6>
                  <h6>{tongtien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h6>
                </div> */}
                {/* phí vận chuyển */}
                {/* <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Phí vận chuyển</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div> */}
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Tổng cộng</h5>
                  <h5>{getCartSubTotal().toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5>
                </div>
              </div>
            </div>
          <button className="btn btn-block btn-primary font-weight-bold py-3" 
              onClick={handleClick}
            >Đặt hàng</button>
          </div>
        </div>
      </div>
  );

  return  (
    <div>
      {body}
    </div>
        )
      }
