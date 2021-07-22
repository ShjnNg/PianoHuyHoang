import {Container} from "@material-ui/core";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import Shop from '../components/7.Shop/indexbytype';
import Product from '../components/6.product'
import Footer from '../components/Footer';
import React from 'react';

export default function ShopPageByType(text) {
    return (
    <Container maxWidth="xl" className = {{}} >
    <Header/>
    <NavBar />
    <Shop text={text}/>
    <Product/>
    <Footer/>
    </Container>
    
    );

}