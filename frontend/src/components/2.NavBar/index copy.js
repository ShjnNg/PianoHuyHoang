import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function NavBar() {


  const history = useHistory();
  const [input, setInput] = useState('');
  const handleKeyDown = (target) => {
    if (target.charCode == 13) {
      history.push(`/search/title/${input}`);
    }
  }

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const showDropdown = (e) => {
    if (e == 1) { setShow1(!show1); }
    else if (e == 2) { setShow2(!show2); }
    else if (e == 3) { setShow3(!show3); }
    else if (e == 4) { setShow4(!show4); }
    else if (e == 5) { setShow5(!show5); }
    else if (e == 6) { setShow6(!show6); }
  }
  const hideDropdown = e => {
    if (e == 1) { setShow1(false); }
    else if (e == 2) { setShow2(false); }
    else if (e == 3) { setShow3(false); }
    else if (e == 4) { setShow4(false); }
    else if (e == 5) { setShow5(false); }
    else if (e == 6) { setShow6(false); }
  }

  /*   const history = useHistory();
    const toggleNavbar = () => setCollapsed(!collapsed); */

  return (
    <div className="container-fluid bg-blue mb-30">{/* thanh navbar */}
      <Navbar bg="transparent" variant="dark" expand="lg">
        <a href="/" className="logo text-decoration-none ">
          <span className="h5 text-uppercase text-dark bg-light px-2">Huy Hoàng</span>
          <span className="h5 text-uppercase text-light bg-primary px-2 ml-n1">Piano</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Giới thiệu" id="basic-nav-dropdown" alignLeft className="nav bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show6}
            onMouseEnter={function (e) { showDropdown(6) }}
            onMouseLeave={function (e) { hideDropdown(6) }}>

            <NavDropdown.Item href="/publishers/">Vể Huy Hoàng Piano</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Khách hàng nói về Huy Hoàng Piano</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Sản Phẩm" id="basic-nav-dropdown" alignLeft className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show1}
            onMouseEnter={function (e) { showDropdown(1) }}
            onMouseLeave={function (e) { hideDropdown(1) }}>
            <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
            {/* <div class="col-md-10 col-sm-9 col-xs-8">
              <div class="row">
                <div class="col-md-9">
                  <div class="mainmenu w-100">
                    <ul>
                      <li>
                        <a href="https://vietthuong.vn/gioi-thieu.html">Giới thiệu</a>
                      </li>
                      <li><a href="/san-pham.html">Sản phẩm</a>
                        <ul class="sub_menu">
                          <div class="menu_col1">
                            <li><a href="/dan-piano.html">Piano</a>
                              <ul><li><a href="/dan-piano-grand.html">Grand Piano</a>
                              </li>
                                <li><a href="/dan-piano-upright.html">Upright Piano</a>
                                </li>
                                <li><a href="/digital-piano.html">Digital Piano</a>
                                </li>    </ul>  </li>
                            <li><a href="/dan-organ.html">Keyboard</a>
                              <ul><li><a href="https://vietthuong.vn/Arranger.html">ARRANGER KEYBOARD</a>
                              </li>
                                <li><a href="https://vietthuong.vn/synthesizers.html">SYNTHERSIZER</a>
                                </li>    </ul>  </li>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </NavDropdown>

          <NavDropdown title="Giáo dục" id="basic-nav-dropdown" alignLeft className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show2}
            onMouseEnter={function (e) { showDropdown(2) }}
            onMouseLeave={function (e) { hideDropdown(2) }}>
            <NavDropdown.Item href="/publishers/radio">Radio Stations</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/podcasters">Audio Podcasters</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/videopodcasters">Video Podcasters</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Sữa chữa - Bảo hành" id="basic-nav-dropdown" alignLeft className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show3}
            onMouseEnter={function (e) { showDropdown(3) }}
            onMouseLeave={function (e) { hideDropdown(3) }}>
            <NavDropdown.Item href="/publishers/">Sửa chữa Piano cơ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Sửa chữa Piano điện</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Sửa chữa Organ</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Cho Thuê" id="basic-nav-dropdown" alignRight className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show4}
            onMouseEnter={function (e) { showDropdown(4) }}
            onMouseLeave={function (e) { hideDropdown(4) }}>
            <NavDropdown.Item href="/publishers/">Dịch vụ cho thuê đàn Piano điện để tập tại nhà</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thuê đàn Piano</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thuê đàn Organ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thuê đàn Guitar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thuê Trống</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Âm thanh – Ánh sáng</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Tin Tức" id="basic-nav-dropdown" alignRight className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show5}
            onMouseEnter={function (e) { showDropdown(5) }}
            onMouseLeave={function (e) { hideDropdown(5) }}>
            <NavDropdown.Item href="/publishers/">Sự kiện</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Video</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Tư Vấn</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact">Liên Hệ</Nav.Link>
        </Navbar.Collapse>
        <div className="col-lg-2 col-6 text-left">
          <form action>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm"
                value={input}
                onInput={e => setInput(e.target.value)}
                onKeyPress={function (e) { handleKeyDown(input) }}
              />
              <a className="input-group-append" href={`/search/title/${input}`}>
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search" />
                </span>
              </a>
            </div>
          </form>
        </div>
      </Navbar>
    </div>
  )
}