import {call, put, takeEvery, all, select} from 'redux-saga/effects';

export default function* walletSaga() {
  yield all([
    // yield takeEvery(walletActions.CREATE_CARD, createCard),
    // yield takeEvery(walletActions.DESTROY_CARD, destroyCard),
    // yield takeEvery(walletActions.CREATE_BANK, createBank),
    // yield takeEvery(walletActions.DESTROY_BANK, destroyBank),
  ]);
}
