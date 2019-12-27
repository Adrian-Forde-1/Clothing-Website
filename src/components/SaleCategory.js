import React, { useContext, useState, useEffect } from "react";
import { MenShirtContext } from "../contexts/MenShirtsContext";
import { MenJeansContext } from "../contexts/MenJeansContext";
import { MenShoesContext } from "../contexts/MenShoesContext";
import { WomenShirtsContext } from "../contexts/WomenShirtsContext";
import { WomenJeansContext } from "../contexts/WomenJeansContext";
import { WomenShoesContext } from "../contexts/WomenShoesContext";
import { Pagination } from "./Pagination";
import AnnouncementTag from "./AnnouncementTag";
import ItemPreview from "./ItemPreview";

const SaleCategory = () => {
  let clothing = [];
  let menClothes = [];
  let womenClothing = [];

  //Pagination
  let currentPage = 1;
  let postPerPage = 18;
  let indexOfLastClothe = currentPage * postPerPage;
  let indexOfFirstClothe = indexOfLastClothe - postPerPage;

  const [currentClothing, setCurrentClothing] = useState([]);

  useEffect(() => {
    setCurrentClothing([
      ...clothing.slice(indexOfFirstClothe, indexOfLastClothe)
    ]);
  }, []);

  const { menShirts } = useContext(MenShirtContext);
  const { menJeans } = useContext(MenJeansContext);
  const { menShoes } = useContext(MenShoesContext);
  menClothes = [...menShirts, ...menJeans, ...menShoes];
  menClothes = menClothes.filter(clothe => clothe.sale !== null);

  const { shirts } = useContext(WomenShirtsContext);
  const { jeans } = useContext(WomenJeansContext);
  const { shoes } = useContext(WomenShoesContext);
  womenClothing = [...shirts, ...jeans, ...shoes];
  womenClothing = womenClothing.filter(clothe => clothe.sale !== null);
  clothing = [...menClothes, ...womenClothing];

  const paginate = pageNumber => {
    //Sets the current page to the value passed by the child
    currentPage = pageNumber;
    //Change these values since the value they use has also change
    indexOfLastClothe = currentPage * postPerPage;
    indexOfFirstClothe = indexOfLastClothe - postPerPage;
    //Update currentClothes with the new values

    setCurrentClothing([
      ...clothing.slice(indexOfFirstClothe, indexOfLastClothe)
    ]);
    //When a page is clicked, scroll to the top
    window.scrollTo(0, 0);
  };

  console.log(currentClothing);

  return currentClothing.length ? (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="text-center mt-3">
        <h5>Sale</h5>
      </div>
      <div className="container mt-5">
        <div className="row">
          {currentClothing.map(clothe => {
            return <ItemPreview item={clothe} key={clothe.id} />;
          })}
        </div>
        <div className="d-flex justify-content-center w-100 mt-3">
          <Pagination
            postPerPage={postPerPage}
            totalPosts={clothing.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>There are no clothing currently for sale</div>
  );
};

export default SaleCategory;
