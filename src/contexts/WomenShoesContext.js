import React, { createContext, useState } from "react";
import HerstyleKeettonOpenToeBlack from "../Resources/Images/WomenShoes/HerstyleKeettonOpenToeBlack.jpg";
import HerstyleKeettonOpenToeRed from "../Resources/Images/WomenShoes/HerstyleKeettonOpenToeRed.jpg";
import HerstyleKeettonOpenToeWhite from "../Resources/Images/WomenShoes/HerstyleKeettonOpenToeWhite.jpg";
import HerstyleKeettonOpenToeYellow from "../Resources/Images/WomenShoes/HerstyleKeettonOpenToeYellow.jpg";
import SODAClipEspadrillesFlatformWedgeBlack from "../Resources/Images/WomenShoes/SODAClipEspadrillesFlatformWedgeBlack.jpg";
import SODAClipEspadrillesFlatformWedgeWhite from "../Resources/Images/WomenShoes/SODAClipEspadrillesFlatformWedgeWhite.jpg";
import SODAClipEspadrillesFlatformWedgeGrey from "../Resources/Images/WomenShoes/SODAClipEspadrillesFlatformWedgeGrey.jpg";
import VolcomNewSchoolDressSandalWhite from "../Resources/Images/WomenShoes/VolcomNewSchoolDressSandalWhite.jpg";
import RoxyVistaSandalFlipFlopGrey from "../Resources/Images/WomenShoes/RoxyVistaSandalFlipFlopGrey.jpg";
import RoxyVistaSandalFlipFlopBlue from "../Resources/Images/WomenShoes/RoxyVistaSandalFlipFlopBlue.jpg";
import RoxyVistaSandalFlipFlopBlack from "../Resources/Images/WomenShoes/RoxyVistaSandalFlipFlopBlack.jpg";
import CrocsSwiftwaterSandalSportGreen from "../Resources/Images/WomenShoes/CrocsSwiftwaterSandalSportGreen.jpg";
import CrocsSwiftwaterSandalSportPink from "../Resources/Images/WomenShoes/CrocsSwiftwaterSandalSportPink.jpg";
import CrocsSwiftwaterSandalSportBrown from "../Resources/Images/WomenShoes/CrocsSwiftwaterSandalSportBrown.jpg";
import CrocsSwiftwaterSandalSportBlue from "../Resources/Images/WomenShoes/CrocsSwiftwaterSandalSportBlue.jpg";
import BirkenstockBetulaMiaSoftBlack from "../Resources/Images/WomenShoes/BirkenstockBetulaMiaSoftBlack.jpg";
import BirkenstockBetulaMiaSoftWhite from "../Resources/Images/WomenShoes/BirkenstockBetulaMiaSoftWhite.jpg";
import BirkenstockBetulaMiaSoftBlue from "../Resources/Images/WomenShoes/BirkenstockBetulaMiaSoftBlue.jpg";
import BirkenstockBetulaMiaSoftGrey from "../Resources/Images/WomenShoes/BirkenstockBetulaMiaSoftGrey.jpg";

export const WomenShoesContext = createContext();

const WomenShoesContextProvider = props => {
  const [shoes] = useState([
    {
      name: "Herstyle Keetton Women's Open Toes",
      brand: "Herstyle",
      type: "shoes",
      gender: "women",
      images: [
        { src: HerstyleKeettonOpenToeBlack, color: "Black" },
        { src: HerstyleKeettonOpenToeRed, color: "Red" },
        { src: HerstyleKeettonOpenToeWhite, color: "White" },
        { src: HerstyleKeettonOpenToeYellow, color: "Yellow" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "13.99",
      sale: null,
      sizes: ["6", "6.5", "7", "8", "10", "11"],
      id: "womenShoesHerstyleKeettonOpenToe",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "SODA Clip Womens Casual Espadrilles Trim Flatform Studded Wedge",
      brand: "SODA",
      type: "shoes",
      gender: "women",
      images: [
        { src: SODAClipEspadrillesFlatformWedgeBlack, color: "Black" },
        { src: SODAClipEspadrillesFlatformWedgeWhite, color: "White" },
        { src: SODAClipEspadrillesFlatformWedgeGrey, color: "Grey" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "27.78",
      sale: null,
      sizes: ["6", "6.5", "7", "8.5", "9", "9.5", "10", "11"],
      id: "womenShoesSODAClipEspadrillesFlatformWedge",
      newrelease: "new",
      featured: "2"
    },
    {
      name: "Volcom New School Womens Dress Sandal",
      brand: "Volcom",
      type: "shoes",
      gender: "women",
      images: [{ src: VolcomNewSchoolDressSandalWhite, color: "White" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "17.99",
      sale: null,
      sizes: ["6", "6.5", "7", "8.5", "9", "9.5"],
      id: "womenShoesVolcomNewSchoolDressSandal",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "Roxy Women's Vista Sandal Flip-Flop",
      brand: "Roxy",
      type: "shoes",
      gender: "women",
      images: [
        { src: RoxyVistaSandalFlipFlopGrey, color: "Grey" },
        { src: RoxyVistaSandalFlipFlopBlue, color: "Blue" },
        { src: RoxyVistaSandalFlipFlopBlack, color: "Black" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "11.93",
      sale: null,
      sizes: ["6", "6.5", "7", "8.5", "9", "9.5"],
      id: "womenShoesRoxyVistaSandalFlipFlop",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "Crocs Women's Swiftwater Sandal Sport",
      brand: "Crocs",
      type: "shoes",
      gender: "women",
      images: [
        { src: CrocsSwiftwaterSandalSportGreen, color: "Green" },
        { src: CrocsSwiftwaterSandalSportPink, color: "Pink" },
        { src: CrocsSwiftwaterSandalSportBrown, color: "Brown" },
        { src: CrocsSwiftwaterSandalSportBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "19.95",
      sale: null,
      sizes: ["6", "6.5", "7", "8.5"],
      id: "womenShoesCrocsSwiftwaterSandalSport",
      newrelease: "notnew",
      featured: "5"
    },
    {
      name: "Birkenstock Betula Licensed Women's Mia Soft",
      brand: "Birkenstock",
      type: "shoes",
      gender: "women",
      images: [
        { src: BirkenstockBetulaMiaSoftBlack, color: "Black" },
        { src: BirkenstockBetulaMiaSoftWhite, color: "White" },
        { src: BirkenstockBetulaMiaSoftBlue, color: "Blue" },
        { src: BirkenstockBetulaMiaSoftGrey, color: "Grey" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "34.99",
      sale: "25.49",
      sizes: ["6", "6.5", "7", "8.5", "9", "9.5", "10", "10.5", "11"],
      id: "womenShoesBirkenstockBetulaMiaSoft",
      newrelease: "new",
      featured: "6"
    }
  ]);
  return (
    <WomenShoesContext.Provider value={{ shoes }}>
      {props.children}
    </WomenShoesContext.Provider>
  );
};

export default WomenShoesContextProvider;
