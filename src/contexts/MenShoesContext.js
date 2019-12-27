import React, { createContext, useState } from "react";
import nikeMensRevolution5RunningShoeBlack from "../Resources/Images/MenShoes/nikeMensRevolution5RunningShoeBlack.jpg";
import nikeMensRevolution5RunningShoeRed from "../Resources/Images/MenShoes/nikeMensRevolution5RunningShoeRed.jpg";
import nikeMensRevolution5RunningShoeGrey from "../Resources/Images/MenShoes/nikeMensRevolution5RunningShoeGrey.jpg";
import nikeMensRevolution5RunningShoeBlue from "../Resources/Images/MenShoes/nikeMensRevolution5RunningShoeBlue.jpg";
import nikeMensRevolution5RunningShoeWhite from "../Resources/Images/MenShoes/nikeMensRevolution5RunningShoeWhite.jpg";
import adidasMensGrandCourtRunningShoeWhite from "../Resources/Images/MenShoes/adidasMensGrandCourtRunningShoeWhite.jpg";
import tommyHilfigerMensPandoraShoeWhite from "../Resources/Images/MenShoes/tommyHilfigerMensPandoraShoeWhite.jpg";
import tommyHilfigerMensPandoraShoeRed from "../Resources/Images/MenShoes/tommyHilfigerMensPandoraShoeRed.jpg";
import tommyHilfigerMensPandoraShoeBlack from "../Resources/Images/MenShoes/tommyHilfigerMensPandoraShoeBlack.jpg";
import VansEraBlack from "../Resources/Images/MenShoes/VansEraBlack.png";
import VansEraBlue from "../Resources/Images/MenShoes/VansEraBlue.png";
import VansEraPurple from "../Resources/Images/MenShoes/VansEraPurple.png";
import vansHeavyCanvasKyleWalkerProBlack from "../Resources/Images/MenShoes/vansHeavyCanvasKyleWalkerProBlack.png";
import vansHeavyCanvasKyleWalkerProRed from "../Resources/Images/MenShoes/vansHeavyCanvasKyleWalkerProRed.png";
import vansHeavyCanvasKyleWalkerProGreen from "../Resources/Images/MenShoes/vansHeavyCanvasKyleWalkerProGreen.png";
import vansHeavyCanvasKyleWalkerProOrange from "../Resources/Images/MenShoes/vansHeavyCanvasKyleWalkerProOrange.png";
import PUMAMensTazon6FMRunningShoeWhite from "../Resources/Images/MenShoes/PUMAMensTazon6FMRunningShoeWhite.jpg";
import PUMAMensTazon6FMRunningShoeBlack from "../Resources/Images/MenShoes/PUMAMensTazon6FMRunningShoeBlack.jpg";
import ASICSMensGelVenture6RunningShoeOrange from "../Resources/Images/MenShoes/ASICSMensGelVenture6RunningShoeOrange.jpg";
import ASICSMensGelVenture6RunningShoeRed from "../Resources/Images/MenShoes/ASICSMensGelVenture6RunningShoeRed.jpg";
import ASICSMensGelVenture6RunningShoeGrey from "../Resources/Images/MenShoes/ASICSMensGelVenture6RunningShoeGrey.jpg";
import ASICSMensGelVenture6RunningShoeBlue from "../Resources/Images/MenShoes/ASICSMensGelVenture6RunningShoeBlue.jpg";

export const MenShoesContext = createContext();

