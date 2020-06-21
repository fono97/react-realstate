import React from "react";
class Filter extends React.Component {
  constructor() {
    super();
    this.cities = this.cities.bind(this);
    this.homeType = this.homeType.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.props.populateAction();
  }
  cities() {
    if (this.props.globalState.populateFormData.cities !== undefined) {
      const { cities } = this.props.globalState.populateFormData;
      return cities.map((item) => {
        return (
          <option key={item} className="Option" value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeType() {
    if (this.props.globalState.populateFormData.homeType !== undefined) {
      const { homeType } = this.props.globalState.populateFormData;
      return homeType.map((item) => {
        return (
          <option key={item} className="Option" value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormData.bedrooms !== undefined) {
      const { bedrooms } = this.props.globalState.populateFormData;
      return bedrooms.map((item) => {
        return (
          <option key={item} className="Option" value={item}>
            {item} +BR
          </option>
        );
      });
    }
  }
  render() {
    return (
      <section className="Section">
        <div className="CenterBox">
          <h4 className="Title">Filter</h4>
          <div className="Container">
            <select
              className=" Select"
              name="city"
              // value={this.props.globalState.city}
              onChange={this.props.change}
            >
              <option className="Option" value="All">
                All homes
              </option>
              {this.cities()}
            </select>
          </div>
          <div className="Container">
            <select
              className="Select"
              name="homeType"
              // value={this.props.globalState.homeType}
              onChange={this.props.change}
            >
              <option className="Option" value="All">
                {" "}
                All
              </option>
              {this.homeType()}
            </select>
          </div>
          <div className="Container">
            <select
              className="Select"
              name="bedrooms"
              onChange={this.props.change}
              value={this.props.globalState.bedrooms}
            >
              {this.bedrooms()}
            </select>
          </div>
          <div className="SpaceContainer">
            <div className="Container">
              <span className="Span">Price</span>
              <input
                className=" InputMin"
                type="text"
                name="min_price"
                value={this.props.globalState.min_price}
                onChange={this.props.change}
              />
              <input
                className="InputMax"
                type="text"
                name="max_price"
                value={this.props.globalState.max_price}
                onChange={this.props.change}
              />
            </div>
            <div className="Container">
              <span className=" Span">Floor space</span>
              <input
                className="InputMin"
                type="text"
                name="min_floor_space"
                value={this.props.globalState.min_floor_space}
                onChange={this.props.change}
              />
              <input
                className="InputMax"
                type="text"
                name="max_floor_space"
                value={this.props.globalState.max_floor_space}
                onChange={this.props.change}
              />
            </div>
          </div>
          <div className="SpaceContainer">
            <h4>extras</h4>
            <label className=" Label" htmlFor="extras">
              <label className="LabelText">Elevator</label>
              <input
                className="Checkout"
                onChange={this.props.change}
                name="elevator"
                value="elevator"
                type="checkbox"
                checked={this.props.globalState.elevator}
              />
            </label>
            <label className="Label" htmlFor="extras">
              <label className="LabelText">Swimming Pool</label>
              <input
                className="Checkout"
                name="swimming_pool"
                checked={this.props.globalState.swimming_pool}
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label className="Label" htmlFor="extras">
              <label className="LabelText">finished Basement</label>
              <input
                className="Checkout"
                name="finished_basement"
                checked={this.props.globalState.finished_basement}
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
            <label className="Label" htmlFor="extras">
              <label className="LabelText">gyms</label>
              <input
                className="Checkout"
                name="gyms"
                type="checkbox"
                checked={this.props.globalState.gyms}
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
