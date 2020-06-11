import React from "react";
import Filter from "./filter";
import Listing from "./listing";
import styled from "@emotion/styled";
const Main = (props) => {
  const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    background-color:#f2f2f2;
    width: 100vw;
  `;
  return (
    <MainContent>
      <Filter  change= {props.change} globalState = {props.globalState}/>
      <Listing listing = {props.data}  />
    </MainContent>
  );
};

export default Main;
