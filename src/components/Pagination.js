import React from "react";
import { Link } from "react-router-dom";

//Creating a functional component and destructoring the variable from it
export const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  //Creates a constant array
  const pageNumbers = [];
  //Adds all the needed page numbers using a for loop and minus the postPerPage by the totalPosts
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    //Push the current number which is represented as i to the pageNumbers array
    pageNumbers.push(i);
  }

  // const setPage = e => {
  //   //Create a variable that stores all the elements with the class ".page-link"
  //   const pageNumbers = document.querySelectorAll(".page-link");
  //   //Loops through the pageNumbes variable and for each number in the pageNumbers variable,
  //   //remove the class "active-page" from it
  //   pageNumbers.forEach(number => {
  //     number.classList.remove("active-page");
  //   });
  //   //Add the class "active-page" to the element that called the function
  //   e.currentTarget.classList.add("active-page");
  // };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            {/* Calls setPage when this Link is clicked and calls the pageNumbers function from its props and passes
            in the pageNumbers array */}
            <Link
              to="#"
              className="page-link"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
