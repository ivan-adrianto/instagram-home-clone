import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  LIKE_POST,
  SAVE_POST,
  SET_MODAL,
  SET_RECEIVERS,
  SET_SCROLL_HOME,
  SET_SUGGESTION_LIST,
  SET_TOAST_MESSAGE,
  SUBMIT_COMMENT,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./actionTypes";

export const getPostsRequest = (payload) => {
  return {
    type: GET_POSTS_REQUEST,
    payload,
  };
};

export const getPostsSuccess = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    data,
  };
};

export const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error,
  };
};

export const likePost = (payload) => {
  return {
    type: LIKE_POST,
    payload,
  };
};

export const unlikePost = (payload) => {
  return {
    type: UNLIKE_POST,
    payload,
  };
};

export const savePost = (payload) => {
  return {
    type: SAVE_POST,
    payload,
  };
};

export const unsavePost = (payload) => {
  return {
    type: UNSAVE_POST,
    payload,
  };
};

export const setScrollHome = (payload) => {
  return {
    type: SET_SCROLL_HOME,
    payload,
  };
};

export const submitComment = (payload) => {
  return {
    type: SUBMIT_COMMENT,
    payload,
  };
};

export const setSuggestionList = (payload) => {
  return {
    type: SET_SUGGESTION_LIST,
    payload,
  };
};

export const setReceivers = (payload) => {
  return {
    type: SET_RECEIVERS,
    payload,
  };
};

export const setToastMessage = (payload) => {
  return {
    type: SET_TOAST_MESSAGE,
    payload,
  };
};

export const setModal = (payload) => {
  return {
    type: SET_MODAL,
    payload,
  };
};