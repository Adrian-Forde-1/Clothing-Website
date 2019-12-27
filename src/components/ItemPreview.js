import React from "react";
import uuid from "uuid/v1";
import { Link } from "react-router-dom";

const ItemPreview = ({ item }) => {
  let counter = 0;
  var canRun = true;
  var cycleSpeed = 1200;
  const uniqueItemId = uuid();
  const typeOfClothing = item.type;
  const section = item.gender;

  const changeImg = () => {
    const element = document.getElementById(uniqueItemId);
    const previewImages = element.querySelectorAll("img");

    // if (canRun) {
    //   counter = 1;
    //   cycleImages(previewImages);
    // }

    cyclingImages(previewImages);
  };

  const cyclingImages = previewImages => {
    if (canRun) {
      if (counter >= previewImages.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      setTimeout(() => {
        previewImages.forEach(image => {
          image.classList.remove("visibleImg");
        });
        makeVisible(previewImages, counter);
        cyclingImages(previewImages);
      }, cycleSpeed);
    } else {
      previewImages.forEach(image => {
        image.classList.remove("visibleImg");
      });
      previewImages[0].classList.add("visibleImg");
      counter = 0;
    }
  };

  const makeVisible = (previewImages, Imgindex) => {
    previewImages.forEach((image, index) => {
      if (index === Imgindex) image.classList.add("visibleImg");
    });
  };

  // const cycleImages = previewImages => {
  //   if (canRun) {
  //     if (counter < previewImages.length - 1) {
  //       setTimeout(() => {
  //         if (counter === 0) {
  //           previewImages[previewImages.length - 1].classList.remove(
  //             "visibleImg"
  //           );
  //           previewImages[counter].classList.add("visibleImg");
  //           counter++;
  //         } else {
  //           previewImages[counter - 1].classList.remove("visibleImg");
  //           previewImages[counter].classList.add("visibleImg");
  //           counter++;
  //         }
  //         return cycleImages(previewImages);
  //       }, cycleSpeed);
  //     }
  //     if (counter >= previewImages.length - 1) {
  //       setTimeout(() => {
  //         counter = previewImages.length - 1;
  //         previewImages[counter - 1].classList.remove("visibleImg");
  //         previewImages[counter].classList.add("visibleImg");
  //         counter = 0;
  //         return cycleImages(previewImages);
  //       }, cycleSpeed);
  //     }
  //   } else {
  //     for (let i = 0; i < previewImages.length; i++) {
  //       previewImages[i].classList.remove("visibleImg");
  //     }
  //     previewImages[0].classList.add("visibleImg");
  //     counter = 1;
  //   }
  // };

  const changeImgToColor = colorIndex => {
    const element = document.getElementById(uniqueItemId);
    const previewImages = element.querySelectorAll("img");

    for (let i = 0; i < previewImages.length; i++) {
      previewImages[i].classList.remove("visibleImg");
    }
    previewImages[colorIndex].classList.add("visibleImg");
  };

  const chaneImgBack = () => {
    const element = document.getElementById(uniqueItemId);
    const previewImages = element.querySelectorAll("img");

    for (let i = 0; i < previewImages.length; i++) {
      previewImages[i].classList.remove("visibleImg");
    }
    previewImages[0].classList.add("visibleImg");
  };

  return (
    <Link
      to={"/" + section + "/" + typeOfClothing + "/" + item.id}
      className="item-link col-6 col-lg-4 "
    >
      <div className="card item-preview mb-3 px-3" id={uniqueItemId}>
        <div
          className="d-flex justify-content-center item-preview-image-container"
          onMouseEnter={() => {
            canRun = true;
            changeImg();
          }}
          onMouseLeave={() => {
            canRun = false;
          }}
        >
          {item.images.map(img => {
            if (item.images.indexOf(img) === 0)
              return (
                <img
                  src={img.src}
                  className="individualImg img-fluid visibleImg"
                  key={uuid()}
                />
              );
            else
              return (
                <img
                  src={img.src}
                  className="individualImg img-fluid"
                  key={uuid()}
                />
              );
          })}
        </div>

        <div className="card-header d-flex mb-0">
          {item.images.map(color => {
            return (
              <div
                className="show-item-col mx-1"
                style={{ backgroundColor: color.color }}
                onMouseEnter={() =>
                  changeImgToColor(item.images.indexOf(color))
                }
                onMouseLeave={chaneImgBack}
                key={uuid()}
              ></div>
            );
          })}
        </div>

        <div className="card-body">
          <h6 className="card-title">{item.name}</h6>
          <p className="card-text price">
            <span>Price </span>${item.price} USD
          </p>
          {item.sale !== null ? (
            <p className="card-text sale">
              <span>Sale </span>${item.sale} USD
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ItemPreview;
