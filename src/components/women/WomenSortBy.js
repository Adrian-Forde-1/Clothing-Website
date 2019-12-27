import React, { useState, useEffect } from "react";

function WomenSortBy(props) {
  const [currentSort, setCurrentSort] = useState("Featured");

  useEffect(() => {
    sessionStorage.setItem("currentSort", JSON.stringify(currentSort));
    props.filterClothes();
  }, [currentSort]);

  const setDefault = () => {
    const containers = document.querySelectorAll("#sortContainer");
    containers[0].childNodes[0].classList.add("active-sort");
  };

  const expand = e => {
    const menu = document.querySelector(".sort-menu");
    menu.classList.toggle("expandExtra");
  };

  const chooseSort = e => {
    const containers = document.querySelectorAll("#sortContainer");
    containers.forEach(container =>
      container.childNodes[0].classList.remove("active-sort")
    );
    e.currentTarget.classList.add("active-sort");
    setCurrentSort(e.currentTarget.innerHTML);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <li className="item">
            <button
              className="menu-button menu-button-border text-center"
              onClick={expand}
            >
              {currentSort}
              <span className="badge text-white">
                <i className="fas fa-caret-down"></i>
              </span>
            </button>
            <div className="sort-menu d-flex flex-column" onLoad={setDefault}>
              <div
                className="mt-3 text-white text-left sort-smaller-text"
                id="sortContainer"
              >
                <p
                  className="btn d-block w-100 text-white"
                  onClick={chooseSort}
                >
                  Featured
                </p>
              </div>
              <div
                className="text-white text-left sort-smaller-text"
                id="sortContainer"
              >
                <p
                  className="btn d-block w-100 text-white"
                  onClick={chooseSort}
                >
                  High to Low
                </p>
              </div>
              <div
                className="text-white text-left sort-smaller-text"
                id="sortContainer"
              >
                <p
                  className="btn d-block w-100 text-white"
                  onClick={chooseSort}
                >
                  Low to High
                </p>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default WomenSortBy;
