import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v1";
import AnnouncementTag from "./AnnouncementTag";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setInitialFavorites();
  }, []);

  const setInitialFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem("Favorites")));
  };

  return favorites.length > 0 ? (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="text-center mt-3">
        <h5>Favorites</h5>
      </div>
      <ul className="list-group mt-3 favorites-not-empty">
        {favorites.map(favorite => {
          let url = favorite.gender + "/";
          switch (favorite.type) {
            case "shirts":
              url = url + "shirts/" + favorite.id;
              break;
            case "jeans":
              url = url + "jeans/" + favorite.id;
              break;
            case "shoes":
              url = url + "shoes/" + favorite.id;
              break;
            default:
              break;
          }
          return (
            <li
              className="list-group-item favorite-container w-100"
              key={uuid()}
            >
              <Link to={url} className="favorites-link">
                <div className="col-2 mr-5 favorites-image-container">
                  <img
                    src={favorite.images[0].src}
                    alt=""
                    className="favorites-img"
                  />
                </div>
                <div className="favorite-info">
                  <h6>{favorite.name}</h6>
                  <p>Price: ${favorite.price} USD</p>
                  <p>
                    {favorite.sale !== null ? (
                      <span>Sale ${favorite.sale} USD</span>
                    ) : (
                      <span></span>
                    )}
                  </p>
                  <div className="d-flex col-10 display-items-size-container">
                    {favorite.sizes.map(size => {
                      return <div key={uuid()}>{size}</div>;
                    })}
                  </div>
                  <div></div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="w-100 d-flex justify-content-end mt-3">
        <button
          className="btn btn-sm btn-danger mr-5 mb-5"
          onClick={() => {
            localStorage.setItem("Favorites", JSON.stringify([]));
            setFavorites(JSON.parse(localStorage.getItem("Favorites")));
          }}
        >
          Remove All
        </button>
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="container mt-5 favorites-empty">
        There are currently no favorites
      </div>
    </div>
  );
};

export default Favorites;
