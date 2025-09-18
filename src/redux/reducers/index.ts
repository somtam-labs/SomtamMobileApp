import {combineReducers} from 'redux';
import Wallet from '././wallet';

// Reducers
const reducer = combineReducers({
  wallet: Wallet.reducer,
});

export default reducer;
