import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import PostItem from "../posts/PostItem";
import PostContext from "../../context/post/postContext";

const TrendingPosts = () => {
  const postContext = useContext(PostContext);
  const { trending, getTrendingPosts } = postContext;

  useEffect(() => {
    getTrendingPosts();
  }, []);

  if (trending === null) {
    return <h4>Please add a post</h4>;
  }

  return (
    <Container>
      <Title>
        Trending
        <hr className='hr' />
      </Title>
      <div className='container-div'>
        {trending.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </Container>
  );
};

export default TrendingPosts;

const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: grid;
  margin: 0 auto;
  /* border: 1px solid blue; */
  .container-div {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const Title = styled.h3`
  color: #8191a0;
  hr {
    border-top: rgb(235, 238, 240);
  }
`;
