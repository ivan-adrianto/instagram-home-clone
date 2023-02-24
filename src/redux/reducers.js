import contacts from "../dummyData/contacts";
import { locations } from "../dummyData/posts";
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

export const initialState = {
  posts: [],
  loading: false,
  error: null,
  scrollHome: 0,
  suggestions: contacts,
  receivers: [],
  toastMessage: "",
  modal: "",
};

export const rootReducer = (state = initialState, action) => {
  let posts = [...state.posts];
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      // add id, image, account, likes, and comments
      for (let i = 0; i < action.data.length; i++) {
        const item = action.data[i];
        item.id = i + 1;
        item.image = `https://picsum.photos/id/${i + 120}/400.jpg`;
        item.name = contacts[i].name;
        item.photo = contacts[i].photo;
        item.likes = Math.floor(Math.random() * 100);
        item.location = locations[i];
        item.liked = false;
        item.saved = false;
        for (let j = 0; j < item.choices.length; j++) {
          item.choices[j].name = contacts[j]?.name;
          item.choices[j].photo = contacts[j]?.photo;
        }
      }
      return {
        ...state,
        loading: false,
        posts: action.data,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        posts: null,
      };
    case LIKE_POST:
      posts[action.payload].liked = true;
      posts[action.payload].likes++;
      return {
        ...state,
        posts,
      };
    case UNLIKE_POST:
      posts[action.payload].liked = false;
      posts[action.payload].likes--;
      return {
        ...state,
        posts,
      };
    case SAVE_POST:
      posts[action.payload].saved = true;
      return {
        ...state,
        posts,
      };
    case UNSAVE_POST:
      posts[action.payload].saved = false;
      return {
        ...state,
        posts,
      };
    case SET_SCROLL_HOME:
      return {
        ...state,
        scrollHome: action.payload,
      };
    case SUBMIT_COMMENT:
      posts[action.payload.index].choices.unshift(action.payload.comment);
      return {
        ...state,
        posts,
      };
    case SET_SUGGESTION_LIST:
      let newSuggestions = contacts.filter((suggestion) =>
        suggestion.name.includes(action.payload)
      );
      return {
        ...state,
        suggestions: newSuggestions,
      };
    case SET_RECEIVERS:
      return {
        ...state,
        receivers: action.payload,
      };
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};
