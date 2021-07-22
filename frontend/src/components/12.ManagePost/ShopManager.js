import React, {useEffect, useState, useMemo} from 'react';
import {Container} from "@material-ui/core";
import { Spinner } from 'react-awesome-spinners';
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Product from './index';
//Actions

export default function PostList() {

  const [pg, setpg] = useState(1);
  const [skip, setskip] = useState(0);
  const [count, setcount] = useState(0);
  const [PageSize, setPageSize] = useState(10);
  const [error, setErrors] = useState('')
  const [loading, setLoadingState] = useState(true);
  const [products,setprod] = useState([]);

  const getcountP = async() => 
  {await axios.get(`/api/count/product`).
  then((response) => {
    setcount(response.data);
  })
  };
  
  const getproductss = async(page, limit) =>{
  try {
    setLoadingState(true);
    await axios.get(`/api/products/${page}/${limit}`)
      .then((res) => {
        setprod(res.data)
        setLoadingState(false)
      })
  } catch (errorr) {
    setErrors(errorr)
  } 
}
  useEffect(() => {
    getproductss(skip,PageSize);
    getcountP();
  }, []);

  const handleClickgetnumproduct = React.useCallback((num) => {
    if (PageSize !== num){
      setPageSize(num);
      setPageSize(num);
      getproductss(skip,num);
    }
  });

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
    
  });
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
  });

  const getNumPage = useMemo(() => Math.ceil(count/PageSize));

  return (
    <Container maxWidth="xl" className = {{}}>
    <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-20 20">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Lọc theo giá</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                  <label className="custom-control-label" htmlFor="price-all">Tất cả</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-1" />
                  <label className="custom-control-label" htmlFor="price-1">0 - 1.000.000 VNĐ</label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-2" />
                  <label className="custom-control-label" htmlFor="price-2">1.000.000 - 3.000.000 VNĐ</label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-3" />
                  <label className="custom-control-label" htmlFor="price-3">3.000.000 - 5.000.000</label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" id="price-4" />
                  <label className="custom-control-label" htmlFor="price-4">5tr VNĐ - 10tr VNĐ</label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="price-5" />
                  <label className="custom-control-label" htmlFor="price-5">10tr VNĐ - 20tr VNĐ</label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input type="checkbox" className="custom-control-input" id="price-5" />
                  <label className="custom-control-label" htmlFor="price-5">20tr - ~ </label>
                  <span className="badge border font-weight-normal">17</span>
                </div>
              </form>
            </div>
            {/* Price End */}
          </div>
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
                        <div className="col-lg-3 col-md-6 col-sm-6 pb-1">
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