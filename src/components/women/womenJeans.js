import React, { Component } from 'react';
import { WomenJeansContext } from '../../contexts/WomenJeansContext';
import { Pagination } from '../Pagination';
import WomenFilterJeans from './WomenFilterJeans';
import ItemPreview from '../ItemPreview';
import AnnouncementTag from '../AnnouncementTag';
import WomenSortBy from './WomenSortBy';

export class WomenJeans extends Component {
  //Getting the contenxt and assigning it
  static contextType = WomenJeansContext;

  //Calling the constructor for this component
  constructor(props) {
    super(props);

    //Assigning variables
    this.currentPage = 1;
    this.postPerPage = 6;
    this.componentLoaded = false;

    this.indexOfLastJean = this.currentPage * this.postPerPage;
    this.indexOfFirstJean = this.indexOfLastJean - this.postPerPage;

    //Declaring the state
    this.state = {
      filteredClothes: [],
      clothes: [],
      currentClothes: [],
    };
  }

  //When the components mounts for the first time run this function
  componentDidMount() {
    //Destructor jeans from the context curretly used
    let { jeans } = this.context;
    this.componentLoaded = true;

    //Using setState to set the change the values
    this.setState(
      {
        //Assigning clothes to jeans
        clothes: [...jeans],
      },
      () => {
        this.setState(
          {
            //Assigning filteredClothes to jeans
            filteredClothes: [...jeans],
          },
          //Using the second setState to assign currentClothes to a portion of filteredClothes
          () => {
            this.setState({
              currentClothes: this.state.filteredClothes.slice(
                this.indexOfFirstJean,
                this.indexOfLastJean
              ),
            });
          }
        );
      }
    );
  }

  render() {
    //Sets a function that will be passed as a props to get its value from a child component
    const paginate = (pageNumber) => {
      //Sets the current page to the value passed by the child
      this.currentPage = pageNumber;
      //Change these values since the value they use has also change
      this.indexOfLastJean = this.currentPage * this.postPerPage;
      this.indexOfFirstJean = this.indexOfLastJean - this.postPerPage;
      //Update currentClothes with the new values
      this.setState({
        currentClothes: this.state.filteredClothes.slice(
          this.indexOfFirstJean,
          this.indexOfLastJean
        ),
      });
      //When a page is clicked, scroll to the top
      window.scrollTo(0, 0);
    };

    //A function that helps with sorting objects
    function compareValues(key, order = 'asc') {
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
        let varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        let varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

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
        return order === 'desc' ? comparison * -1 : comparison;
      };
    }

    //A function that handle all the sorting done on the page
    const sortClothes = () => {
      //Gets the current sort selected from sessionStorage
      let currentSort = sessionStorage.getItem('currentSort');
      //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
      currentSort = JSON.parse(currentSort);

      //Checks to see if the current Sort selected is equal to "Featured"
      if (currentSort === 'Featured') {
        this.currentPage = 1;
        this.indexOfLastShirt = this.currentPage * this.postPerPage;
        this.indexOfFirstShirt = this.indexOfLastShirt - this.postPerPage;
        //Using setState to sort filteredClothes according to the sort currently selected
        this.setState((prevState, props) => ({
          filteredClothes: prevState.filteredClothes.sort(
            compareValues('featured')
          ),
        }));

        //Using setState to change currentClothes to be a secion of the newly sorted filteredClothes
        this.setState((prevState, props) => ({
          currentClothes: prevState.filteredClothes.slice(
            this.indexOfFirstShirt,
            this.indexOfLastShirt
          ),
        }));
      }

      //Checks to see if the current Sort selected is equal to "High to Low"
      if (currentSort === 'High to Low') {
        this.currentPage = 1;
        this.indexOfLastShirt = this.currentPage * this.postPerPage;
        this.indexOfFirstShirt = this.indexOfLastShirt - this.postPerPage;
        //Using setState to sort filteredClothes according to the sort currently selected
        this.setState((prevState, props) => ({
          filteredClothes: prevState.filteredClothes.sort(
            compareValues('price', 'desc')
          ),
        }));

        //Using setState to change currentClothes to be a secion of the newly sorted filteredClothes
        this.setState((prevState, props) => ({
          currentClothes: prevState.filteredClothes.slice(
            this.indexOfFirstShirt,
            this.indexOfLastShirt
          ),
        }));
      }

      //Checks to see if the current Sort selected is equal to "Low to High"
      if (currentSort === 'Low to High') {
        this.currentPage = 1;
        this.indexOfLastShirt = this.currentPage * this.postPerPage;
        this.indexOfFirstShirt = this.indexOfLastShirt - this.postPerPage;
        //Using setState to sort filteredClothes according to the sort currently selected
        this.setState((prevState, props) => ({
          filteredClothes: prevState.filteredClothes.sort(
            compareValues('price')
          ),
        }));

        //Using setState to change currentClothes to be a secion of the newly sorted filteredClothes
        this.setState((prevState, props) => ({
          currentClothes: prevState.filteredClothes.slice(
            this.indexOfFirstShirt,
            this.indexOfLastShirt
          ),
        }));
      }
    };

