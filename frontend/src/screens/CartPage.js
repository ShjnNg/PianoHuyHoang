import {Container} from "@material-ui/core";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import Cart from '../components/10.Cart';
import Footer from '../components/Footer';
import React from 'react';

export default function CartPage() {
    return (
    <Container maxWidth="xl" className = {{}}>
    <Header/>
    <NavBar/>
    <Cart/>
    <Footer/>
    </Container>
    );

}