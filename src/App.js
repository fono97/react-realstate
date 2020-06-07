import React, { Component } from "react";
import Header from "./Components/header.js";
import Filter from "./Components/Filter.js";
import Listing from "./Components/listing.js";


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
