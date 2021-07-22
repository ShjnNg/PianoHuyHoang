import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import Shop from '../components/12.ManagePost/ShopManager';
import useStyles from './styles';
import { showModal } from '../redux/actions/productActions';
import { showLogIn } from '../redux/actions/productActions';
import CreatePostModal from '../components/CreatePostModal';
import LogInModal from '../components/CreatePostModal/Login';
import { y } from '../components/CreatePostModal/Login';
import { useEffect } from "react";

export var x = 0;
export default function HomePage() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  const openLogInModal = React.useCallback(() => {
    if(y===0){
      dispatch(showLogIn());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(openLogInModal)
  }, [dispatch]);
  return (
    
    <Container maxWidth="xl" className = {{}}>\
      <Header />
      <Shop />  
      <LogInModal />
      <CreatePostModal/>
      <Fab
        color='primary'
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
