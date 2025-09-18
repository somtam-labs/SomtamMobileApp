import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  saveCards: [],
  currentCard: null,
  logo: [],
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    CREATE_CARD: data => {
      console.log('CREATE_CARD reducer ', {data});
    },
    DESTROY_CARD: (state, action) => {
      console.log('DESTROY_CARD reducer ', {state});
    },
    ADD_CARD: (state: any, action) => {
      console.log('ADD_CARD ' + action.payload);
      state.saveCards = [...state.saveCards, action.payload];
    },
    SET_CURRENT_CARD: (state, action) => {
      console.log(action.payload);
      state.currentCard = {
        ...action.payload,
      };
    },
    REMOVE_CARD: (state: any, action) => {
      console.log('REMOVE_CARD ', {state}, {action});
      const index = state.saveCards.indexOf(action.payload.data);
      if (index > -1) {
        state.saveCards.splice(index, 1); // 2nd parameter means remove one item only
      }
      console.log('state:', state.saveCards);
      console.log('remove card index:', index);
      console.log('remove card result:', state.saveCards);
      console.log('show action payload data:', action.payload.data);
    },
  },
});

export const walletActions = wallet.actions;

export default wallet;
