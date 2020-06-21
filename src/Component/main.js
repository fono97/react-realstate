import React from "react";
import Listing from "./listing";
import Filter from "./filter";

const Main = (props) => {
  return (
    <main className="Main">
      <Filter
        globalState={props.globalState}
        change={props.change}
        populateAction={props.populateAction}
      />
      <Listing
        data={props.data}
        change={props.change}
        globalState={props.globalState}
        changeView = {props.changeView}
      />
    </main>
  );
};

export default Main;
