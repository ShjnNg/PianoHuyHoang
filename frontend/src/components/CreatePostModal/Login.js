import { Button, Modal, /* TextareaAutosize, */ TextField } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import {   hideLogIn  } from '../../redux/actions/productActions';

export var y = 0;
export default function LogInModal() {
   
  const loginState$ = (state) => state.login;
  const [data, setData] = React.useState({
    title: '',
    pass: ''
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(loginState$);
  const classes = useStyles();
  const onCloseLogin = React.useCallback(() => {
    dispatch(hideLogIn());
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    console.log("a");
    if(data.title === 'admin' && data.pass === '237lequangchi')
    {
        onCloseLogin();
        y=y+1;
    }else return;
  });



  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Đăng nhập</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Tài Khoản'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextField
          className={classes.title}
          required
          label='Mật khẩu'
          value={data.pass}
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >Tạo
          </Button>
          
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onCloseLogin}>
        {body}
      </Modal>
    </div>
  );
  
}
