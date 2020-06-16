import React from "react";
const Filter = (props) => {
  return (
    <section className="Section">
      <div className="CenterBox">
        <h4 className="Title">Filter</h4>
        <div className="Container">
          <select
            className=" Select"
            name="neighborhood"
            value={props.globalState.neighborhood}
            onChange={props.change}
          >
            <option className="Option" value="fairfax">
              fairfax
            </option>
            <option className="Option" value="Manassas">
              Manassas
            </option>
            <option className="Option" value="Miami">
              Miami
            </option>
          </select>
        </div>
        <div className="Container">
          <select
            className="Select"
            name="housetype"
            value={props.globalState.housetype}
            onChange={props.change}
          >
            <option className="Option" value="Ranch">
              {" "}
              Ranch
            </option>
            <option className="Option" value="Apartment">
              {" "}
              Apartment
            </option>
            <option className="Option" value="Studio">
              {" "}
              Studio
            </option>
            <option className="Option" value="Room">
              {" "}
              Room
            </option>
          </select>
        </div>
        <div className="Container">
          <select
            className="Select"
            name="bedrooms"
            onChange={props.change}
            value={props.globalState.bedrooms}
          >
            <option className="Option" value="2">
              {" "}
              2 BR
            </option>
            <option className="Option" value="3">
              {" "}
              3 BR
            </option>
            <option className="Option" value="4">
              {" "}
              4 BR
            </option>
          </select>
        </div>
        <div className="SpaceContainer">
          <div className="Container">
            <span className="Span">Price</span>
            <input
              className=" InputMin"
              type="text"
              name="min_price"
              value={props.globalState.min_price}
              onChange={props.change}
            />
            <input
              className="InputMax"
              type="text"
              name="max_price"
              value={props.globalState.max_price}
              onChange={props.change}
            />
          </div>
          <div className="Container">
            <span className=" Span">Floor space</span>
            <input
              className="InputMin"
              type="text"
              name="min_floor_space"
              value={props.globalState.min_floor_space}
              onChange={props.change}
            />
            <input
              className="InputMax"
              type="text"
              name="max_floor_space"
              value={props.globalState.max_floor_space}
              onChange={props.change}
            />
          </div>
        </div>
        <div className="SpaceContainer">
          <h4>extras</h4>
          <label className=" Label" htmlFor="extras">
            <label className="LabelText">Elevator</label>
            <input
              className="Checkout"
              onChange={props.change}
              name="elevator"
              type="checkbox"
              checked={props.globalState.elevator}
            />
          </label>
          <label className="Label" htmlFor="extras">
            <label className="LabelText">Swimming Pool</label>
            <input
              className="Checkout"
              name="swimming_pool"
              checked={props.globalState.swimming_pool}
              type="checkbox"
              onChange={props.change}
            />
          </label>
          <label className="Label" htmlFor="extras">
            <label className="LabelText">finished Basement</label>
            <input
              className="Checkout"
              name="finished_basement"
              checked={props.globalState.finished_basement}
              type="checkbox"
              onChange={props.change}
            />
          </label>
          <label lassName="Label" htmlFor="extras">
            <label className="LabelText">gyms</label>
            <input
              className="Checkout"
              name="gyms"
              type="checkbox"
              checked={props.globalState.gyms}
              onChange={props.change}
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filter;
