import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker } from '@fortawesome/free-brands-svg-icons' //this is used for a social media icon

import { faList, faTh, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Listing = () => {
  return (
    <section className="listing">
      <section className="search-area">
        <input type="text" name="search" />
      </section>
      <section className="sortby-area">
        <div>390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
        </div>
        <div>
          <FontAwesomeIcon icon={faList} />
          <FontAwesomeIcon icon={faTh} />
        </div>
      </section>
      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="Address">Address</span>
            <div className="details">
              <div className="user-img"></div>
              <div className="user-details">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">05/05/2017</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="fas fa-square"></i>
                  <span>1000 ft&sup2;</span>
                </div>
                <div className="bedrooms">
                  <i className="fas fa-bed"></i>
                  <span>3 bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span>$1000 / month</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faMapMarker} />
              Manassas
            </span>
          </div>
        </div>
      </section>
      <section className="pagination">
        <ul>
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>
  );
};

export default Listing;
