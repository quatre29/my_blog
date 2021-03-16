import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import PostContext from "../../context/post/postContext";
import PostItem from "../posts/PostItem";

const NewestPosts = () => {
  const postContext = useContext(PostContext);
  const { newest, getNewestPosts } = postContext;

  useEffect(() => {
    getNewestPosts();
  }, []);

  if (newest === null) {
    return <p>No posts can be found!</p>;
  }

  return (
    <Container>
      <Title>
        Newest Posts
        <hr className='hr' />
      </Title>
      <PostsContainer>
        {newest.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </PostsContainer>
    </Container>
  );
};

export default NewestPosts;

const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto;
  /* border: 1px solid blue; */
  /* .container-div {
    display: grid;
    grid-template-columns: auto auto;
  } */
`;

const Title = styled.h3`
  color: #8191a0;
  hr {
    border-top: rgb(235, 238, 240);
  }
`;

const PostsContainer = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
`;
