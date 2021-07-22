import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCountProductsReducer = (state = { count: Number }, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTPRODUCTS_REQUEST:
      return {
        loading: true,
        count: Number,
      };
    case actionTypes.GET_COUNTPRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_COUNTPRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductsByPageReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTSBYPAGE_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTSBYPAGE_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTSBYPAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductsByTypeReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_BYTYPE_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_BYTYPE_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_BYTYPE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductsByTitleReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_BYTITLE_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_BYTITLE_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_BYTITLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const postProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.CREATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case actionTypes.CREATE_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.UPDATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: state.data.map((product) =>
        product._id === action.payload._id ? action.payload : product
        ),
      };
    case actionTypes.UPDATE_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const delProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.DEL_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.DEL_PRODUCTS_SUCCESS: 
      return {
        ...state,
        product: [state.product.filter(product => product._id !== action.id)]
      };
    case actionTypes.DEL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};