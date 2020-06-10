import React, { Component } from "react";
import Main from "./Component/main";
import Header from "./Component/header";
import data from "./Component/listingdata/data"




class App extends Component {
  constructor(){
    super()
    this.state = {
      data
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default App;
