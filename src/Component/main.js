import React from "react";
import Filter from "./filter";
import Listing from "./listing";
import styled from "@emotion/styled";
const Main = () => {
  const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    background-color:#f2f2f2;
    width: 100vw;
  `;
  return (
    <MainContent>
      <Filter />
      <Listing />
    </MainContent>
  );
};

export default Main;
