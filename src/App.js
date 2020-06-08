import React, { Component } from "react";
import Main from "./Component/main";
import Header from "./Component/header";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default App;
