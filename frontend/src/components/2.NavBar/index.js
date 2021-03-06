import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function NavBar() {


  const history = useHistory();
  const [input, setInput] = useState('');
  const handleKeyDown = (target) => {
    if (target.charCode === 13) {
      console.log(input);
      history.push(`/search/title/${input}`);
    }
  }

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [showSP, setShowSP] = useState(false);
  const [showSPPiano, setShowSPPiano] = useState(false);
  const [showSPOrgan, setShowSPOrgan] = useState(false);
  const [showSPGuitar, setShowSPGuitar] = useState(false);
  const [showSPUku, setShowSPUku] = useState(false);
  const [showSPViolin, setShowSPViolin] = useState(false);
  const [showSPTrong, setShowSPTrong] = useState(false);
  const [showSPPhukien, setShowSPphukien] = useState(false);
  const [showKHPiano, setShowSPKHPiano] = useState(false);
  const [showKHOrgan, setShowSPKHOrgan] = useState(false);
  const [showKHGuitar, setShowSPKHGuitar] = useState(false);
  const showDropdown = (e) => {
    if (e === 1) { setShow1(!show1); }
    else if (e === 2) { setShow2(!show2); }
    else if (e === 3) { setShow3(!show3); }
    else if (e === 4) { setShow4(!show4); }
    else if (e === 5) { setShow5(!show5); }
    else if (e === 6) { setShow6(!show6); }
    else if (e === 7) { setShowSP(!showSP); }
    else if (e === 8) { setShowSPPiano(!showSPPiano); }
    else if (e === 9) { setShowSPOrgan(!showSPOrgan); }
    else if (e === 10) { setShowSPGuitar(!showSPGuitar); }
    else if (e === 11) { setShowSPUku(!showSPUku); }
    else if (e === 12) { setShowSPViolin(!showSPViolin); }
    else if (e === 13) { setShowSPTrong(!showSPTrong); }
    else if (e === 13.5) { setShowSPphukien(!showSPPhukien); }
    else if (e === 14) { setShowSPKHPiano(!showKHPiano); }
    else if (e === 15) { setShowSPKHOrgan(!showKHOrgan); }
    else if (e === 16) { setShowSPKHGuitar(!showKHGuitar); }
  }
  const hideDropdown = e => {
    if (e === 1) { setShow1(false); }
    else if (e === 2) { setShow2(false); }
    else if (e === 3) { setShow3(false); }
    else if (e === 4) { setShow4(false); }
    else if (e === 5) { setShow5(false); }
    else if (e === 6) { setShow6(false); }
    else if (e === 7) { setShowSP(false); }
    else if (e === 8) { setShowSPPiano(false); }
    else if (e === 9) { setShowSPOrgan(false); }
    else if (e === 10) { setShowSPGuitar(false); }
    else if (e === 11) { setShowSPUku(false); }
    else if (e === 12) { setShowSPViolin(false); }
    else if (e === 13) { setShowSPTrong(false); }
    else if (e === 13.5) { setShowSPphukien(false); }
    else if (e === 14) { setShowSPKHPiano(false); }
    else if (e === 15) { setShowSPKHOrgan(false); }
    else if (e === 16) { setShowSPKHGuitar(false); }
  }

  /*   const history = useHistory();
    const toggleNavbar = () => setCollapsed(!collapsed); */

  return (
    <div className="container-fluid bg-blue">{/* thanh navbar */}
      <Navbar bg="transparent" variant="dark" expand="lg">
        <a href="/" className="logo text-decoration-none ">
          <span className="h5 text-uppercase text-dark bg-light px-2">Huy Ho??ng</span>
          <span className="h5 text-uppercase text-light bg-primary px-2 ml-n1">Piano</span>
        </a>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Gi???i thi???u" id="basic-nav-dropdown" alignLeft fill="false"
            className="nav bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show6}
            onMouseEnter={function (e) { showDropdown(6) }}
            onMouseLeave={function (e) { hideDropdown(6) }}
            onClick={function (e) { showDropdown(6) }}>

            <NavDropdown.Item href="/publishers/">V??? Huy Ho??ng Piano</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Kh??ch h??ng n??i v??? Huy Ho??ng Piano</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="S???n Ph???m" id="basic-nav-dropdown" alignLeft fill className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={showSP}
            onMouseEnter={function (e) { showDropdown(7) }}
            onMouseLeave={function (e) { hideDropdown(7) }}
            onClick={function (e) { showDropdown(7) }}
            href={`/shop`}>
              
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                  className = "btn-block"
                  block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Piano`}
                  show={showSPPiano}
                  onMouseEnter={function (e) { showDropdown(8) }}
                  onMouseLeave={function (e) { hideDropdown(8) }}
                  href={`/search/Piano`}
                >
                  <a href={`/search/${'PianoYamaha'}`} /* onClick = {function(){history.push(`/search/PianoYamaha`)}}  */ className="dropdown-item">Piano Yamaha</a>
                  <a href={`/search/${'Pianonobel'}`} /* onClick = {function(){history.push(`/search/Pianonobel`)}} */ className="dropdown-item">Piano Nobel</a>
                  <a href={`/search/${'PianoCasio'}`} /* onClick = {function(){history.push(`/search/PianoCasio`)}} */ className="dropdown-item">Piano Casio</a>
                  <a href={`/search/PianoAstorHorwood`} className="dropdown-item">Piano Astor &amp; Horwood</a>
                  <a href={`/search/PianoColumbia`} className="dropdown-item">Piano Columbia</a>
                  <a href={`/search/PianoDynatone`} className="dropdown-item">Piano Dynatone</a>
                  <a href={`/search/PianoKawai`} className="dropdown-item">Piano Kawai</a>
                  <a href={`/search/PianoKorg`} className="dropdown-item">Piano Korg</a>
                  <a href={`/search/PianoCo`} className="dropdown-item">Piano c??</a>
                  <a href={`/search/${'PianoGiaCo'}`} className="dropdown-item">Piano gi??? c??</a>
                  <a href={`/search/${'Pianokhac'}`} className="dropdown-item">Kh??c</a>
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                  className = "btn-block"
                  block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` Organ `}
                  show={showSPOrgan}
                  onMouseEnter={function (e) { showDropdown(9) }}
                  onMouseLeave={function (e) { hideDropdown(9) }}
                  href={`/search/Organ`}
                >
                  <a href={`/search/${'OrganYamaha'}`} class="dropdown-item">Organ Yamaha</a>
                  <a href={`/search/${'OrganKurztman'}`} class="dropdown-item">Organ Kurztman</a>
                  <a href={`/search/${'OrganCasio'}`} class="dropdown-item">Organ Casio</a>
                  <a href={`/search/${'Organkhac'}`} class="dropdown-item">Kh??c</a>
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                  className = "btn-block"
                  block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` Guitar `}
                  show={showSPGuitar}
                  onMouseEnter={function (e) { showDropdown(10) }}
                  onMouseLeave={function (e) { hideDropdown(10) }}
                  href={`/search/Guitar`}
                >
                  <a href={`/search/${'GuitarYamaha'}`} class="dropdown-item">Guitar Yamaha</a>
                  <a href={`/search/${'GuitarTaylor'}`} class="dropdown-item">Guitar Taylor</a>
                  <a href={`/search/${'GuitarFENDER'}`} class="dropdown-item">FENDER</a>
                  <a href={`/search/${'GuitarROSEN'}`} class="dropdown-item">ROSEN</a>
                  <a href={`/search/${'GuitarEko'}`} class="dropdown-item">Eko</a>
                  <a href={`/search/${'GuitarMelodica'}`} class="dropdown-item">K??n Melodica</a>
                  <a href={`/search/${'GuitarMC'}`} class="dropdown-item">Guitar M-C</a>
                  <a href={`/search/${'GuitarKhac'}`} class="dropdown-item">Kh??c</a>
                </DropdownButton>
              ))}
            </div>


            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                  className = "btn-block"
                  block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` ????n Ukulele `}
                  show={showSPUku}
                  onMouseEnter={function (e) { showDropdown(11) }}
                  onMouseLeave={function (e) { hideDropdown(11) }}
                  href={`/search/Ukulele`}
                  /* onClick = {function(){history.push(`/search/Ukulele`)}} */
                >
                  <a href={`/search/${'Mahalo'}`} class="dropdown-item">Mahalo</a>
                  <a href={`/search/${'Ukulelekhac'}`} class="dropdown-item">Kh??c</a>
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                  className = "btn-block"
                  block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` ????n Violin `}
                  show={showSPViolin}
                  onMouseEnter={function (e) { showDropdown(12) }}
                  onMouseLeave={function (e) { hideDropdown(12) }}
                  href={`/search/Violin`}
                  /* onClick = {function(){history.push(`/search/Violin`)}} */
                >
                  <a href={`/search/${'ViolinYamaha'}`} class="dropdown-item">Yamaha</a>
                  <a href={`/search/${'ViolinValencia'}`} class="dropdown-item">Valencia</a>
                  <a href={`/search/${'Violinkhac'}`} class="dropdown-item">Kh??c</a>
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` Tr???ng-b??? g?? `}
                  show={showSPTrong}
                  onMouseEnter={function (e) { showDropdown(13) }}
                  onMouseLeave={function (e) { hideDropdown(13) }}
                  href={`/search/trong`}
                  /* onClick = {function(){history.push(`/search/trong`)}} */
                >
                  <a href={`/search/${'trongdienYamaha'}`} class="dropdown-item">Tr???ng ??i???n Yamaha</a>
                  <a href={`/search/${'trongdienhitman'}`} class="dropdown-item">Tr???ng ??i???n HITMAN</a>
                  <a href={`/search/${'trongacoutisyamaha'}`} class="dropdown-item">Tr???ng Acoutis Yamaha</a>
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Ph??? ki???n`}
                  show={showSPPhukien}
                  onMouseEnter={function (e) { showDropdown(13.5) }}
                  onMouseLeave={function (e) { hideDropdown(13.5) }}
                  href={`/search/phukien`}
                  /* onClick = {function(){history.push(`/search/phukien`)}} */
                >
                  <a href={`/search/${'phukienpiano'}`} class="dropdown-item">Ph??? ki???n PIANO</a>
                  <a href={`/search/${'phukienorgan'}`} class="dropdown-item">Ph??? ki???n ORGAN</a>
                  <a href={`/search/${'phukienguitar'}`} class="dropdown-item">Ph??? ki???n GUITAR</a>
                </DropdownButton>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown title="Gi??o d???c" id="basic-nav-dropdown" alignLeft className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show2}
            onMouseEnter={function (e) { showDropdown(2) }}
            onMouseLeave={function (e) { hideDropdown(2) }}
            onClick={function (e) { showDropdown(2) }}>
              
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c ????n Piano`}
                  show={showKHPiano}
                  onMouseEnter={function (e) { showDropdown(14) }}
                  onMouseLeave={function (e) { hideDropdown(14) }}
                  href={`/search/khoahocpiano`}
                  /* onClick = {function(){history.push(`/search/khoahocpiano`)}} */
                >
                  <a href={`/search/${'khoahocpianocoban'}`} class="dropdown-item">Piano c?? b???n</a>
                  <a href={`/search/${'khoahocpianonangcao'}`} class="dropdown-item">Piano n??ng cao</a>
                  <a href={`/search/${'demhatthanhca'}`} class="dropdown-item">?????m h??t th??nh ca</a>
                  <a href={`/search/${'demhatsolocover'}`} class="dropdown-item">?????m h??t Solo ??? Cover</a>
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c ????n Organ`}
                  show={showKHOrgan}
                  onMouseEnter={function (e) { showDropdown(15) }}
                  onMouseLeave={function (e) { hideDropdown(15) }}
                  href={`/search/khoahocorgan`}
                  /* onClick = {function(){history.push(`/search/khoahocorgan`)}} */
                >
                  <a href={`/search/${'khoahocOrgancoban'}`} class="dropdown-item">Organ c?? b???n</a>
                  <a href={`/search/${'khoahocOrgannangcao'}`} class="dropdown-item">Organ n??ng cao</a>
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c ????n Guitar`}
                  show={showKHGuitar}
                  onMouseEnter={function (e) { showDropdown(16) }}
                  onMouseLeave={function (e) { hideDropdown(16) }}
                  href={`/search/khoahocguitar`}
                  /* onClick = {function(){history.push(`/search/khoahocguitar`)}} */
                >
                  <a href={`/search/${'khoahocguitardemhat'}`} class="dropdown-item">Guitar ?????m h??t</a>
                  <a href={`/search/${'khoahocGuitarcodien'}`} class="dropdown-item">Guitar C??? ??i???n</a>
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c ????n Ukulele`}
                  href={`/search/khoahocukulele`}
                >
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c c???m th??? ??m nh???c`}
                  href={`/search/khoahoccamthuamnhac`}
                >
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Kh??a h???c thanh nh???c`}
                  href={`/search/khoahocthanhnhac`}
                >
                </DropdownButton>
              ))}
            </div>
            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Luy???n thi ?????i h???c ??? Nh???c vi???n`}
                  href={`/search/luyenthi`}
                >
                </DropdownButton>
              ))}
            </div>

            <div className="dropdown-item2">
              {['right'].map((direction) => (
                <DropdownButton
                className = "btn-block"
                block = "true"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`????o t???o nh???c c??ng`}
                  href={`/search/daotaonhaccong`}
                >
                </DropdownButton>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown title="S???a ch???a - B???o h??nh" id="basic-nav-dropdown" alignLeft className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show3}
            onMouseEnter={function (e) { showDropdown(3) }}
            onMouseLeave={function (e) { hideDropdown(3) }}
            onClick={function (e) { showDropdown(3) }}>
            <NavDropdown.Item href="/publishers/">S???a ch???a Piano c??</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">S???a ch???a Piano ??i???n</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">S???a ch???a Organ</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Cho Thu??" id="basic-nav-dropdown" alignRight className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show4}
            onMouseEnter={function (e) { showDropdown(4) }}
            onMouseLeave={function (e) { hideDropdown(4) }}
            onClick={function (e) { showDropdown(4) }}>
            <NavDropdown.Item href="/publishers/">D???ch v??? cho thu?? ????n Piano ??i???n ????? t???p t???i nh??</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thu?? ????n Piano</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thu?? ????n Organ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thu?? ????n Guitar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Cho thu?? Tr???ng</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">??m thanh ??? ??nh s??ng</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Tin T???c" id="basic-nav-dropdown" alignRight className="bg-blue btn-info"
            id="collasible-nav-dropdown"
            show={show5}
            onMouseEnter={function (e) { showDropdown(5) }}
            onMouseLeave={function (e) { hideDropdown(5) }}
            onClick={function (e) { showDropdown(5) }}>
            <NavDropdown.Item href="/publishers/">S??? ki???n</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">Video</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/publishers/">T?? V???n</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact">Li??n H???</Nav.Link>
        </Navbar.Collapse>
        <div className="col-lg-2 pr-0 pl-0 col-6 text-left">
          <form action>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="T??m ki???m"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={function (e) { handleKeyDown(e) }}
              />
              <a className="input-group-append" 
              onClick = {function(){history.push(`/search/title/${input}`)}}
              >
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search" />
                </span>
              </a>
            </div>
          </form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  )
}