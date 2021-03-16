import React, { useContext } from "react";
import PostContext from "../../context/post/postContext";
import styled from "styled-components";

const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts } = postContext;

  return <Container></Container>;
};

export default Posts;

const Container = styled.div``;
