import {Container} from "@material-ui/core";
import Header from '../components/Header';
import NavBar from '../components/2.NavBar';
import Contact from '../components/9.Contact';
import Footer from '../components/Footer';
import React from 'react';

export default function ContactPage() {
    return (
    <Container maxWidth="xl" className = {{}}>
    <Header/>
    <NavBar/>
    <Contact/>
    <Footer/>
    </Container>
    
    );

}