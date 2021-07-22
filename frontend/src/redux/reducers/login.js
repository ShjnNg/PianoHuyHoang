import { INIT_STATE } from '../constant';
import { getType, hideLogIn, showLogIn } from '../actions/productActions';

export default function loginReducers(state = INIT_STATE.login, action) {
  switch (action.type) {
    case getType(showLogIn):
      return {
        isShow: true,
      };
    case getType(hideLogIn):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
