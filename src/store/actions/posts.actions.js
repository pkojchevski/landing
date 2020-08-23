import * as actionTypes from "./actionTypes";
// import axios from "../../axios-posts";
import { POSTS } from '../../posts'

export const fetchPostsSuccess = posts => ({
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
});

export const fetchPostsFail = error => ({
    type: actionTypes.FETCH_POSTS_FAIL,
    error: error
});

export const fetchPostsStart = () => ({
    type: actionTypes.FETCH_POSTS_START
});

export const fetchPosts = () => dispatch => {
    dispatch(fetchPostsStart());
    return dispatch(fetchPostsSuccess(POSTS));
    // axios.get("/posts")
    //     .then(posts => {
    //         console.log('posts:', posts.data)
    //         return dispatch(fetchPostsSuccess(posts.data));
    //     }
    //     )
        // .catch(err => dispatch(fetchPostsFail(err)));
};