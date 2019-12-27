import React, { createContext, useState } from "react";
import LevisMens505RegularFitJeansBlue from "../Resources/Images/MenJeans/LevisMens505RegularFitJeansBlue.jpg";
import SouthpoleMensActiveBasicJoggerBlack from "../Resources/Images/MenJeans/SouthpoleMensActiveBasicJoggerBlack.jpg";
import SouthpoleMensActiveBasicJoggerGrey from "../Resources/Images/MenJeans/SouthpoleMensActiveBasicJoggerGrey.jpg";
import SouthpoleMensActiveBasicJoggerRed from "../Resources/Images/MenJeans/SouthpoleMensActiveBasicJoggerRed.jpg";
import SouthpoleMensActiveBasicJoggerBlue from "../Resources/Images/MenJeans/SouthpoleMensActiveBasicJoggerBlue.jpg";
import LevisMens511SlimFitStretchJeanBlack from "../Resources/Images/MenJeans/LevisMens511SlimFitStretchJeanBlack.jpg";
import LevisMens511SlimFitStretchJeanWithPatchBlue from "../Resources/Images/MenJeans/LevisMens511SlimFitStretchJeanWithPatchBlue.jpg";
import CarharttMensRelaxedFitWashedTwillDungareePantsBlack from "../Resources/Images/MenJeans/CarharttMensRelaxedFitWashedTwillDungareePantsBlack.jpg";
import CarharttMensRelaxedFitWashedTwillDungareePantsGreen from "../Resources/Images/MenJeans/CarharttMensRelaxedFitWashedTwillDungareePantsGreen.jpg";

export const MenJeansContext = createContext();

const MenJeansContextProvider = props => {
  const [menJeans] = useState([
    {
      name: "Levi's Men's 505 Regular Fit Jeans Blue",
      brand: "Levi's",
      type: "jeans",
      gender: "men",
      images: [{ src: LevisMens505RegularFitJeansBlue, color: "Blue" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "39.99",
      sale: null,
      sizes: ["31", "33", "34", "35", "36", "38"],
      id: "menJeansLevis505RegularBlue",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "Southpole Men's Active Basic Jogger Fleece Pants",
      brand: "Southpole",
      type: "jeans",
      gender: "men",
      images: [
        { src: SouthpoleMensActiveBasicJoggerBlack, color: "Black" },
        { src: SouthpoleMensActiveBasicJoggerGrey, color: "Grey" },
        { src: SouthpoleMensActiveBasicJoggerRed, color: "Red" },
        { src: SouthpoleMensActiveBasicJoggerBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "12.00",
      sale: null,
      sizes: ["31", "33", "34", "35", "40", "41", "42"],
      id: "menJeansSouthPoleActiveJogger",
      newrelease: "new",
      featured: "2"
    },
    {
      name: "Levi's Men's 511 Slim Fit Stretch Jean",
      brand: "Levi's",
      type: "jeans",
      gender: "men",
      images: [{ src: LevisMens511SlimFitStretchJeanBlack, color: "Black" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "45.87",
      sale: null,
      sizes: ["31", "33", "34", "35", "40", "42"],
      id: "menJeansLevi511SlimBlack",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "Levi's Men's 511 Slim Fit Stretch Jean With Patch",
      brand: "Levi's",
      type: "jeans",
      gender: "men",
      images: [
        { src: LevisMens511SlimFitStretchJeanWithPatchBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "49.82",
      sale: "45.50",
      sizes: ["31", "32", "33", "34", "35", "46", "42"],
      id: "menJeansWalkingdad4",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "Carhartt Men's Relaxed Fit Washed Twill Dungaree Pant",
      brand: "Carhartt",
      type: "jeans",
      gender: "men",
      images: [
        {
          src: CarharttMensRelaxedFitWashedTwillDungareePantsBlack,
          color: "Black"
        },
        {
          src: CarharttMensRelaxedFitWashedTwillDungareePantsGreen,
          color: "Green"
        }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "36.93",
      sale: null,
      sizes: ["31", "32", "33", "34", "35", "46", "42"],
      id: "menJeansCarharttRelaxedFit",
      newrelease: "notnew",
      featured: "5"
    }
  ]);
  return (
    <MenJeansContext.Provider value={{ menJeans }}>
      {props.children}
    </MenJeansContext.Provider>
  );
};

export default MenJeansContextProvider;
