import React, { Component } from "react";
import Header from "./Component/header";
import data from "./Component/listingdata/data";
import Main from "./Component/main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      city: "All",
      homeType: "All",
      bedrooms: "0 ",
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gyms: true,
      filteredData: data,
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }
  change(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value }, () => {
          console.log(this.state);
          this.filteredData();
        });
  }
  filteredData() {
    var newData = this.state.data.filter((item) => {
      return (
        item.price >= this.state.min_price && item.price <= this.state.max_price
      );
    });
    if (this.state.city !== "All") {
      newData = newData.filter((item) => {
        return item.city === this.state.city;
      });
    }
    this.setState({
      filteredData: newData,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Main
          change={this.change}
          globalState={this.state}
          data={this.state.filteredData}
        />
      </div>
    );
  }
}
export default App;
