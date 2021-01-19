import React, { useEffect, useState } from "react";
import getItems from "../fetchHelper";
import Loader from "./Loader";
import food from "../images/food1.jpeg";

const style = {
  width: "250px",
  height: "200px",
};

const style1 = {
  height: "200px",
};

function Collections(props) {
  const [collections, setCollections] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoad(false);
    getItems(`/collections?city_id=${props.match.params.id}`)
      .then((res) => {
        setCollections(res.collections);
        console.log(res);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
  }, [props.match.params.id]);

  if (load) {
    return (
      <div>
        {error ? (
          <h3>{error.message}</h3>
        ) : (
          <div className="container">
            <div className="row">
              <h3 className="col">Collections - {props.match.params.name}</h3>
            </div>
            <div className="row">
              <span className="col">
                Browse lists of the finest restaurants
              </span>
            </div>
            <div className="row row-cols-4">
              {collections.map((item) => (
                <div className="col mb-4" key={item.collection.collection_id}>
                  <div className="card" style={style}>
                    {item.collection.image_url ? (
                      <img
                        src={item.collection.image_url}
                        className="card-img"
                        alt="..."
                        style={style1}
                      />
                    ) : (
                      <img
                        src={food}
                        className="card-img"
                        alt="..."
                        style={style1}
                      />
                    )}
                    <div className="card-img-overlay overlay-dark text-white">
                      <p className="card-title collectionCard  fw-normal">
                        {item.collection.title}
                      </p>
                      <p className="card-text collectionCard text-white fw-normal">
                        {item.collection.res_count} Places
                      </p>
                    </div>
                  </div>
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

export default Collections;
