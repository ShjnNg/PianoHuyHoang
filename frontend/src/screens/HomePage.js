import React from 'react';
import { Container } from '@material-ui/core';
/* import { useDispatch } from 'react-redux'; */
import NavBar from '../components/2.NavBar';
import Carousel from '../components/3.Carousel';
import Featured from '../components/4.Feature';
import Category from '../components/5.category';
import Product from '../components/6.product'
import Vendor from '../components/Vendor';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomePage() {




  return (
    <Container maxWidth='xl' className = {{}}>
      <Header />
      <NavBar/>
      <Carousel/>
      <Featured/>
      <Category/>
      <Product/>
      <Vendor/>
      <Footer/>
      
    </Container>
  );
}
