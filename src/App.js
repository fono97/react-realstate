import React, { Component } from "react";
import Header from "./Component/header";
import Filter from "./Component/filter";
import Listing from "./Component/listing";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="content-area">
          <Filter/>
          <Listing/>
        </section>
      </div>
    );
  }
}
export default App;
