import React from 'react';
/* import { Link } from "react-router-dom"; */
/* import { Typography } from '@material-ui/core'; */
/* import useStyles from './styles'; */
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

/* import {useHistory} from 'react-router-dom'; */

export default function Header() {



const body = (
<div className="container-fluid">
    
    <div className="row  align-items-left bg-light px-xl-5 d-lg-flex">
      <div className="align-items-left px-xl-5 d-lg-flex text-left">
        <div className="align-items-left px-xl-5 d-lg-flex">
        <EmailIcon fontSize = "small"/>
        <h7 href="mailto:Huyhoangpiano@gmail.com" className = "text-center">huyhoangpiano@gmail.com</h7>
        </div>
        <div className="align-items-left px-xl-5 d-lg-flex">
          <PhoneIcon fontSize = "small"/>
          <h7 className = "text-center">0934 825 780</h7>
        </div>
      </div>
      

      {/* <div className="align-items-center px-xl-5 d-lg-flex text-right">
        <div className="d-flex">
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-facebook-f" /></a>
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square mr-2"><i className="fab fa-linkedin-in" /></a>
          <a href="https://www.facebook.com/daynhactaidanang" target="blank" className="btn btn-primary btn-square"><i className="fab fa-instagram" /></a>
        </div> 
      </div> */}

    </div>
    
  </div>
);
  return (
    <div>
      {body}
      
    </div>
  );
}
