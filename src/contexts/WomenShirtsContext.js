import React, { createContext, useState } from "react";
import YidartonWomensComfyColdShoulderTwistGrey from "../Resources/Images/WomenShirts/YidartonWomensComfyColdShoulderTwistGrey.jpg";
import YidartonWomensComfyColdShoulderTwistBlue from "../Resources/Images/WomenShirts/YidartonWomensComfyColdShoulderTwistBlue.jpg";
import YidartonWomensComfyColdShoulderTwistRed from "../Resources/Images/WomenShirts/YidartonWomensComfyColdShoulderTwistRed.jpg";
import YidartonWomensComfyColdShoulderTwistGreen from "../Resources/Images/WomenShirts/YidartonWomensComfyColdShoulderTwistGreen.jpg";
import LookbookStoreWomensVNeckBlouseBellSleeveRed from "../Resources/Images/WomenShirts/LookbookStoreWomensVNeckBlouseBellSleeveRed.jpg";
import LookbookStoreWomensVNeckBlouseBellSleeveGreen from "../Resources/Images/WomenShirts/LookbookStoreWomensVNeckBlouseBellSleeveGreen.jpg";
import LookbookStoreWomensVNeckBlouseBellSleeveYellow from "../Resources/Images/WomenShirts/LookbookStoreWomensVNeckBlouseBellSleeveYellow.jpg";
import LookbookStoreWomensVNeckBlouseBellSleevePink from "../Resources/Images/WomenShirts/LookbookStoreWomensVNeckBlouseBellSleevePink.jpg";
import TopstypeWomensTunicsLongSleeveShirtsRed from "../Resources/Images/WomenShirts/TopstypeWomensTunicsLongSleeveShirtsRed.jpg";
import TopstypeWomensTunicsLongSleeveShirtsGreen from "../Resources/Images/WomenShirts/TopstypeWomensTunicsLongSleeveShirtsGreen.jpg";
import TopstypeWomensTunicsLongSleeveShirtsYellow from "../Resources/Images/WomenShirts/TopstypeWomensTunicsLongSleeveShirtsYellow.jpg";
import TopstypeWomensTunicsLongSleeveShirtsBlue from "../Resources/Images/WomenShirts/TopstypeWomensTunicsLongSleeveShirtsBlue.jpg";
import onlypuffPocketWomenCasualLooseFitBlack from "../Resources/Images/WomenShirts/onlypuffPocketWomenCasualLooseFitBlack.jpg";
import onlypuffPocketWomenCasualLooseFitBlue from "../Resources/Images/WomenShirts/onlypuffPocketWomenCasualLooseFitBlue.jpg";
import onlypuffPocketWomenCasualLooseFitPink from "../Resources/Images/WomenShirts/onlypuffPocketWomenCasualLooseFitPink.jpg";
import onlypuffPocketWomenCasualLooseFitPurple from "../Resources/Images/WomenShirts/onlypuffPocketWomenCasualLooseFitPurple.jpg";
import HARHAYWomensLeopardBlockTunicRoundNeckGreen from "../Resources/Images/WomenShirts/HARHAYWomensLeopardBlockTunicRoundNeckGreen.jpg";
import HARHAYWomensLeopardBlockTunicRoundNeckBlue from "../Resources/Images/WomenShirts/HARHAYWomensLeopardBlockTunicRoundNeckBlue.jpg";
import HARHAYWomensLeopardBlockTunicRoundNeckGrey from "../Resources/Images/WomenShirts/HARHAYWomensLeopardBlockTunicRoundNeckGrey.jpg";
import HARHAYWomensLeopardBlockTunicRoundNeckWhite from "../Resources/Images/WomenShirts/HARHAYWomensLeopardBlockTunicRoundNeckWhite.jpg";
import BLENCOTWomensLightWeightColorBlockBlack from "../Resources/Images/WomenShirts/BLENCOTWomensLightWeightColorBlockBlack.jpg";
import BLENCOTWomensLightWeightColorBlockBlue from "../Resources/Images/WomenShirts/BLENCOTWomensLightWeightColorBlockBlue.jpg";
import BLENCOTWomensLightWeightColorBlockGreen from "../Resources/Images/WomenShirts/BLENCOTWomensLightWeightColorBlockGreen.jpg";
import HanesSportWomenDRIPerformanceBlack from "../Resources/Images/WomenShirts/HanesSportWomenDRIPerformanceBlack.jpg";
import HanesSportWomenDRIPerformanceBlue from "../Resources/Images/WomenShirts/HanesSportWomenDRIPerformanceBlue.jpg";
import HanesSportWomenDRIPerformancePink from "../Resources/Images/WomenShirts/HanesSportWomenDRIPerformancePink.jpg";
import HanesSportWomenDRIPerformanceWhite from "../Resources/Images/WomenShirts/HanesSportWomenDRIPerformanceWhite.jpg";
import HanesScoopNeckTankTopBlack from "../Resources/Images/WomenShirts/HanesScoopNeckTankTopBlack.jpg";
import HanesScoopNeckTankTopBlue from "../Resources/Images/WomenShirts/HanesScoopNeckTankTopBlue.jpg";
import HanesScoopNeckTankTopPink from "../Resources/Images/WomenShirts/HanesScoopNeckTankTopPink.jpg";
import HanesScoopNeckTankTopPurple from "../Resources/Images/WomenShirts/HanesScoopNeckTankTopPurple.jpg";
import HanesScoopNeckTankTopWhite from "../Resources/Images/WomenShirts/HanesScoopNeckTankTopWhite.jpg";
import BLENCOTButtonDownVNeckStrappyTankTopBlack from "../Resources/Images/WomenShirts/BLENCOTButtonDownVNeckStrappyTankTopBlack.jpg";
import BLENCOTButtonDownVNeckStrappyTankTopPurple from "../Resources/Images/WomenShirts/BLENCOTButtonDownVNeckStrappyTankTopPurple.jpg";
import BLENCOTButtonDownVNeckStrappyTankTopWhite from "../Resources/Images/WomenShirts/BLENCOTButtonDownVNeckStrappyTankTopWhite.jpg";
import BLENCOTButtonDownVNeckStrappyTankTopGreen from "../Resources/Images/WomenShirts/BLENCOTButtonDownVNeckStrappyTankTopGreen.jpg";
import BLENCOTButtonDownVNeckStrappyTankTopBlue from "../Resources/Images/WomenShirts/BLENCOTButtonDownVNeckStrappyTankTopBlue.jpg";
import WomenLeopardPrintCardiganWhite from "../Resources/Images/WomenShirts/WomenLeopardPrintCardiganWhite.jpg";

