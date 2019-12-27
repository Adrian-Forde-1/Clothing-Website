import React, { createContext, useState } from "react";
import ResfeberRippedCuteDistressedBlack from "../Resources/Images/WomenJeans/ResfeberRippedCuteDistressedBlack.jpg";
import ResfeberRippedCuteDistressedBlue from "../Resources/Images/WomenJeans/ResfeberRippedCuteDistressedBlue.jpg";
import JoesJeansCharlieHighRiseBlack from "../Resources/Images/WomenJeans/JoesJeansCharlieHighRiseBlack.jpg";
import SigByLeviStraussGoldLabelBlue from "../Resources/Images/WomenJeans/SigByLeviStraussGoldLabelBlue.jpg";
import SigByLeviStraussGoldLabelBlack from "../Resources/Images/WomenJeans/SigByLeviStraussGoldLabelBlack.jpg";
import GLORIAVANDERBILTAmandaClassicTaperedJeansPink from "../Resources/Images/WomenJeans/GLORIAVANDERBILTAmandaClassicTaperedJeansPink.jpg";
import GLORIAVANDERBILTAmandaClassicTaperedJeansBlack from "../Resources/Images/WomenJeans/GLORIAVANDERBILTAmandaClassicTaperedJeansBlack.jpg";
import GLORIAVANDERBILTAmandaClassicTaperedJeansGreen from "../Resources/Images/WomenJeans/GLORIAVANDERBILTAmandaClassicTaperedJeansGreen.jpg";
import GLORIAVANDERBILTAmandaClassicTaperedJeansBlue from "../Resources/Images/WomenJeans/GLORIAVANDERBILTAmandaClassicTaperedJeansBlue.jpg";
import LEEFlexMotionRegularFitBootcutBlack from "../Resources/Images/WomenJeans/LEEFlexMotionRegularFitBootcutBlack.jpg";
import LEEFlexMotionRegularFitBootcutBlue from "../Resources/Images/WomenJeans/LEEFlexMotionRegularFitBootcutBlue.jpg";
import ArolinaStretchyWideLegPalazzoLoungeBlack from "../Resources/Images/WomenJeans/ArolinaStretchyWideLegPalazzoLoungeBlack.jpg";
import ArolinaStretchyWideLegPalazzoLoungeBlue from "../Resources/Images/WomenJeans/ArolinaStretchyWideLegPalazzoLoungeBlue.jpg";
import ArolinaStretchyWideLegPalazzoLoungeGrey from "../Resources/Images/WomenJeans/ArolinaStretchyWideLegPalazzoLoungeGrey.jpg";
import ArolinaStretchyWideLegPalazzoLoungePurple from "../Resources/Images/WomenJeans/ArolinaStretchyWideLegPalazzoLoungePurple.jpg";
import ArolinaStretchyWideLegPalazzoLoungeRed from "../Resources/Images/WomenJeans/ArolinaStretchyWideLegPalazzoLoungeRed.jpg";
import USPoloAssnFrenchTerryJoggerPink from "../Resources/Images/WomenJeans/USPoloAssnFrenchTerryJoggerPink.jpg";
import USPoloAssnFrenchTerryJoggerPurple from "../Resources/Images/WomenJeans/USPoloAssnFrenchTerryJoggerPurple.jpg";
import USPoloAssnFrenchTerryJoggerRed from "../Resources/Images/WomenJeans/USPoloAssnFrenchTerryJoggerRed.jpg";
import USPoloAssnFrenchTerryJoggerWhite from "../Resources/Images/WomenJeans/USPoloAssnFrenchTerryJoggerWhite.jpg";
import HontouteClassicHighWaistedButtLiftBlack from "../Resources/Images/WomenJeans/HontouteClassicHighWaistedButtLiftBlack.jpg";
import HontouteClassicHighWaistedButtLiftBlue from "../Resources/Images/WomenJeans/HontouteClassicHighWaistedButtLiftBlue.jpg";

export const WomenJeansContext = createContext();

