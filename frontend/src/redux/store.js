import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import modalReducers from './reducers/modal';
import loginReducers from './reducers/login';

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductsByPageReducer,
  getProductDetailsReducer,
  postProductReducer,
  getProductsByTypeReducer,
  updateProductReducer,
  getProductsByTitleReducer,
  getCountProductsReducer
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getCountProducts:getCountProductsReducer,
  getProductsbyPage: getProductsByPageReducer,
  getProductDetails: getProductDetailsReducer,
  createProduct: postProductReducer,
  getProductsByType: getProductsByTypeReducer,
  updateProduct: updateProductReducer,
  getProductsByTitle: getProductsByTitleReducer,
  modal: modalReducers,
  login: loginReducers,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  modal: {
    isShow: false,
  },
  login: {
    isShow: false,
  },
  detail: {
    isLoading: false,
    data: [],
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
