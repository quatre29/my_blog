import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import {
  GET_POSTS,
  GET_TRENDING_POSTS,
  POSTS_ERROR,
  GET_NEWEST_POSTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
      };
    case GET_TRENDING_POSTS:
      const sorted = action.payload.sort((a, b) => {
        if (a.likes > b.likes) return -1;
        if (a.likes < b.likes) return 1;
        return 0;
      });

      return {
        ...state,
        trending: sorted.slice(0, 4),
      };
    case GET_NEWEST_POSTS:
      return {
        ...state,
        newest: action.payload.slice(0, 3),
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
