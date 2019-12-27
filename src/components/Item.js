import React, { useContext, useState, useEffect } from "react";
import { MenShirtContext } from "../contexts/MenShirtsContext";
import uuid from "uuid/v1";

const Item = props => {
  const { shirts } = useContext(MenShirtContext);
  const id = props.match.params.item_id;
  const item = shirts.find(shirt => shirt.id === id);

  const [size, setSize] = useState(item.sizes[0]);
  const [color, setColor] = useState(item.images[0].color);
  useEffect(() => {
    console.log("Current Size: " + size);
    console.log("Current Color: " + color);
  }, [size, color]);

  const uniqueSizeContainerId = uuid();
  const uniqueColorContainerId = uuid();
  const uniqueImageContainerId = uuid();

  const changeSize = index => {
    const sizeContainer = document.getElementById(uniqueSizeContainerId);
    const sizes = sizeContainer.getElementsByTagName("div");

    for (let i = 0; i < sizes.length; i++) {
      sizes[i].classList.remove("active");
    }
    sizes[index].classList.add("active");

    setSize(sizes[index].innerHTML);
  };

  const changeImgByColor = index => {
    const imageContainer = document.getElementById(uniqueImageContainerId);
    const images = imageContainer.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }

    images[index].classList.add("active");
    setColor(item.images[index].color);
  };

  return item ? (
    <div className="item container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 show-image" id={uniqueImageContainerId}>
          {item.images.map(image => {
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
        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
          <h1 className="mb-3 item-name">{item.name}</h1>
          <p className="mb-3 item-description">{item.description}</p>
          <p className="mb-3 item-colors">Colors</p>
          <div className="d-flex mb-3" id={uniqueColorContainerId}>
            {item.images.map(color => {
              return (
                <div
                  className="show-item-col mx-1"
                  style={{ backgroundColor: color.color }}
                  key={uuid()}
                  onClick={() => changeImgByColor(item.images.indexOf(color))}
                ></div>
              );
            })}
          </div>
          <p className="mb-3 item-size">Sizes</p>
          <div
            className="d-flex mb-3 item-size-container"
            id={uniqueSizeContainerId}
          >
            {item.sizes.map(size => {
              if (item.sizes.indexOf(size) === 0)
                return (
                  <div
                    className="show-size mr-3 active"
                    key={uuid()}
                    onClick={() => {
                      changeSize(item.sizes.indexOf(size));

                      {
                        /* const sizeContainer = document.getElementById(
                        uniqueSizeContainerId
                      );
                      const sizes = sizeContainer.getElementsByTagName("div");
                      setSize();

                      setSize(sizes[item.sizes.indexOf(size)].innerHTML); */
                      }
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

                    {
                      /* const sizeContainer = document.getElementById(
                      uniqueSizeContainerId
                    );
                    const sizes = sizeContainer.getElementsByTagName("div");
                    setSize();

                    setSize(sizes[item.sizes.indexOf(size)].innerHTML); */
                    }
                  }}
                >
                  {size}
                </div>
              );
            })}
          </div>
          <p className="mb-3">{item.sale ? item.sale : item.price}</p>
          <button className="add-to-cart-btn">Add To Cart</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Something Went Wrong </div>
  );
};

export default Item;