    //A function that handles all the filtering done on the page
    const filterClothes = () => {
      if (this.componentLoaded === true) {
        //Initialising all the variables from values stored in sessionStorage
        let sizes = sessionStorage.getItem('sizeFilter');
        //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
        sizes = JSON.parse(sizes);

        let colors = sessionStorage.getItem('colorFilter');
        //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
        colors = JSON.parse(colors);

        let highPrice = sessionStorage.getItem('highPriceFilter');
        //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
        highPrice = JSON.parse(highPrice);
        //Converting the variable to a float
        highPrice = parseFloat(highPrice);

        let lowPrice = sessionStorage.getItem('lowPriceFilter');
        //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
        lowPrice = JSON.parse(lowPrice);
        //Converting the variable to a float
        lowPrice = parseFloat(lowPrice);

        let price = sessionStorage.getItem('price');
        //Converting the JSON.stringify data from sessionStorage back using JSON.parse(the variable you want to convert back)
        price = JSON.parse(price);
        //Converting the variable to a float
        price = parseFloat(price);

        this.setState({
          filteredClothes: this.state.clothes,
        });

        if (sizes === null) sizes = [];
        if (colors === null) colors = [];

        //Checks to see if the user is filtering by size
        if (sizes.length > 0) {
          //Runs a setState function to filter filteredClothers
          this.setState(
            (prevState, props) => ({
              //Assigns filteredClothes to the filtered version of FilteredClothes
              filteredClothes: prevState.filteredClothes.filter((jean) => {
                //Creates a variable called hasSize ans sets it to 0
                let hasSize = 0;
                //Loops through all the sizes in each jean
                jean.sizes.map((size) => {
                  //Check to see if the size is included in the varible sizes - If it it add one to hasSize
                  sizes.indexOf(size) > -1 ? hasSize++ : (hasSize = hasSize);
                });
                //If hasSize is greater than or equal to one, that means that the jean has at least
                //one of the currently selected sizes
                if (hasSize >= 1) {
                  return true;
                } else return false;
              }),
            }),
            //After the setState is completed run this function
            () => {
              //Calls second setState to filter out all the undefined variables created during
              //the previous setState
              this.setState(
                {
                  filteredClothes: this.state.filteredClothes.filter(
                    (jean) => jean !== undefined
                  ),
                },
                //When the setState is completed, call the sortClothes functions which will sort
                //the array according to the currently selected sort
                sortClothes()
              );
            }
          );
        }

        //Checks to see if the user is filtering by color
        if (colors.length > 0) {
          //Runs a setState function to filter filteredClothers
          this.setState(
            (prevState, props) => ({
              //Assigns filteredClothes to the filtered version of FilteredClothes
              filteredClothes: prevState.filteredClothes.filter((jean) => {
                //Creates a variable called hasSize ans sets it to 0
                let hasColor = 0;
                //Loops through all the images in each jean because each image has a images source
                //and color assigned to it
                jean.images.map((image) => {
                  //Check to see if the color is included in the varible colors - If it it add one to hasSize
                  colors.indexOf(image.color) > -1
                    ? hasColor++
                    : (hasColor = hasColor);
                });
                //If hasSize is greater than or equal to one, that means that the jean has at least
                //one of the currently selected colors
                if (hasColor >= 1) return true;
                else return false;
              }),
            }),
            //After the setState is completed run this function
            () => {
              //Calls second setState to filter out all the undefined variables created during
              //the previous setState
              this.setState(
                {
                  filteredClothes: this.state.filteredClothes.filter(
                    (jean) => jean !== undefined
                  ),
                },
                //When the setState is completed, call the sortClothes functions which will sort
                //the array according to the currently selected sort
                sortClothes()
              );
            }
          );
        }

        //Checks to see if the user is filtering by price
        if (!isNaN(price)) {
          //Runs a setState function to filter filteredClothers
          this.setState(
            (prevState) => ({
              filteredClothes: prevState.filteredClothes.filter((jean) =>
                jean.sale ? jean.sale >= price : jean.price >= price
              ),
            }),
            () => {
              sortClothes();
            }
          );
        }

        //Checks to see if the user is filtering by lowPrice
        if (!isNaN(lowPrice)) {
          //Runs a setState function to filter filteredClothers
          this.setState(
            (prevState) => ({
              filteredClothes: prevState.filteredClothes.filter((jean) =>
                jean.sale ? jean.sale >= lowPrice : jean.price >= lowPrice
              ),
            }),
            () => {
              sortClothes();
            }
          );
        }

        //Checks to see if the user is filtering by highPrice
        if (!isNaN(highPrice)) {
          //Runs a setState function to filter filteredClothers
          this.setState(
            (prevState) => ({
              filteredClothes: prevState.filteredClothes.filter((jean) =>
                jean.sale ? jean.sale <= highPrice : jean.price <= highPrice
              ),
            }),
            () => {
              sortClothes();
            }
          );
        }

        //Checks to see if the user has an filtering selected. If they do, this would not run
        //If they don't, the currentClothes - which is a section out of all the clothes available to be rendered
        //will be reset to its initial value
        if (
          sizes.length === 0 &&
          colors.length === 0 &&
          isNaN(highPrice) &&
          isNaN(lowPrice) &&
          isNaN(price)
        ) {
          this.setState(
            //Runs setState to set filteredClothes to the initial value stored in prevState.clothes aka this.state.clothes
            (prevState, value) => ({
              //Setting filteredClothes to prevState.clothes
              filteredClothes: prevState.clothes,
            }),
            //When the setState is completed, call the sortClothes functions which will sort
            //the array according to the currently selected sort
            sortClothes()
          );
        }
      }
    };

