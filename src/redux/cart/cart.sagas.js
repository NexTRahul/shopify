import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionType from "../user/user.type";
import { clearCart } from "./cart.action";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
