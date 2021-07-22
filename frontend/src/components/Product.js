import "./Product.css";
import { Link } from "react-router-dom";
import {CardMedia} from '@material-ui/core';
import useStyles from '../components/7.Shop/style';

const Product = ({ _id, content, cost, title, productId, attachment }) => {
  const classes = useStyles();
  
  return (
    <div className="product" href = {`/product/${productId}`}>
      <CardMedia className="img-fluid w-100"
                      image={attachment || ''}
                      title='Title'
                      className={classes.media}
      />

      <div className="product__info">
        <p className="info__name">{title}</p>

        <p className="info__description">{content}</p>

        <p className="info__price">{cost}$</p>

        <Link to={`/product/${productId}`} className="info__button">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default Product;
