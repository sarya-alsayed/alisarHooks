import React, { useEffect, useState } from "react";
import getItems from "../fetchHelper";
import Loader from "./Loader";

const style = {
  width: "600px",
};

const style1 = {
  height: "200px",
};

function Restaurants({ cityId }) {
  const [restaurants, setRestaurants] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    getItems(`/search?entity_id=${cityId}&entity_type=city`)
      .then((res) => {
        setRestaurants(res.restaurants);
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
          restaurants.map((item) => (
            <div
              className="card  mb-4 ml-4"
              style={style}
              key={item.restaurant.id}
            >
              <img
                src={item.restaurant.featured_image}
                className="card-img-top"
                alt="..."
                style={style1}
              />
              <div className="card-body">
                <h5 className="card-title text-danger">
                  {item.restaurant.name}
                </h5>
                <p className="card-text">{item.restaurant.location.address}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <label className="text-secondary">CUISINES:</label>{" "}
                  {item.restaurant.cuisines}
                </li>
                <li className="list-group-item">
                  <label className="text-secondary">HOURS:</label>
                  {item.restaurant.timings}
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default Restaurants;
