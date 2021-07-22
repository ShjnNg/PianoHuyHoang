import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createProduct, hideModal  } from '../../redux/actions/productActions';

 
export default function CreatePostModal() {
  const modalState$ = (state) => state.modal;
  const [data, setData] = React.useState({
    title: '',
    content: '',
    attachment: '',
    cost: 0,
    size: 0,
    color: 'Đen',
    description: '',
    type: '',
    likeCount: 0,
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();
  // const [type, setType] = React.useState('');
  // const handleChange = (event) => {
  //   setType(event.target.value);
  // };
  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: '',
      content: '',
      attachment: '',
      cost: 0,
      size: 0,
      color: '',
      description: '',
      type: '',
      likeCount: 0,
    });/* window.location.reload(); */
  }, [dispatch]);
  
  const onSubmit = React.useCallback(() => {
    /* console.log(data); */
    dispatch(createProduct(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Tạo mới sản phẩm</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.title}
          required
          label='Tên sản phẩm'
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={3}
          rowsMax={10}
          placeholder='Mô tả'
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <TextareaAutosize
          className={classes.cost}
          required
          placeholder='Giá'
          value={data.cost}
          onChange={(e) => setData({ ...data, cost: e.target.value })}
        />
        <TextareaAutosize
          className={classes.size}
          required
          placeholder='Kích cỡ'
          value={data.size}
          onChange={(e) => setData({ ...data, size: e.target.value })}
        />
        <TextareaAutosize
          className={classes.color}
          required
          placeholder='Màu sắc'
          value={data.color}
          onChange={(e) => setData({ ...data, color: e.target.value })}
        />
        <TextareaAutosize
          className={classes.description}
          rowsMin={3}
          rowsMax={10}
          placeholder='Thông tin chi tiết'
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <InputLabel id="demo-simple-select-label">Loại</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
        >
          <MenuItem value={'Pianoyamaha'}>Piano Yamaha</MenuItem>
          <MenuItem value={'Pianonobel'}>Piano Nobel</MenuItem>
          <MenuItem value={'PianoCasio'}>Piano Casio</MenuItem>
          <MenuItem value={'PianoAstorHorwood'}>Piano Astor & Horwood</MenuItem>
          <MenuItem value={'PianoColumbia'}>Piano Columbia</MenuItem>
          <MenuItem value={'PianoDynatone'}>Piano Dynatone</MenuItem>
          <MenuItem value={'PianoKawai'}>Piano Kawai</MenuItem>
          <MenuItem value={'PianoKorg'}>Piano Korg</MenuItem>
          <MenuItem value={'PianoCo'}>Piano Cơ</MenuItem>
          <MenuItem value={'PianoGiaCo'}>Piano giả cơ</MenuItem>
          <MenuItem value={'Pianokhac'}>Piano khác</MenuItem>
          <MenuItem value={'OrganYamaha'}>Organ Yamaha</MenuItem>
          <MenuItem value={'OrganKurztman'}>Organ Kurztman</MenuItem>
          <MenuItem value={'OrganCasio'}>Organ Casio</MenuItem>
          <MenuItem value={'Organkhac'}>Organ khác</MenuItem>
          <MenuItem value={'GuitarYamaha'}>Guitar Yamaha</MenuItem>
          <MenuItem value={'GuitarTaylor'}>Guitar Taylor</MenuItem>
          <MenuItem value={'GuitarFENDER'}>Guitar FENDER</MenuItem>
          <MenuItem value={'GuitarROSEN'}>Guitar ROSEN</MenuItem>
          <MenuItem value={'GuitarEko'}>Guitar Eko</MenuItem>
          <MenuItem value={'GuitarMelodica'}>Kèn Melodica</MenuItem>
          <MenuItem value={'GuitarMC'}>Guitar M-C</MenuItem>
          <MenuItem value={'Guitarkhac'}>Guitar khác</MenuItem>
          <MenuItem value={'UkuleleMahalo'}>Ukulele Mahalo</MenuItem>
          <MenuItem value={'Ukulelekhac'}>Ukulele khác</MenuItem>
          <MenuItem value={'ViolinYamaha'}>Violin Yamaha</MenuItem>
          <MenuItem value={'ViolinValencia'}>Violin Valencia</MenuItem>
          <MenuItem value={'Violinkhac'}>Violin khác</MenuItem>
          <MenuItem value={'trongdienYamaha'}>Trống điện Yamaha</MenuItem>
          <MenuItem value={'trongdienHITMAN'}>Trống điện HITMAN</MenuItem>
          <MenuItem value={'trongAcoutisYamaha'}>Trống Acoutis Yamaha</MenuItem>
          <MenuItem value={'Kèn-sáo'}>ken</MenuItem>
          <MenuItem value={'Phụ kiện'}>phukien</MenuItem>
          <MenuItem value={'Sữa chữa'}>suachua</MenuItem>
        </Select>

        {/* <TextareaAutosize
          className={classes.type}
          required
          placeholder='type...'
          value={data.type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
        /> */}
        <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >Create
          </Button>
          
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
