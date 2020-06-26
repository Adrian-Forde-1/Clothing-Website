import React, { Component } from 'react';
import { MenJeansContext } from '../../contexts/MenJeansContext';
import uuid from 'uuid/v1';
import AnnouncementTag from '../AnnouncementTag';
import { FavoritesContext } from '../../contexts/FavoritesContext';

class MenJeansItem extends Component {
  state = {
    size: '',
    color: '',
    colorIndex: 0,
    favorited: false,
  };

  static contextType = MenJeansContext;

  componentDidMount() {
    const { menJeans } = this.context;
    const id = this.props.match.params.item_id;
    const item = menJeans.find((jean) => jean.id === id);
    this.size = item.sizes[0];
    this.color = item.images[0].color;
    console.log('called');

    let currentFavorites = localStorage.getItem('Favorites');
    currentFavorites = JSON.parse(currentFavorites);
    let hasFavorite = currentFavorites.some(
      (favorite) => favorite.id === item.id
    );

    this.setState(
      {
        size: item.sizes[0],
        color: item.images[0].color,
        favorited: hasFavorite,
      },
      () => {
        const favoriteButtonContainer = document.querySelector(
          '.favorite-toggle-btn'
        );
        if (this.state.favorited === true) {
          favoriteButtonContainer.classList.add('isFavorite');
        } else {
          favoriteButtonContainer.classList.remove('isFavorite');
        }
      }
    );
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { menJeans } = this.context;
    const id = this.props.match.params.item_id;
    const item = menJeans.find((jean) => jean.id === id);

    const uniqueSizeContainerId = uuid();
    const uniqueColorContainerId = uuid();
    const uniqueImageContainerId = uuid();

    const changeSize = (index) => {
      const sizeContainer = document.getElementById(uniqueSizeContainerId);
      const sizes = sizeContainer.getElementsByTagName('div');

      this.setState(
        {
          size: sizes[index].innerHTML,
        },
        () => {
          for (let i = 0; i < sizes.length; i++) {
            sizes[i].classList.remove('active');
          }
          sizes[index].classList.add('active');
        }
      );
    };

    const changeImgByColor = (index) => {
      const imageContainer = document.getElementById(uniqueImageContainerId);
      const images = imageContainer.getElementsByTagName('img');

      this.setState(
        {
          color: item.images[index].color,
          colorIndex: index,
        },
        () => {
          for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
          }

          images[index].classList.add('active');
          console.log(this.state);
        }
      );
    };

    // setInitialFavoriteColor = () => {

    // };

