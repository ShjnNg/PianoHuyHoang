import {Container} from "@material-ui/core";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import CheckOut from '../components/11.checkout';
import Footer from '../components/Footer';
import React from 'react';

export default function CheckOutPage() {
    return (
    <Container maxWidth="xl" className = {{}}>
    <Header/>
    <NavBar/>
    <CheckOut/>
    <Footer/>
    </Container>
    
    );

}