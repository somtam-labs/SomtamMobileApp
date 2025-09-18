import {combineReducers} from 'redux';
import Auth from './auth';
import Wallet from '././wallet';

// Reducers
const reducer = combineReducers({
  auth: Auth.reducer,
  wallet: Wallet.reducer,
});

export default reducer;