const WomenJeansContextProvider = props => {
  const [jeans] = useState([
    {
      name: "Resfeber Women's Ripped Cute Distressed Jeans",
      brand: "Resfeber",
      type: "jeans",
      gender: "women",
      images: [
        { src: ResfeberRippedCuteDistressedBlack, color: "Black" },
        { src: ResfeberRippedCuteDistressedBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "39.99",
      sale: null,
      sizes: ["31", "33", "34", "35", "36", "38"],
      id: "womenJeansResfeberRippedCuteDistressed",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "Joe's Jeans Women's Charlie High Rise Skinny Ankle Jean",
      brand: "Joe's",
      type: "jeans",
      gender: "women",
      images: [{ src: JoesJeansCharlieHighRiseBlack, color: "Black" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "178.00",
      sale: null,
      sizes: ["31", "32", "33", "34", "35", "36", "37", "38"],
      id: "womenJeansJoesJeansCharlieHighRise",
      newrelease: "new",
      featured: "2"
    },
    {
      name:
        "Signature by Levi Strauss & Co. Gold Label Women's Curvy Straight Jean",
      brand: "Signature by Levi",
      type: "jeans",
      gender: "women",
      images: [
        { src: SigByLeviStraussGoldLabelBlue, color: "Blue" },
        { src: SigByLeviStraussGoldLabelBlack, color: "Black" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "19.12",
      sale: null,
      sizes: ["31", "32", "33", "34", "35", "36"],
      id: "womenJeansSigByLeviStraussGoldLabel",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "GLORIA VANDERBILT Women's Amanda Classic Tapered Jean",
      brand: "GLORIA VANDERBILT",
      type: "jeans",
      gender: "women",
      images: [
        { src: GLORIAVANDERBILTAmandaClassicTaperedJeansPink, color: "Pink" },
        { src: GLORIAVANDERBILTAmandaClassicTaperedJeansBlack, color: "Black" },
        { src: GLORIAVANDERBILTAmandaClassicTaperedJeansGreen, color: "Green" },
        { src: GLORIAVANDERBILTAmandaClassicTaperedJeansBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "18.00",
      sale: null,
      sizes: ["31", "32", "33", "34", "35", "36", "40"],
      id: "womenJeansGLORIAVANDERBILTAmandaClassicTaperedJeans",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "LEE Women's Flex Motion Regular Fit Bootcut Jean",
      brand: "LEE",
      type: "jeans",
      gender: "women",
      images: [
        { src: LEEFlexMotionRegularFitBootcutBlack, color: "Black" },
        { src: LEEFlexMotionRegularFitBootcutBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "24.99",
      sale: "20.00",
      sizes: ["31", "32", "33", "34", "35", "36", "40", "41", "42"],
      id: "womenJeansLEEFlexMotionRegularFitBootcut",
      newrelease: "notnew",
      featured: "5"
    },
    {
      name: "Arolina Women's Stretchy Wide Leg Palazzo Lounge Pants",
      brand: "Arolina",
      type: "jeans",
      gender: "women",
      images: [
        { src: ArolinaStretchyWideLegPalazzoLoungeBlack, color: "Black" },
        { src: ArolinaStretchyWideLegPalazzoLoungeBlue, color: "Blue" },
        { src: ArolinaStretchyWideLegPalazzoLoungeRed, color: "Red" },
        { src: ArolinaStretchyWideLegPalazzoLoungeGrey, color: "Grey" },
        { src: ArolinaStretchyWideLegPalazzoLoungePurple, color: "Purple" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "15.99",
      sale: "15.49",
      sizes: ["31", "32", "33", "34", "35", "36"],
      id: "womenJeansArolinaStretchyWideLegPalazzoLounge",
      newrelease: "new",
      featured: "6"
    },
    {
      name: "U.S. Polo Assn. Womens French Terry Jogger",
      brand: "U.S. Polo Assn.",
      type: "jeans",
      gender: "women",
      images: [
        { src: USPoloAssnFrenchTerryJoggerPink, color: "Pink" },
        { src: USPoloAssnFrenchTerryJoggerPurple, color: "Purple" },
        { src: USPoloAssnFrenchTerryJoggerRed, color: "Red" },
        { src: USPoloAssnFrenchTerryJoggerWhite, color: "White" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "12.99",
      sale: "7.49",
      sizes: ["31", "32", "33", "34", "35", "36", "40"],
      id: "womenJeansUSPoloAssnFrenchTerryJogger",
      newrelease: "notnew",
      featured: "7"
    },
    {
      name: "HONTOUTE Women's Classic High Waisted Butt Lift",
      brand: "HONTOUTE",
      type: "jeans",
      gender: "women",
      images: [
        { src: HontouteClassicHighWaistedButtLiftBlack, color: "Black" },
        { src: HontouteClassicHighWaistedButtLiftBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "25.99",
      sale: null,
      sizes: ["31", "32", "33", "34", "36", "40"],
      id: "womenJeansHontouteClassicHighWaistedButtLift",
      newrelease: "new",
      featured: "8"
    }
  ]);
  return (
    <WomenJeansContext.Provider value={{ jeans }}>
      {props.children}
    </WomenJeansContext.Provider>
  );
};

export default WomenJeansContextProvider;
