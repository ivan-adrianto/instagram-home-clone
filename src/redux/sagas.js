import { all, call, put, takeLatest } from "redux-saga/effects";
import { getPostsFailure, getPostsSuccess } from "./actionCreators";
import { GET_POSTS_REQUEST } from "./actionTypes";
import { getPosts } from "./services/posts";

function* getPostsSaga() {
  try {
    const { data } = yield call(getPosts);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailure(error.response?.data.status_message));
  }
}

function* getPostsRequestSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPostsSaga);
}

export function* saga() {
  yield all([call(getPostsRequestSaga)]);
}
