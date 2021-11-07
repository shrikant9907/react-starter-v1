import api from "../_services/Api";
import * as actionTypes from "../_actionTypes";

// Fetch Posts Action - Using Array Function
export const fetch_posts = () => (dispatch) => {
    const response = api.get("/posts");
    dispatch(set_post(response))
}

// Add Post Action - Using Array Function
export const add_post = (data) => {
  return {
    type: actionTypes.ADD_POST,
    payload: data
  }
}

// Edit Post Action - Using Array Function
export const edit_post = (postId, data) => {
  return {
    type: actionTypes.EDIT_POST,
    payload: {
      id: postId,
      post: data
    }
  }
}

// Delete Post Action - Using Array Function
export const delete_post = (postid) => {
  return {
    type: actionTypes.DELETE_POST,
    payload: postid
  }
}

// SET Post Action - Using Array Function
export const set_post = (data) => {
  return {
    type: actionTypes.SET_POST,
    payload: data
  }
}

// Action for Increment Counter
export function increment() {
    return {
        type: 'INCREMENT'
    }
}

// Action for Decrement Counter
export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

// Action for Reset Counter
export function reset() {
    return {
        type: 'RESET'
    }
}  