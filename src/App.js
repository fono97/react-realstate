import React, { Component } from "react";
import Header from "./Component/header";
import data from "./Component/listingdata/data";
import Main from "./Component/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
      city: "All",
      homeType: "All",
      bedrooms: "0",
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gyms: true,
      filteredData: data,
      populateFormData:[]
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForm = this.populateForm.bind(this)
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
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.bedrooms > this.state.bedrooms
      );
    });
    if (this.state.city !== "All") {
      newData = newData.filter((item) => {
        return item.city === this.state.city;
      });
      if (this.state.homeType !== "All") {
        newData = newData.filter((item) => {
          return item.homeType === this.state.homeType;
        });
      }

      this.setState({
        filteredData: newData,
      });
    }
  }
  populateForm(){
    //city
    let cities= this.state.data.map(()=>{
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    //hometype
    let homeType = this.state.data.map(() => {
      return item.city
    })
    homeType = new Set(homeType)
    homeType = [...homeType]
    // bedrooms
    let bedrooms = this.state.data.map(() => {
      return item.city
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    this.setState({
      populateFormData:{
        homeType,
        bedrooms,
        cities
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          change={this.change}
          globalState={this.state}
          data={this.state.filteredData}
          populateAction = {this.populateForm}
        />
      </div>
    );
  }
}
export default App;