    return (
      <FavoritesContext.Consumer>
        {(favoritesContext) => {
          const { favoriteDispatch } = favoritesContext;

          const addCart = () => {
            let currentCart = localStorage.getItem('Cart');
            let quantityChange = false;
            currentCart = JSON.parse(currentCart);

            currentCart.map((cart) => {
              if (
                cart.id === item.id &&
                this.state.size === cart.size &&
                this.state.color === cart.color
              ) {
                cart.quantity++;
                quantityChange = true;
              }
            });

            if (quantityChange === true) {
              localStorage.setItem('Cart', JSON.stringify(currentCart));
            } else {
              const newCart = [
                ...currentCart,
                {
                  name: item.name,
                  size: this.state.size,
                  color: this.state.color,
                  price: item.price,
                  sale: item.sale,
                  image: item.images[this.state.colorIndex].src,
                  id: item.id,
                  quantity: 1,
                },
              ];

              localStorage.setItem('Cart', JSON.stringify(newCart));
            }

            //Popup
            const popupContainer = document.querySelector(
              '.added-to-cart-popup'
            );
            popupContainer.classList.add('cart-popup-visible');
            setTimeout(() => {
              popupContainer.classList.remove('cart-popup-visible');
            }, 1000);
          };
          const addFavorite = (e) => {
            let currentFavorites = localStorage.getItem('Favorites');
            currentFavorites = JSON.parse(currentFavorites);
            let hasFavorite = currentFavorites.some(
              (favorite) => favorite.id === item.id
            );

            if (hasFavorite === false) {
              this.setState(
                (prevState, props) => ({
                  favorited: true,
                }),
                () => {
                  const favoriteButtonContainer = document.querySelector(
                    '.favorite-toggle-btn'
                  );
                  favoriteButtonContainer.classList.add('isFavorite');
                  setFavorite();
                }
              );
            } else {
              this.setState(
                (prevState, props) => ({
                  favorited: false,
                }),
                () => {
                  const favoriteButtonContainer = document.querySelector(
                    '.favorite-toggle-btn'
                  );
                  favoriteButtonContainer.classList.remove('isFavorite');
                  setFavorite();
                }
              );
            }
          };

          const setFavorite = () => {
            if (this.state.favorited === true) {
              let currentFavorites = localStorage.getItem('Favorites');
              currentFavorites = JSON.parse(currentFavorites);
              currentFavorites = [...currentFavorites, item];
              localStorage.setItem(
                'Favorites',
                JSON.stringify(currentFavorites)
              );
              {
                /* favoriteDispatch({ type: "ADD_FAVORITE", favorite: item }); */
              }
            } else {
              let currentFavorites = localStorage.getItem('Favorites');
              currentFavorites = JSON.parse(currentFavorites);
              currentFavorites = currentFavorites.filter(
                (favorite) => favorite.id !== item.id
              );
              localStorage.setItem(
                'Favorites',
                JSON.stringify(currentFavorites)
              );
              {
                /* favoriteDispatch({ type: "REMOVE_FAVORITE", favorite: item }); */
              }
            }
          };
          return (
            <div>
              <div className="container-fluid">
                <AnnouncementTag />
              </div>
              <div className="item container mt-5 mb-5">
                <div className="row">
                  <div
                    className="col-12 col-lg-6 show-image"
                    id={uniqueImageContainerId}
                  >
                    {item.images.map((image) => {
                      if (item.images.indexOf(image) === 0)
                        return (
                          <img
                            src={image.src}
                            className="item-img img-fluid active"
                            alt=""
                            key={uuid()}
                          />
                        );
                      return (
                        <img
                          src={image.src}
                          alt=""
                          className="item-img img-fluid"
                          key={uuid()}
                        />
                      );
                    })}
                  </div>
                  <div className="col-12 col-lg-6 mt-5 mt-lg-0 px-5 px-sm-0">
                    <h1 className="mb-3 item-name">{item.name}</h1>
                    <p className="mb-3 item-description">{item.description}</p>
                    <p className="mb-3 item-colors">Colors</p>
                    <div className="d-flex mb-3" id={uniqueColorContainerId}>
                      {item.images.map((color) => {
                        if (color.color === 'White') {
                          return (
                            <div
                              className="show-item-col mx-1 border border-dark"
                              style={{ backgroundColor: color.color }}
                              key={uuid()}
                              onClick={() =>
                                changeImgByColor(item.images.indexOf(color))
                              }
                            ></div>
                          );
                        } else {
                          return (
                            <div
                              className="show-item-col mx-1"
                              style={{ backgroundColor: color.color }}
                              key={uuid()}
                              onClick={() =>
                                changeImgByColor(item.images.indexOf(color))
                              }
                            ></div>
                          );
                        }
                      })}
                    </div>
                    <p className="mb-3 item-size">Sizes</p>
                    <div
                      className="d-flex mb-4 item-size-container"
                      id={uniqueSizeContainerId}
                    >
                      {item.sizes.map((size) => {
                        if (item.sizes.indexOf(size) === 0)
                          return (
                            <div
                              className="show-size mr-3 active"
                              key={uuid()}
                              onClick={() => {
                                changeSize(item.sizes.indexOf(size));
                              }}
                            >
                              {size}
                            </div>
                          );
                        return (
                          <div
                            className="show-size mr-3"
                            key={uuid()}
                            onClick={() => {
                              changeSize(item.sizes.indexOf(size));
                            }}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                    <p className="mb-4">Price: ${item.price} USD</p>
                    <p className="mb-4 sale">
                      {item.sale ? (
                        <span>Sale ${item.sale} USD</span>
                      ) : (
                        <span></span>
                      )}
                    </p>
                    <div className="added-to-cart-popup">
                      Item was added to cart
                    </div>
                    <button className="add-to-cart-btn" onClick={addCart}>
                      Add To Cart
                    </button>
                    <button
                      className="favorite-toggle-btn"
                      onClick={addFavorite}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </FavoritesContext.Consumer>
    );
  }
}

export default MenJeansItem;
