import React, { useReducer } from "react";
import PostsContext from "./postContext";
import PostsReducer from "./postReducer";
import mockupPosts from "../../mockup/mockup-posts";
import {
  GET_POSTS,
  GET_TRENDING_POSTS,
  POSTS_ERROR,
  GET_NEWEST_POSTS,
} from "../types";

const PostState = (props) => {
  const initialState = {
    posts: null,
    trending: null,
    newest: null,
    error: null,
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  //Get posts
  const getPosts = () => console.log("Getting posts");

  //Get trending posts
  const getTrendingPosts = () => {
    try {
      dispatch({
        type: GET_TRENDING_POSTS,
        payload: mockupPosts,
      });
    } catch (err) {
      dispatch({
        type: POSTS_ERROR,
        payload: err,
      });
    }
  };

  //Get newest posts
  const getNewestPosts = () => {
    try {
      dispatch({
        type: GET_NEWEST_POSTS,
        payload: mockupPosts,
      });
    } catch (err) {
      dispatch({
        type: POSTS_ERROR,
        payload: err,
      });
    }
  };

  //Create post
  const createPost = () => console.log("Create Post");

  //Delete Post
  const deletePost = () => console.log("Delete Post");

  //Update Post
  const updatePost = () => console.log("Update Post");

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        trending: state.trending,
        newest: state.newest,
        error: state.error,
        getTrendingPosts,
        getNewestPosts,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostState;