export const WomenShirtsContext = createContext();

const WomenShirtsContextProvider = props => {
  const [shirts] = useState([
    {
      name: "Yidarton Women's Comfy Cold Shoulder Twist Knot",
      brand: "Yidarton",
      type: "shirts",
      gender: "women",
      images: [
        { src: YidartonWomensComfyColdShoulderTwistGrey, color: "Grey" },
        { src: YidartonWomensComfyColdShoulderTwistBlue, color: "Blue" },
        { src: YidartonWomensComfyColdShoulderTwistRed, color: "Red" },
        { src: YidartonWomensComfyColdShoulderTwistGreen, color: "Green" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "16.99",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: "womenShirtYidartonWomenTop",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "LookbookStore Women's V Neck Mesh Panel Blouse 3/4 Bell Sleeve",
      brand: "LookbookStore",
      type: "shirts",
      gender: "women",
      images: [
        { src: LookbookStoreWomensVNeckBlouseBellSleeveRed, color: "Red" },
        { src: LookbookStoreWomensVNeckBlouseBellSleeveGreen, color: "Green" },
        {
          src: LookbookStoreWomensVNeckBlouseBellSleeveYellow,
          color: "Yellow"
        },
        { src: LookbookStoreWomensVNeckBlouseBellSleevePink, color: "Pink" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "9.99",
      sale: null,
      sizes: ["S", "M", "L", "XL"],
      id: "womenShirtLookbookStoreVNeckMeshBellSleeve",
      newrelease: "new",
      featured: "2"
    },
    {
      name:
        "Topstype Women's Color Block Chest Cutout Tunics Long Sleeve Shirts",
      brand: "Topstype",
      type: "shirts",
      gender: "women",
      images: [
        { src: TopstypeWomensTunicsLongSleeveShirtsRed, color: "Red" },
        { src: TopstypeWomensTunicsLongSleeveShirtsGreen, color: "Green" },
        { src: TopstypeWomensTunicsLongSleeveShirtsYellow, color: "Yellow" },
        { src: TopstypeWomensTunicsLongSleeveShirtsBlue, color: "Blue" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "13.88",
      sale: null,
      sizes: ["S", "M", "XL", "3XL", "5XL"],
      id: "womenShirtTopstypeTunicsLongSleeve",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "onlypuff Pocket Shirts for Women Casual Loose Fit Tunic",
      brand: "onlypuff",
      type: "shirts",
      gender: "women",
      images: [
        { src: onlypuffPocketWomenCasualLooseFitBlack, color: "Black" },
        { src: onlypuffPocketWomenCasualLooseFitBlue, color: "Blue" },
        { src: onlypuffPocketWomenCasualLooseFitPink, color: "Pink" },
        { src: onlypuffPocketWomenCasualLooseFitPurple, color: "Purple" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "10.99",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL", "5XL"],
      id: "womenShirtonlypuffPocketShirtsLooseFit",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "HARHAY Women's Leopard Print Color Block Tunic Round Neck",
      brand: "HARHAY",
      type: "shirts",
      gender: "women",
      images: [
        { src: HARHAYWomensLeopardBlockTunicRoundNeckGreen, color: "Green" },
        { src: HARHAYWomensLeopardBlockTunicRoundNeckBlue, color: "Blue" },
        { src: HARHAYWomensLeopardBlockTunicRoundNeckGrey, color: "Grey" },
        { src: HARHAYWomensLeopardBlockTunicRoundNeckWhite, color: "White" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "18.99",
      sale: null,
      sizes: ["S", "M", "2XL"],
      id: "womenShirtHARHAYLeopardPrintBlockTunic",
      newrelease: "notnew",
      featured: "5"
    },
    {
      name: "BLENCOT Women's Lightweight Color Block Long Sleeve",
      brand: "BLENCOT",
      type: "shirts",
      gender: "women",
      images: [
        { src: BLENCOTWomensLightWeightColorBlockBlack, color: "Black" },
        { src: BLENCOTWomensLightWeightColorBlockBlue, color: "Blue" },
        { src: BLENCOTWomensLightWeightColorBlockGreen, color: "Green" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "6.98",
      sale: null,
      sizes: ["L", "XL", "XXL", "3XL", "4XL", "5XL"],
      id: "womenShirtBLENCOTWomensLightWeightColorBlock",
      newrelease: "new",
      featured: "6"
    },
    {
      name: "Hanes Sport Women's Cool DRI Performance Long Sleeve Tee",
      brand: "Hanes",
      type: "shirts",
      gender: "women",
      images: [
        { src: HanesSportWomenDRIPerformanceBlack, color: "Black" },
        { src: HanesSportWomenDRIPerformancePink, color: "Pink" },
        { src: HanesSportWomenDRIPerformanceBlue, color: "Blue" },
        { src: HanesSportWomenDRIPerformanceWhite, color: "White" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "7.50",
      sale: "3.49",
      sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
      id: "womenShirtHanesSportWomenDRIPerformance",
      newrelease: "notnew",
      featured: "7"
    },
    {
      name: "Hanes Women's Scoop-Neck Tank Top",
      brand: "Hanes",
      type: "shirts",
      gender: "women",
      images: [
        { src: HanesScoopNeckTankTopBlack, color: "Black" },
        { src: HanesScoopNeckTankTopBlue, color: "Blue" },
        { src: HanesScoopNeckTankTopPink, color: "Pink" },
        { src: HanesScoopNeckTankTopPurple, color: "Purple" },
        { src: HanesScoopNeckTankTopWhite, color: "White" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "6.42",
      sale: null,
      sizes: ["S", "M", "L", "XXL", "3XL"],
      id: "womenShirtHanesScoopNeckTankTop",
      newrelease: "new",
      featured: "8"
    },
    {
      name: "BLENCOT Women's Button Down V Neck Strappy Tank Top",
      brand: "BLENCOT",
      type: "shirts",
      gender: "women",
      images: [
        { src: BLENCOTButtonDownVNeckStrappyTankTopBlack, color: "Black" },
        { src: BLENCOTButtonDownVNeckStrappyTankTopPurple, color: "Purple" },
        { src: BLENCOTButtonDownVNeckStrappyTankTopWhite, color: "White" },
        { src: BLENCOTButtonDownVNeckStrappyTankTopBlue, color: "Blue" },
        { src: BLENCOTButtonDownVNeckStrappyTankTopGreen, color: "Green" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "6.98",
      sale: null,
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: "womenShirtBLENCOTButtonDownVNeckStrappyTankTop",
      newrelease: "notnew",
      featured: "9"
    },
    {
      name: "Women's Leopard Printed Cardigans Shirt",
      brand: "QegarTop",
      type: "shirts",
      gender: "women",
      images: [{ src: WomenLeopardPrintCardiganWhite, color: "White" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "9.99",
      sale: "5.49",
      sizes: ["S", "M", "L", "XL", "3XL", "4XL", "5XL"],
      id: "womenShirtWomenLeopardPrintCardigan",
      newrelease: "new",
      featured: "10"
    }
  ]);
  return (
    <WomenShirtsContext.Provider value={{ shirts }}>
      {props.children}
    </WomenShirtsContext.Provider>
  );
};

export default WomenShirtsContextProvider;
