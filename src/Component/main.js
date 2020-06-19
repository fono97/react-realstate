import React from "react";
import Listing from "./listing";
import Filter from "./filter";

const Main = (props) => {
  return (
    <main className = "Main">
      <Filter globalState={props.globalState} change={props.change} />
      <Listing data={props.data} populateAction ={props.populateAction}  />
    </main>
  );
};

export default Main;
