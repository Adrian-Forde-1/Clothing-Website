import React, { createContext, useState } from "react";
import thewalkingdadblack from "../Resources/Images/Male_TheWalkingDad/Male_The_Walking_Dad_Black.jpg";
import thewalkingdadblue from "../Resources/Images/Male_TheWalkingDad/Male_The_Walking_Dad_Blue.jpg";
import thewalkingdadpurple from "../Resources/Images/Male_TheWalkingDad/Male_The_Walking_Dad_Purple.jpg";
import thewalkingdadred from "../Resources/Images/Male_TheWalkingDad/Male_The_Walking_Dad_Red.jpg";
import mensTShirtMuscleChestPrint from "../Resources/Images/MenShirts/mensTShirtMuscleChestPrint.jpg";
import menSlimFitLongSleevePlaidShirtWhite from "../Resources/Images/MenShirts/menSlimFitLongSleevePlaidShirtWhite.jpg";
import menSlimFitLongSleevePlaidShirtRed from "../Resources/Images/MenShirts/menSlimFitLongSleevePlaidShirtRed.jpg";
import menSlimFitLongSleevePlaidShirtGreen from "../Resources/Images/MenShirts/menSlimFitLongSleevePlaidShirtGreen.jpg";
import menSlimFitLongSleevePlaidShirtBlue from "../Resources/Images/MenShirts/menSlimFitLongSleevePlaidShirtBlue.jpg";
import newStylishSlimFormalPlaidShirtBlack from "../Resources/Images/MenShirts/newStylishSlimFormalPlaidShirtBlack.jpg";
import newStylishSlimFormalPlaidShirtRed from "../Resources/Images/MenShirts/newStylishSlimFormalPlaidShirtRed.jpg";
import newStylishSlimFormalPlaidShirtBlue from "../Resources/Images/MenShirts/newStylishSlimFormalPlaidShirtBlue.jpg";
import newStylishSlimFormalPlaidShirtGreen from "../Resources/Images/MenShirts/newStylishSlimFormalPlaidShirtGreen.jpg";
import MensLongSleeveRunningShirtsCoolWorkoutTShirtBlack from "../Resources/Images/MenShirts/MensLongSleeveRunningShirtsCoolWorkoutTShirtBlack.jpg";
import MensLongSleeveRunningShirtsCoolWorkoutTShirtBlue from "../Resources/Images/MenShirts/MensLongSleeveRunningShirtsCoolWorkoutTShirtBlue.jpg";
import MensLongSleeveRunningShirtsCoolWorkoutTShirtOrange from "../Resources/Images/MenShirts/MensLongSleeveRunningShirtsCoolWorkoutTShirtOrange.jpg";
import MensLongSleeveRunningShirtsCoolWorkoutTShirtRed from "../Resources/Images/MenShirts/MensLongSleeveRunningShirtsCoolWorkoutTShirtRed.jpg";
import MensLongSleeveRunningShirtsCoolWorkoutTShirtWhite from "../Resources/Images/MenShirts/MensLongSleeveRunningShirtsCoolWorkoutTShirtWhite.jpg";
import carharttMensSignatureSleeveLogoBlue from "../Resources/Images/MenShirts/carharttMensSignatureSleeveLogoBlue.jpg";
import jerzeesMensSpotShieldShortSleevePoloSportShirtBlack from "../Resources/Images/MenShirts/jerzeesMensSpotShieldShortSleevePoloSportShirtBlack.jpg";
import jerzeesMensSpotShieldShortSleevePoloSportShirtOrange from "../Resources/Images/MenShirts/jerzeesMensSpotShieldShortSleevePoloSportShirtOrange.jpg";
import jerzeesMensSpotShieldShortSleevePoloSportShirtBlue from "../Resources/Images/MenShirts/jerzeesMensSpotShieldShortSleevePoloSportShirtBlue.jpg";
import jerzeesMensSpotShieldShortSleevePoloSportShirtRed from "../Resources/Images/MenShirts/jerzeesMensSpotShieldShortSleevePoloSportShirtRed.jpg";
import aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsBlue from "../Resources/Images/MenShirts/aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsBlue.jpg";
import aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsRed from "../Resources/Images/MenShirts/aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsRed.jpg";
import WranglerHeavyweightPlaidFleeceShirtBlack from "../Resources/Images/MenShirts/WranglerHeavyweightPlaidFleeceShirtBlack.jpg";
import WranglerHeavyweightPlaidFleeceShirtBlue from "../Resources/Images/MenShirts/WranglerHeavyweightPlaidFleeceShirtBlue.jpg";
import WranglerHeavyweightPlaidFleeceShirtRed from "../Resources/Images/MenShirts/WranglerHeavyweightPlaidFleeceShirtRed.jpg";
import championMensClassicJerseyScriptTShirtBlack from "../Resources/Images/MenShirts/championMensClassicJerseyScriptTShirtBlack.jpg";
import championMensClassicJerseyScriptTShirtRed from "../Resources/Images/MenShirts/championMensClassicJerseyScriptTShirtRed.jpg";
import championMensClassicJerseyScriptTShirtGreen from "../Resources/Images/MenShirts/championMensClassicJerseyScriptTShirtGreen.jpg";
import championMensClassicJerseyScriptTShirtBlue from "../Resources/Images/MenShirts/championMensClassicJerseyScriptTShirtBlue.jpg";

export const MenShirtContext = createContext();

