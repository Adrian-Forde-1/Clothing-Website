import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenFilterShirts = props => {
  //Initialising the ustStates
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const [highPrice, setHighPrice] = useState("");
  const [lowPrice, setLowPrice] = useState("");
  const [price, setPrice] = useState("");

  //useEffect is called whenever a use state value is changed
  useEffect(
    () => {
      //Storing the values stored in useState in the sessionStorage
      sessionStorage.setItem("sizeFilter", JSON.stringify(sizes));
      sessionStorage.setItem("colorFilter", JSON.stringify(colors));
      sessionStorage.setItem("highPriceFilter", JSON.stringify(highPrice));
      sessionStorage.setItem("lowPriceFilter", JSON.stringify(lowPrice));
      sessionStorage.setItem("price", JSON.stringify(price));

      //Calling the fillterClothes thats stored as a props that was passed down to this function
      props.filterClothes();
    },
    //If one or more of these variables change, useEffect will be called
    [sizes, colors, lowPrice, highPrice, price]
  );

  //This function checks the id of the element that called it to determine which filter to use
  const filter = e => {
    //If the elements id is size do this
    if (e.currentTarget.id === "size") {
      //Checks to see if the elements has the class "selected-size"
      //If it does continue, if it doesn't, go to the else
      if (e.currentTarget.classList.contains("selected-size")) {
        //If it does remove it to give the effect that it was deselected
        e.currentTarget.classList.remove("selected-size");
        //Remove the childNodes value from sizes
        //Since the element who's id is "size" does not have an innerHTML to compare since its the container
        //I compared the innerHTML of it's first childNode since it only has one child and that child's
        //innerHTMl is what is used as values for the variable sizes
        const newSizes = sizes.filter(
          size => size != e.currentTarget.childNodes[0].innerHTML
        );
        //Changes the variable size with the update set of values
        setSizes(newSizes);
      } else {
        //Add the class "selected-size" to the element that was clicked
        e.currentTarget.classList.add("selected-size");
        //Creates a new array and copies the values from sizes onto it
        const newSizes = [...sizes];
        //Pushes the first childNodes innerHTML onto the new array
        newSizes.push(e.currentTarget.childNodes[0].innerHTML);
        //Sets size to the new array using setSizes
        setSizes(newSizes);
      }
    }

    //If the elements id is color do this
    if (e.currentTarget.id === "color") {
      //Chechs to see if the element clicked contains either of two classes
      if (
        e.currentTarget.classList.contains("selected-col") ||
        e.currentTarget.classList.contains("selected-col-dark")
      ) {
        //If it does it checks if the element clicked is equal to "White"
        //If it is, it removes the class "selected-col-dark"
        //If it is not, it removes the class "selected-col"
        e.currentTarget.childNodes[0].innerHTML === "White"
          ? e.currentTarget.classList.remove("selected-col-dark")
          : e.currentTarget.classList.remove("selected-col");
        //Created a new array which will be equal to a filtered version of colors
        //Checks to see if the colors current stored in the variable colors match the element that was clicked
        //first childNode's innerHTML
        const newColors = colors.filter(
          color => color != e.currentTarget.childNodes[0].innerHTML
        );
        //Changes the colors variable to the newColors array
        setColors(newColors);
      }
      //This is run if the if statement condition is false
      else {
        //Checks if the element clicks is equal to "White"
        //If it is, it adds the class "selected-col-dark"
        //If it is not, it adds the class "selected-col"
        e.currentTarget.childNodes[0].innerHTML === "White"
          ? e.currentTarget.classList.add("selected-col-dark")
          : e.currentTarget.classList.add("selected-col");
        //Creates a new array called newColors and copy the values from the variable colos onto it
        const newColors = [...colors];
        //Add the the element that was clicks childNode's innerHTML onto the newColors array
        newColors.push(e.currentTarget.childNodes[0].innerHTML);
        //Sets the colors variable to the newColors array
        setColors(newColors);
      }
    }

    //If the elements id is price do this
    if (e.currentTarget.id === "price") {
      //Creating variables
      let newPrice = "";
      let cleanPrice = "";
      //If the element that was clicked containes the class "selected-price" then run the if statement
      //If it doesn't, run the else
      if (e.currentTarget.classList.contains("selected-price")) {
        //Removes the class "selected-price" from the element
        e.currentTarget.classList.remove("selected-price");
        //Sets the cleanPrice variable to nothing
        cleanPrice = "";
        //Sets the price variable to cleanPrice
        setPrice(cleanPrice);
      } else {
        //Set the lowPrice and highPrice variable to nothing
        setLowPrice("");
        setHighPrice("");
        //Get the elements tha has the class inputs
        const inputs = document.querySelectorAll("#input-price");
        //Loop through the inputs and set their value to nothing
        inputs.forEach(input => (input.value = ""));
        //Gets the parent node of the target that was clicked
        //Then gets all the child nodes of the parent node and loop through them
        e.currentTarget.parentNode.childNodes.forEach(child => {
          //For each child, remove the class "Selected Price"
          child.classList.remove("selected-price");
        });

        //Adds the class "selected-price" to give the appearance of being selected
        e.currentTarget.classList.add("selected-price");
        //Sets the newPrice variable to the innerHTML of the elements childNode
        newPrice = e.currentTarget.childNodes[0].innerHTML;
        //Loops through newPrice and removes all values thats not a number
        for (let i = 0; i < newPrice.length; i++) {
          isNaN(newPrice.charAt(i))
            ? //If the char at the current index is a number, it is added to the variable cleanPrice
              (cleanPrice = cleanPrice)
            : (cleanPrice = cleanPrice + newPrice.charAt(i));
        }
        //Sets the price variable to cleanPrice
        setPrice(cleanPrice);
      }
    }
  };

  const filterByPrice = e => {
    //Get all the elements with the id "#price" and store them in a variable called priceDivs
    const priceDivs = document.querySelectorAll("#price");
    //Loops through priceDivs and for each price in priceDiv, remove the class "selected-price"
    //Each price in priceDives is an element
    priceDivs.forEach(price => {
      price.classList.remove("selected-price");
    });
    //Setting the variable price to nothing
    setPrice("");
    //Set the variable lowPrice to the current innerHTML of the element that was clicked,
    //parentNode's first child's value
    setLowPrice(e.currentTarget.parentNode.childNodes[0].value);
    //Set the variable lowPrice to the current innerHTML of the element that was clicked,
    //parentNode's first child's value
    setHighPrice(e.currentTarget.parentNode.childNodes[2].value);
  };

  const expand = e => {
    //Getting the element with the id of the element that was clicked id and storing it in the expandButton variable
    const expandButton = document.getElementById(e.currentTarget.id);
    //Getting the parent of the variable expandButton and storing it in a variable called parent
    const parent = expandButton.parentNode;
    //Searches for an element with the class "smenu" thats inside the parentDiv
    //If it finds one, it is assigned to the variable menu
    const menu = parent.querySelector(".smenu");
    //If the element that was clicked id's is equal to any of the three, do something
    if (
      e.target.id === "colors" ||
      e.target.id === "size" ||
      e.target.id === "price"
    )
      //Toggle the called "expandExtra" on the menu variable if the element that was clicked's
      //id was equal to one of the previous three
      menu.classList.toggle("expandExtra");
    //If the element that was clicked's id was not equal to one of the three, then do this
    else menu.classList.toggle("expand");
  };

  return (
    <div className="container">
      <div className="menu">
        <li className="item">
          <button
            id="offers"
            className="menu-button text-left"
            onClick={expand}
          >
            Offers
            <span className="badge text-white">
              <i className="fas fa-plus"></i>
            </span>
          </button>
          <div className="smenu">
            <Link to="/sale">Sale</Link>
          </div>
        </li>
        <li className="item">
          <button
            id="category"
            className="menu-button text-left"
            onClick={expand}
          >
            Catergory
            <span className="badge text-white">
              <i className="fas fa-plus"></i>
            </span>
          </button>
          <div className="smenu">
            <Link to="/men/shirts">Shirts</Link>
            <Link to="/men/jeans">Jeans</Link>
            <Link to="/men/shoes">Shoes</Link>
          </div>
        </li>
        <li className="item">
          <button id="size" className="menu-button text-left" onClick={expand}>
            Size
            <span className="badge text-white">
              <i className="fas fa-plus"></i>
            </span>
          </button>
          <div className="smenu">
            <div className="size-holder">
              <div
                className="w-100 size-filter mt-2"
                id="size"
                onClick={filter}
              >
                <p className="lead">S</p>
              </div>
              <div
                className="w-100 size-filter mt-2"
                id="size"
                onClick={filter}
              >
                <p className="lead">M</p>
              </div>
              <div
                className="w-100 size-filter mt-2"
                id="size"
                onClick={filter}
              >
                <p className="lead">L</p>
              </div>
              <div className="w-100 size-filter" id="size" onClick={filter}>
                <p className="lead">XL</p>
              </div>
              <div className="w-100 size-filter" id="size" onClick={filter}>
                <p className="lead">XXL</p>
              </div>
              <div className="w-100 size-filter" id="size" onClick={filter}>
                <p className="lead">3XL</p>
              </div>
              <div className="w-100 size-filter" id="size" onClick={filter}>
                <p className="lead">4XL</p>
              </div>
              <div className="w-100 size-filter" id="size" onClick={filter}>
                <p className="lead">5XL</p>
              </div>
            </div>
          </div>
        </li>
        <li className="item">
          <button
            id="colors"
            className="menu-button text-left"
            onClick={expand}
          >
            Colors
            <span className="badge text-white">
              <i className="fas fa-plus"></i>
            </span>
          </button>
          <div className="smenu">
            <div className="container">
              <div className="row color-container">
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Red" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Red</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Green" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Green</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Blue" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Blue</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Orange" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Orange</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Brown" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Brown</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Purple" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Purple</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "Black" }}
                  id="color"
                  onClick={filter}
                >
                  <p>Black</p>
                </div>
                <div
                  className="col-4"
                  className="color"
                  style={{ backgroundColor: "White", color: "Black" }}
                  id="color"
                  onClick={filter}
                >
                  <p>White</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="item">
          <button id="price" className="menu-button text-left" onClick={expand}>
            Price
            <span className="badge text-white">
              <i className="fas fa-plus"></i>
            </span>
          </button>
          <div className="smenu">
            <div className="price-holder">
              <div className="w-100 price-filter" id="price" onClick={filter}>
                <p className="lead">$10+</p>
              </div>
              <div className="w-100 price-filter" id="price" onClick={filter}>
                <p className="lead">$20+</p>
              </div>
              <div className="w-100 price-filter" id="price" onClick={filter}>
                <p className="lead">$30+</p>
              </div>
              <div className="w-100 price-filter" onClick={filter}>
                <form>
                  <div className="d-flex px-2">
                    <input
                      type="text"
                      className="mx-3 text-center"
                      id="input-price"
                      onChange={filterByPrice}
                    />
                    -
                    <input
                      type="text"
                      className="mx-3 text-center"
                      id="input-price"
                      onChange={filterByPrice}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default MenFilterShirts;
