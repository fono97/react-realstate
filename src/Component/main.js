import React from "react";
import Listing from "./listing";
import Filter from "./filter";

const Main = (props) => {
  return (
    <section className="section-main">
      <Filter globalState={props.globalState} change={props.change} />
      <Listing data={props.data} />
    </section>
  );
};

export default Main;
