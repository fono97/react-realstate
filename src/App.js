import React, { Component } from "react";
import Header from "./Component/header";
import data from "./Component/listingdata/data";
import Main from "./Component/main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      min_price: 0,
      max_price: 10000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gyms: true,
    };

    this.change = this.change.bind(this);
  }

  change({target}) {
    const { name, value, type, checked } = target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
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
        <h1>{console.log(this.state)}</h1>
      </div>
    );
  }
}
export default App;
