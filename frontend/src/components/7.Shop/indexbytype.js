import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Product from './Post/product';
import { Spinner } from 'react-awesome-spinners';
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
require('dotenv').config()
//Actions

export default function PostList({ text }) {
  
  /* const URLchange = 'http://localhost:5000'; */
  const URLchange = process.env.REACT_APP_URLlocal;
  const [pg, setpg] = useState(1);
  const [skip, setskip] = useState(0);
  const [count, setcount] = useState(0);
  const [PageSize, setPageSize] = useState(10);
  const [error, setErrors] = useState('')
  const [loading, setLoadingState] = useState(true);
  const [products,setprod] = useState([]);
  
  const getcountP = async() => 
  {await axios.get(`${URLchange}/api/count/countproductbytype/${text.match.params.type}`).
  then((response) => {
    setcount(response.data);
  })
  }

  const getproductss = async(page, limit) =>{
    try {
      setLoadingState(true);
      await axios.get(`${URLchange}/api/search/${text.match.params.type}/${page}/${limit}`)
        .then((res) => {
          setprod(res.data)
          setLoadingState(false)
        })
    } catch (errorr) {
      setErrors(errorr)
    } 
  };

  const PreviewPage = React.useCallback(() => {
    try {
      if (pg>1) {
        const sk = (pg-2)*PageSize + 1;
        const p = pg-1;
        getproductss(sk,PageSize);
        setskip(sk);
        setpg(p);
        console.log(sk);
      }
    } catch (error) {
      setErrors(error)
    }
    
  },[]);
  const NextPage = React.useCallback(() => {
    try {
      if (pg<getNumPage) {
        const sk = (pg)*PageSize + 1;
        const p = pg+1;
        getproductss(sk,PageSize);
        setskip(sk);
        setpg((p));
        console.log(sk);
      }
    } catch (error) {
      setErrors(error)
    }
  },[]);

  const handleClickgetnumproduct = (num) => {
    if (PageSize !== num){
      setPageSize(num);
      setPageSize(num);
      getproductss(skip,num);
    }
  };

  useEffect(() => {
    getproductss(skip,PageSize);
    getcountP();
  }, []);
  const getNumPage = Math.ceil(count/PageSize);

  return (
    <Container maxWidth="xl" className = {{}}>
    <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-80 col-md-80">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                    <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
                  </div>
                  <div className="btn-secondary">
                      <DropdownButton 
                      title = 'Hiển thị'
                      variant="secondary"
                      >
                      <Dropdown.Item as="button" onClick={() =>handleClickgetnumproduct(10)}>
                        <a class="dropdown-item">10</a>
                      </Dropdown.Item>
                      <Dropdown.Item  as="button" onClick={() =>handleClickgetnumproduct(20)}>
                        <a class="dropdown-item">20</a>
                      </Dropdown.Item>
                      <Dropdown.Item  as="button" onClick={() =>handleClickgetnumproduct(50)}>
                        <a class="dropdown-item">50</a>
                      </Dropdown.Item>
                      </DropdownButton>
                  </div>
                </div>
              </div>
              {loading ? (
              <h2>Đang tải sản phẩm    <Spinner /></h2>
                  ) : error ? (
                    <h2>{error}</h2>
                  ) : (
                    <>
                      {products.map((product) => (
                        <div className="col-lg-3 col-md-3 col-sm-3 pb-1">
                              <div  key={product._id}>
                                <Product product={product} />
                              </div>
                              </div>
                            ))}   
                      </>
                    )}
            </div>
            <div className="pagination">
            <button className="btn btn-sm pagination" onClick ={PreviewPage}>Trang trước</button>
            <button className="btn btn-sm pagination" onClick ={NextPage}>Trang sau</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}