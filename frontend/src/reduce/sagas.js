import { put, spawn, debounce, call, takeLatest } from "redux-saga/effects";
import * as ACTION_TYPE from "../action/types";
import * as ACTION from "../action/actions";

// import {getCaseId, get_xray, upload} from "../api";

// function filterSearchFieldAction({ type, payload }) {
//   return type === SEARCH_FIELD_CHANGE && payload.value.trim() !== "";
// }

// function* handleSearchFieldSaga(action) {
//   yield put(bookListRequest(action.payload.value));
// }

// function* watchSearchFieldSaga() {
//   yield debounce(1000, filterSearchFieldAction, handleSearchFieldSaga);
// }

// function* handleBookSearchSaga(action) {
//   try {
//     const data = yield call(bookListFetch, action.payload.search);
//     yield put(bookListSuccess(data.docs));
//   } catch (e) {
//     yield put(bookListFailure(e.message));
//   }
// }

// function* watchBookSearchSaga() {
//   yield takeLatest(BOOK_LIST_REQUEST, handleBookSearchSaga);
// }

export default function* saga() {
}
