import React, { useEffect, useState } from "react";
import getItems from "../fetchHelper";
import Loader from "./Loader";
import food from "../images/food1.jpeg";

const style = {
  width: "200px",
  height: "260px",
};

const style1 = {
  height: "150px",
};

function CityDetails({ cityId, cityName }) {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoad(false);
    getItems(`location_details?entity_id=${cityId}&entity_type=city`)
      .then((res) => {
        setRestaurants(res.best_rated_restaurant);
        setCuisines(res.top_cuisines);
        console.log(res.top_cuisines);
        console.log(cuisines);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
  }, [cityId]);

  if (load) {
    return (
      <div>
        {error ? (
          <h3>{error.message}</h3>
        ) : (
          <div>
            <div className="row row-cols-5">
              {restaurants.map((item) => (
                <div className="col mb-4" key={item.restaurant.id}>
                  <div className="card" style={style}>
                    {item.restaurant.featured_image ? (
                      <img
                        src={item.restaurant.featured_image}
                        className="card-img-top"
                        alt="..."
                        style={style1}
                      />
                    ) : (
                      <img
                        src={food}
                        className="card-img-top"
                        alt="..."
                        style={style1}
                      />
                    )}
                    <div className="card-body">
                      <h6 className="card-title text-danger">
                        {item.restaurant.name}
                      </h6>
                      <p className="card-text">
                        {item.restaurant.establishment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cityName">
              <h3>Top cuisines in {cityName}</h3>
            </div>
            <div className="row cityName">
              {cuisines.map((item, index) => (
                <div className="col">
                  <span
                    class="badge rounded-pill bg-light text-dark"
                    key={index}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default CityDetails;