const MenShirtContextProvider = props => {
  const [menShirts] = useState([
    {
      name: "THE WALKING DAD",
      brand: "Afterlight Clothing",
      type: "shirts",
      gender: "men",
      images: [
        { src: thewalkingdadblue, color: "Blue" },
        { src: thewalkingdadblack, color: "Black" },
        { src: thewalkingdadpurple, color: "Purple" },
        { src: thewalkingdadred, color: "Red" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "11.80",
      sale: "5.49",
      sizes: ["3XL", "4XL", "5XL", "XXL"],
      id: "menShirtWalkingdad",
      newrelease: "new",
      featured: "2"
    },
    {
      name: "Men's T-Shirt Muscle Chest Print",
      brand: "",
      type: "shirts",
      gender: "men",
      images: [{ src: mensTShirtMuscleChestPrint, color: "White" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "16.80",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      id: "menShirtMuscleChestPrint",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "Men Slim Fit Long Sleve Plaid Shirt",
      brand: "",
      type: "shirts",
      gender: "men",
      images: [
        { src: menSlimFitLongSleevePlaidShirtWhite, color: "White" },
        { src: menSlimFitLongSleevePlaidShirtRed, color: "Red" },
        { src: menSlimFitLongSleevePlaidShirtGreen, color: "Green" },
        { src: menSlimFitLongSleevePlaidShirtBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "15.96",
      sale: null,
      sizes: ["M", "L", "XL", "2XL"],
      id: "menShirtLongSleevePlaidShirt",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "New Stylish Slim Formal Plaid Shirt",
      brand: "UST6283",
      type: "shirts",
      gender: "men",
      images: [
        { src: newStylishSlimFormalPlaidShirtBlack, color: "Black" },
        { src: newStylishSlimFormalPlaidShirtRed, color: "Red" },
        { src: newStylishSlimFormalPlaidShirtBlue, color: "Blue" },
        { src: newStylishSlimFormalPlaidShirtGreen, color: "Green" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "5.80",
      sale: null,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      id: "menShirtUST6283",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "Men's Long Sleeve Running Shirts Cool Workout T-Shirts",
      brand: "BALEAF",
      type: "shirts",
      gender: "men",
      images: [
        {
          src: MensLongSleeveRunningShirtsCoolWorkoutTShirtBlack,
          color: "Black"
        },
        {
          src: MensLongSleeveRunningShirtsCoolWorkoutTShirtBlue,
          color: "Blue"
        },
        {
          src: MensLongSleeveRunningShirtsCoolWorkoutTShirtOrange,
          color: "Orange"
        },
        { src: MensLongSleeveRunningShirtsCoolWorkoutTShirtRed, color: "Red" },
        {
          src: MensLongSleeveRunningShirtsCoolWorkoutTShirtWhite,
          color: "White"
        }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "14.99",
      sale: null,
      sizes: ["S", "M", "L", "XL"],
      id: "menShirtsBALEAFRunning",
      newrelease: "notnew",
      featured: "5"
    },
    {
      name: "Carhartt Men's Signature Sleeve Logo Long Sleeve T-Shirt",
      brand: "Carhartt",
      type: "shirts",
      gender: "men",
      images: [{ src: carharttMensSignatureSleeveLogoBlue, color: "Blue" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "22.99",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: "menShirtCarharttSignature",
      newrelease: "new",
      featured: "6"
    },
    {
      name: "Jerzees Men's Spot Shield Short Sleeve Polo Sport Shirt",
      brand: "Jerzees",
      type: "shirts",
      gender: "men",
      images: [
        {
          src: jerzeesMensSpotShieldShortSleevePoloSportShirtBlack,
          color: "Black"
        },
        {
          src: jerzeesMensSpotShieldShortSleevePoloSportShirtOrange,
          color: "Orange"
        },
        {
          src: jerzeesMensSpotShieldShortSleevePoloSportShirtBlue,
          color: "Blue"
        },
        {
          src: jerzeesMensSpotShieldShortSleevePoloSportShirtRed,
          color: "Red"
        }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "4.86",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      id: "menShirtJerzeesSportShieldShortSleeve",
      newrelease: "notnew",
      featured: "7"
    },
    {
      name: "Aiyino Mens Casual Slim Fit Long Sleeve Henley T-Shirts",
      brand: "Aiyino",
      type: "shirts",
      gender: "men",
      images: [
        {
          src: aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsBlue,
          color: "Blue"
        },
        { src: aiyinoMensCasualSlimFitLongSleeveHenleyTShirtsRed, color: "Red" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "10.22",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: "menShirtAiyinoCasualSlimFit",
      newrelease: "new",
      featured: "8"
    },
    {
      name:
        "Wrangler Authentics Men's Long Sleeve Heavyweight Plaid Fleece Shirt",
      brand: "Wrangler",
      type: "shirts",
      gender: "men",
      images: [
        { src: WranglerHeavyweightPlaidFleeceShirtBlack, color: "Black" },
        { src: WranglerHeavyweightPlaidFleeceShirtBlue, color: "Blue" },
        { src: WranglerHeavyweightPlaidFleeceShirtRed, color: "Red" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "19.99",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
      id: "menShirtWranglerAuthenticsMensLongSleeve",
      newrelease: "notnew",
      featured: "9"
    },
    {
      name: "Champion Men's Classic Jersey Script T-Shirt",
      brand: "Champion",
      type: "shirts",
      gender: "men",
      images: [
        { src: championMensClassicJerseyScriptTShirtBlack, color: "Black" },
        { src: championMensClassicJerseyScriptTShirtRed, color: "Red" },
        { src: championMensClassicJerseyScriptTShirtGreen, color: "Green" },
        { src: championMensClassicJerseyScriptTShirtBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "7.80",
      sale: null,
      sizes: ["S", "XL", "3XL", "4XL"],
      id: "menShirtChampionMensClassicJersey",
      newrelease: "new",
      featured: "10"
    }
  ]);

  return (
    <MenShirtContext.Provider value={{ menShirts }}>
      {props.children}
    </MenShirtContext.Provider>
  );
};

export default MenShirtContextProvider;
