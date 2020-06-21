import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faDollarSign,
  faListUl,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
// import styled from '@emotion/styled'

const Listing = (props) => {
  const Cursor = {
    cursor:"pointer",
    display:"block"
  }
  // const properties = styled.div`
  //  width: 100vw;
  //   max-width: 600px;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  //   grid-column-gap: 1.5rem;
  //   grid-row-gap: 2rem;
  // `
  const loopListings = () => {
    const { data } = props;
    // const listings = props.data;
    if (data === undefined || data.length === 0) {
      return "Sorry your filter did not match any listings";
    }

    return data.map((listing, i) => {
      return (
        <article className="Article" key={i}>
          <div className="single-items">
            <div className="Info">
              <div className="ImageContainer" style ={{height:props.globalState.view === "box" ? "15rem" : "18rem"}}>
                <img
                  className="Image"
                  src={listing.image}
                  alt="this is gabriel"
                />
              </div>
              <address className="Address">{listing.address}</address>
              <div className="Container-listing">
                <div className="AgentListing">
                  <div className="AgentDetail">
                    <div className="ImgAgent">
                      <img
                        className="ImgPhoto "
                        src={listing.ImgAgent}
                        alt="imgphoto"
                      />
                    </div>
                    <div className="ImgAgentDetail">
                      <p>{listing.name}</p>
                      <p>{listing.post}</p>
                      <span>{listing.bedrooms} bedrooms</span>
                      <p className="ViewListing"> View listing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location">
              <p>
                    <FontAwesomeIcon  icon={faDollarSign} />
                <span className="Span">{listing.price}</span>
              </p>
              <p>
                <FontAwesomeIcon  icon={faMapMarker} />
                <span className="Span-1">{listing.city}</span>
              </p>
            </div>
          </div>
        </article>
      );
    });
  };
  return (
    <section className="Section-listing">
      <div>
        <div className="TitleContainer">
          <input className="Input" />
          <select className="Select-listing">
            <option>manassas</option>
            <option>fairfax</option>
          </select>
        </div>
        <div className="TitleContainer">
          <p>3920 result found</p>
          <select name="sortby" value={props.globalState.sortby} onChange={props.change}>
            <option value="price-asc" >Highest price</option>
            <option value="price-dsc" >Lowest price</option>
           
            
            
          </select>
          <div className="Icon">
            <div style={{ cursor:"pointer"}}>
              <FontAwesomeIcon icon={faListUl}  onClick ={ props.changeView.bind(null, "box")}/>
            </div>
            <div style={{ cursor:"pointer"}}>
              <FontAwesomeIcon icon={faTh} style={{ Cursor }} onClick={props.changeView.bind(null, "long")} />
            </div>
          </div>
        </div>
      </div>
      <div className="ConTitle">
        <h2 className="Title">these are all the properties</h2>
      </div>
      <div className="Properties" style={{ gridTemplateColumns: props.globalState.view === "box" ? "repeat(auto-fit, minmax(30%, 1fr))" :"repeat(auto-fit, minmax(100%, 1fr))" }}>{loopListings()}</div>
      <div className="Pagination">
        <ul className="Ul">
          <li className="Li">Prev</li>
          <li className="Li1">1</li>
          <li className="Li">2</li>
          <li className="Li">3</li>
          <li className="Li">4</li>
          <li className="Li">5</li>
          <li className="Li">Next</li>
        </ul>
      </div>
    </section>
  );
};

export default Listing;
