import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import CityDetails from "./CityDetails";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";

function Cites(props) {
  const [cityId, setCityId] = useState("297");
  const [cityName, setCityName] = useState("Adelaide");
  function handleChange(e) {
    var sel = document.getElementById("select_id");
    setCityId(e.target.value);
    setCityName(sel.options[sel.selectedIndex].text);
  }

  function handleCollectionClick(e) {
    e.preventDefault();
    props.history.push(`/collections/${cityName}/${cityId}`);
  }

  return (
    <div>
      <div className="alisar">
        <div className="logo">Alisar</div>
        <h1>Discover The Best Restaurants In Cities, Australia</h1>
        <form className="searchBar">
          <div className="listBox">
            <select
              id="select_id"
              className="city form-control"
              onChange={(e) => handleChange(e)}
            >
              <option value="0" hidden>
                Select City
              </option>
              <option value="297" name="Adelaide">
                Adelaide
              </option>
              <option value="260" name="Sydney">
                Sydney
              </option>
              <option value="259" name="Melbourne">
                Melbourne
              </option>
              <option value="298" name=" Brisbane">
                Brisbane
              </option>
              <option value="1323" name="Darwin">
                Darwin
              </option>
              <option value="296" name="Perth">
                Perth
              </option>
            </select>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="cityName">
          <h3>Best rated restaurant in {cityName}</h3>
        </div>
        <CityDetails cityId={cityId} cityName={cityName} />
        <div className="cityName">
          <h3>Popular restaurants in {cityName}</h3>
        </div>
        <div className="row">
          <div className="col">
            <div class="card mb-4">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={food1} alt="..." className="cityCard" />
                </div>
                <div class="col-md-8 ">
                  <div class="card-body cardBody">
                    <h5 class="card-title">Collections</h5>
                    <p class="card-text">
                      Explore curated lists of top restaurants, cafes, pubs, and
                      bars in {cityName}, based on trends
                    </p>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={(e) => handleCollectionClick(e)}
                    >
                      All collections in {cityName}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card mb-4">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={food2} alt="..." className="cityCard" />
                </div>
                <div class="col-md-8">
                  <div class="card-body cardBody">
                    <h5 class="card-title">Restaurants</h5>
                    <p class="card-text">
                      Search for your favorite dish and find restaurants
                      filtered by cuisines and category in {cityName}
                    </p>
                    <button type="button" class="btn btn-outline-danger">
                      Restaurants in {cityName}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col bg-light">
          <h3 className="cityName">Alisar 2021</h3>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Cites);
