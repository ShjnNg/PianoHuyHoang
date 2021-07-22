import {Container} from "@material-ui/core";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import Shop from '../components/7.Shop';
/* import Product from '../components/6.product' */
import Footer from '../components/Footer';
import React from 'react';

export default function ShopPage() {
    return (
    <Container maxWidth="xl" className = {{}}>
    <Header/>
    <NavBar/>
    <Shop/>
    {/* <Product/> */}
    <Footer/>
    </Container>
    
    );

}