    //Pagination
    return (
      <div>
        <div className="container-fluid">
          <AnnouncementTag />
        </div>
        <div className="container d-flex flex-column align-items-center">
          <div className="row w-100">
            <div className="col-6 d-none d-lg-block">
              <div className="row align-items-center">
                <h1 className="d-none d-lg-block col-12">Women's Jeans</h1>
              </div>
            </div>
            <div className="col-12 mb-5 mt-5 mt-lg-0">
              <WomenSortBy filterClothes={filterClothes} />
            </div>
            <p className="d-block col-12 col-12 text-right">
              <span className="lead mr-1">
                {this.state.filteredClothes.length}
              </span>
              Items in Men's jeans
            </p>
            <div className="col-lg-3 col-md-12 d-lg-block">
              <WomenFilterJeans filterClothes={filterClothes} />
            </div>
            {this.state.currentClothes.length ? (
              <div className="col-md-12 col-lg-9 mt-3 mt-lg-0">
                <div className="row">
                  {this.state.currentClothes.map((jean) => {
                    return <ItemPreview item={jean} key={jean.id} />;
                  })}
                </div>
              </div>
            ) : (
              <div>There are no jeans available</div>
            )}
          </div>
          <Pagination
            postPerPage={this.postPerPage}
            totalPosts={this.state.filteredClothes.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
}

export default WomenJeans;
