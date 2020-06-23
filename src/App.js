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
      gyms: false,
      filteredData: data,
      populateFormData: {},
      sortby: "price-dsc",
      view: "box",
      search: "",
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForm = this.populateForm.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  UNSAFE_componentWillMount() {
    let data = this.state.data.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      data,
    });
  }
  changeView(viewName) {
    this.setState({
      view: viewName,
    });
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
    }
    if (this.state.sortby === "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.sortby === "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search !== "") {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase();
        let searchText = this.state.search.toLowerCase();
        let n = city.match(searchText);
        if (n !== null) {
          return true;
        }
        
      });
    }

    this.setState({
      filteredData: newData,
    });
  }

  populateForm() {
    //city
    let cities = this.state.data.map((item) => {
      return item.city;
    });
    cities = new Set(cities);
    console.log(cities.size);
    cities = [...cities];
    cities.sort();
    //hometype
    let homeType = this.state.data.map((item) => {
      return item.homeType;
    });
    homeType = new Set(homeType);
    homeType = [...homeType];
    homeType.sort();
    // bedrooms
    let bedrooms = this.state.data.map((item) => {
      return item.bedrooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms.sort();
    this.setState(
      {
        populateFormData: {
          homeType,
          bedrooms,
          cities,
        },
      },
      () => {
        console.log(this.state.populateFormData);
      }
    );
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
          populateAction={this.populateForm}
          changeView={this.changeView}
        />
      </div>
    );
  }
}
export default App;