const MenShoesContextProvider = props => {
  const [menShoes] = useState([
    {
      name: "Nike Men's Revolution 5 Running Shoe",
      brand: "Nike",
      type: "shoes",
      gender: "men",
      images: [
        { src: nikeMensRevolution5RunningShoeBlack, color: "Black" },
        { src: nikeMensRevolution5RunningShoeRed, color: "Red" },
        { src: nikeMensRevolution5RunningShoeGrey, color: "Grey" },
        { src: nikeMensRevolution5RunningShoeBlue, color: "Blue" },
        { src: nikeMensRevolution5RunningShoeWhite, color: "White" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "65.00",
      sale: null,
      sizes: ["6", "6.5", "7", "8", "10", "12"],
      id: "menShoeNikeRevolution5Running",
      newrelease: "notnew",
      featured: "1"
    },
    {
      name: "Adidas Men's Grand Court Running Shoe",
      brand: "Adidas",
      type: "shoes",
      gender: "men",
      images: [{ src: adidasMensGrandCourtRunningShoeWhite, color: "White" }],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "49.95",
      sale: null,
      sizes: ["6", "6.5", "7", "7.5", "10", "10.5", "12"],
      id: "menShoeAdidasMenGrandCourt",
      newrelease: "new",
      featured: "2"
    },
    {
      name: "Tommy Hilfiger Men's Pandora Shoe",
      brand: "Tommy Hilfiger",
      type: "shoes",
      gender: "men",
      images: [
        { src: tommyHilfigerMensPandoraShoeWhite, color: "White" },
        { src: tommyHilfigerMensPandoraShoeRed, color: "Red" },
        { src: tommyHilfigerMensPandoraShoeBlack, color: "Black" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "40.00",
      sale: null,
      sizes: ["6", "6.5", "7", "7.5", "8", "10", "12", "12.5"],
      id: "menShoeTommyHilfigerPandoraShoe",
      newrelease: "notnew",
      featured: "3"
    },
    {
      name: "Vans Era",
      brand: "Vans",
      type: "shoes",
      gender: "men",
      images: [
        { src: VansEraBlack, color: "Black" },
        { src: VansEraBlue, color: "Blue" },
        { src: VansEraPurple, color: "Purple" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "50.00",
      sale: "40.00",
      sizes: ["8", "8.5", "9", "9.5", "10", "10.5"],
      id: "menShoeVansEra",
      newrelease: "new",
      featured: "4"
    },
    {
      name: "Vans Heavy Canvas Kyle Walker Pro",
      brand: "Vans",
      type: "shoes",
      gender: "men",
      images: [
        { src: vansHeavyCanvasKyleWalkerProBlack, color: "Black" },
        { src: vansHeavyCanvasKyleWalkerProRed, color: "Red" },
        { src: vansHeavyCanvasKyleWalkerProGreen, color: "Green" },
        { src: vansHeavyCanvasKyleWalkerProOrange, color: "Orange" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "75.00",
      sale: null,
      sizes: ["8", "8.5", "9", "9.5", "10", "12", "13"],
      id: "menShoeVansHeavyCanvas",
      newrelease: "notnew",
      featured: "5"
    },
    {
      name: "PUMA Men's Tazon 6 FM Running Shoe",
      brand: "PUMA",
      type: "shoes",
      gender: "men",
      images: [
        { src: PUMAMensTazon6FMRunningShoeWhite, color: "White" },
        { src: PUMAMensTazon6FMRunningShoeBlack, color: "Black" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "45.48",
      sale: null,
      sizes: ["8", "8.5", "9", "9.5", "10", "12", "13"],
      id: "menShoePUMATazon6FM",
      newrelease: "new",
      featured: "6"
    },
    {
      name: "ASICS Men's Gel-Venture 6 Running Shoe",
      brand: "ASICS",
      type: "shoes",
      gender: "men",
      images: [
        { src: ASICSMensGelVenture6RunningShoeOrange, color: "Orange" },
        { src: ASICSMensGelVenture6RunningShoeBlue, color: "Blue" },
        { src: ASICSMensGelVenture6RunningShoeRed, color: "Red" },
        { src: ASICSMensGelVenture6RunningShoeGrey, color: "Grey" }
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure magnam non! Possimus esse fuga culpa nihil? Expedita dolorum, perspiciatis reprehenderit voluptatum ex animi sunt totam dolores ea maiores assumenda!",
      price: "56.05",
      sale: "50.00",
      sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
      id: "menShoeASCISGelVenture6Running",
      newrelease: "notnew",
      featured: "7"
    }
  ]);
  return (
    <MenShoesContext.Provider value={{ menShoes }}>
      {props.children}
    </MenShoesContext.Provider>
  );
};

export default MenShoesContextProvider;
