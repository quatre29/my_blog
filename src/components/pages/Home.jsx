import React from "react";
import styled from "styled-components";

import TrendingPosts from "../layout/TrendingPosts";
import NewestPosts from "../layout/NewestPosts";

const Home = () => {
  return (
    <Container>
      <TrendingPosts />
      <NewestPosts />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
