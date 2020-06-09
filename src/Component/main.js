import React from "react";
import Filter from "./filter";
import Listing from "./listing";
import styled from "@emotion/styled";
const Main = () => {
  const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  return (
    <MainContent>
      <Filter />
      <Listing />
    </MainContent>
  );
};

export default Main;
