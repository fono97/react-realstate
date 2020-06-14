import React, { Component } from "react";
import Header from "./Component/header";
import data from "./Component/listingdata/data";
import Main from "./Component/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    
    console.log(event.target.value);

    var name = event.target.name;
    var value =
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
          change={this.change}
          globalState={this.state}
          data={this.state.data}
          
        />
      </div>
    );
  }
}
export default App;
