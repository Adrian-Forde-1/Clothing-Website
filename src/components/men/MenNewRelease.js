import React, { useContext, useState, useEffect } from "react";
import AnnouncementTag from "../AnnouncementTag";
import { MenShirtContext } from "../../contexts/MenShirtsContext";
import { MenJeansContext } from "../../contexts/MenJeansContext";
import { MenShoesContext } from "../../contexts/MenShoesContext";
import { Pagination } from "../Pagination";
import ItemPreview from "../ItemPreview";
// import MenFilter from "./MenFilter";

const MenNewRelease = () => {
  const { shirts } = useContext(MenShirtContext);
  const { jeans } = useContext(MenJeansContext);
  const { shoes } = useContext(MenShoesContext);

  const currentPage = 1;
  const postPerPage = 6;
  let indexOfLastClothe = currentPage * postPerPage;
  let indexOfFirstClothe = indexOfLastClothe - postPerPage;

  let componentLoaded = false;

  let clothes = [...shirts, ...jeans, ...shoes];
  clothes = clothes.filter(clothe => clothe.newrelease === "new");
  const [filteredClothes, setFilteredClothes] = useState([clothes]);
  const [currentClothes, setCurrentClothes] = useState([]);

  useEffect(() => {
    componentLoaded = true;
    console.log(clothes);
    setCurrentClothes([
      ...filteredClothes.slice(indexOfFirstClothe, indexOfLastClothe)
    ]);
  }, []);

  useEffect(() => {
    setCurrentClothes([
      ...filteredClothes.slice(indexOfFirstClothe, indexOfLastClothe)
    ]);
  }, [filteredClothes]);

  //Sets a function that will be passed as a props to get its value from a child component
  const paginate = pageNumber => {
    //Sets the current page to the value passed by the child
    currentPage = pageNumber;
    //Change these values since the value they use has also change
    indexOfLastClothe = currentPage * postPerPage;
    indexOfFirstClothe = indexOfLastClothe - postPerPage;
    //Update currentClothes with the new values

    setCurrentClothes([
      ...filteredClothes.slice(indexOfFirstClothe, indexOfLastClothe)
    ]);
    //When a page is clicked, scroll to the top
    window.scrollTo(0, 0);
  };

  //A function that helps with sorting objects
  function compareValues(key, order = "asc") {
    //key = the key in the object that you want to sort by
    return function innerSort(a, b) {
      //a = first object
      //b = second object

      //Checks to see if the key entered belongs to the object
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      //If the value of the key is a string, convert it to uppercase to make comparsion easier
      let varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      let varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      //Convert the variable to a float to allow decimal points
      varA = parseFloat(varA);
      varB = parseFloat(varB);

      //Set a varible that will be used as a way of determining true or false
      let comparison = 0;
      //Compares the two values
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      //If the second parameter was used and changed to desc, the comparsion variable will be inverted
      //Causing the array to sort in descending order
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  //A function that handle all the sorting done on the page
  const sortClothes = () => {
    //Gets the current sort selected from sessionStorage
    let currentSort = sessionStorage.getItem("currentSort");
    //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
    currentSort = JSON.parse(currentSort);

    if (currentSort === "Featured") {
      setFilteredClothes(filteredClothes.sort(compareValues("featured")));
    }
    if (currentSort === "High to Low") {
      setFilteredClothes(filteredClothes.sort(compareValues("price", "desc")));
    }

    if (currentSort === "Low to High") {
      setFilteredClothes(filteredClothes.sort(compareValues("price")));
    }
  };

  //A function that handles all the filtering done on the page
  const filterClothes = () => {
    if (componentLoaded === true) {
      //Initialising all the variables from values stored in sessionStorage
      let sizes = sessionStorage.getItem("sizeFilter");
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      sizes = JSON.parse(sizes);

      let colors = sessionStorage.getItem("colorFilter");
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      colors = JSON.parse(colors);

      let highPrice = sessionStorage.getItem("highPriceFilter");
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      highPrice = JSON.parse(highPrice);
      //Converting the variable to a float
      highPrice = parseFloat(highPrice);

      let lowPrice = sessionStorage.getItem("lowPriceFilter");
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      lowPrice = JSON.parse(lowPrice);
      //Converting the variable to a float
      lowPrice = parseFloat(lowPrice);

      let price = sessionStorage.getItem("price");
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      price = JSON.parse(price);
      //Converting the variable to a float
      price = parseFloat(price);

      setFilteredClothes(clothes);

      if (sizes === null) sizes = [];
      if (colors === null) colors = [];

      if (sizes.length > 0) {
        let newFilter = filteredClothes.filter(clothe => {
          let hasSize = 0;
          clothe.sizes.map(size => {
            sizes.indexOf(size) > -1 ? hasSize++ : (hasSize = hasSize);
          });
          if (hasSize >= 1) return true;
          else return false;
        });

        newFilter = newFilter.filter(clothe => clothe !== undefined);
        setFilteredClothes(newFilter);
        sortClothes();
      }

      if (colors.length > 0) {
        let newFilter = filteredClothes.filter(clothe => {
          let hasColor = 0;
          clothe.images.map(image => {
            colors.indexOf(image.color) > -1
              ? hasColor++
              : (hasColor = hasColor);
          });
          if (hasColor >= 1) return true;
          else return false;
        });
        newFilter = newFilter.filter(clothe => clothe !== undefined);
        setFilteredClothes(newFilter);
        sortClothes();
      }

      if (!isNaN(price)) {
        let newFilter = filteredClothes.filter(clothe => {
          if (clothe.sale !== null)
            return parseFloat(clothe.sale) >= parseFloat(price);
          else return parseFloat(clothe.price) >= parseFloat(price);
        });
        setFilteredClothes(newFilter);
        sortClothes();
      }

      if (!isNaN(lowPrice)) {
        let newFilter = filteredClothes.filter(clothe => {
          if (clothe.sale !== null)
            return parseFloat(clothe.sale) >= parseFloat(lowPrice);
          else return parseFloat(clothe.price) >= parseFloat(lowPrice);
        });
        setFilteredClothes(newFilter);
        sortClothes();
      }

      if (!isNaN(highPrice)) {
        let newFilter = filteredClothes.filter(clothe => {
          if (clothe.sale !== null)
            return parseFloat(clothe.sale) <= parseFloat(highPrice);
          else return parseFloat(clothe.price) <= parseFloat(highPrice);
        });
        setFilteredClothes(newFilter);
        sortClothes();
      }
      if (
        sizes.length === 0 &&
        colors.length === 0 &&
        isNaN(highPrice) &&
        isNaN(lowPrice) &&
        isNaN(price)
      ) {
        setFilteredClothes(clothes);
        sortClothes();
      }
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <AnnouncementTag />
      </div>
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="row w-100">
          <div className="col-lg-3 col-md-12 d-lg-block">
            {/* <MenFilter filterClothes={filterClothes} /> */}
          </div>
          <div className="col-md-12 col-lg-9 mt-3 mt-lg-0">
            {currentClothes.length ? (
              <span>
                <h2>Men New Releases</h2>
              </span>
            ) : (
              <span></span>
            )}
            {currentClothes.length ? (
              <div className="row">
                {clothes.map(clothe => {
                  let testing = filteredClothes.slice(0, 6);
                  console.log(testing);
                  return <ItemPreview item={clothe} key={clothe.id} />;
                })}
              </div>
            ) : (
              <div>There are no clothes available</div>
            )}
          </div>
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={filteredClothes.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MenNewRelease;
