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
    this.change = this.change.bind(this)
  }
  change(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    },()=>{
      console.log(this.state)
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main data ={this.state.data} change = {this.change}/>
      </div>
    );
  }
}
export default App;

