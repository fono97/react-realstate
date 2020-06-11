import React, { Component } from "react";
import Main from "./Component/main";
import Header from "./Component/header";
import data from "./Component/listingdata/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gyms: false,
    };
    this.change = this.change.bind(this);
  }
  change(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={this.state.data}
          change={this.change}
          globalstate={this.state}
        />
      </div>
    );
  }
}
export default App;
