import React from "react";

import classes from "./Wire.module.css";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

import WireItem from "./WireItem";

// wire images
import foilSabreWireImg from "../../../../../assets/main-content-pics/wires/foil/foil-wire-main/foil-wire-main.jpg";
import foilWire1 from "../../../../../assets/main-content-pics/wires/foil/foil-wire-1.jpg";
import foilWire2 from "../../../../../assets/main-content-pics/wires/foil/foil-wire-2.jpg";
import foilWire3 from "../../../../../assets/main-content-pics/wires/foil/foil-wire-3.jpg";
import foilWire4 from "../../../../../assets/main-content-pics/wires/foil/foil-wire-4.jpg";

import epeeWireImg from "../../../../../assets/main-content-pics/wires/epee/epee-wire-main/epee-wire-main.jpg";

import epeeWire1 from "../../../../../assets/main-content-pics/wires/epee/epee-wire1.jpg";
import epeeWire2 from "../../../../../assets/main-content-pics/wires/epee/epee-wire2.jpg";
import epeeWire3 from "../../../../../assets/main-content-pics/wires/epee/epee-wire3.jpg";
import epeeWire4 from "../../../../../assets/main-content-pics/wires/epee/epee-wire4.jpg";

const WireDummyData = [
  {
    name: "FOIL BODY WIRE",
    description: "BODY WIRE WITH 2 PINS",
    img: foilSabreWireImg,
    price: 24,
    quantity: 1,
    id: "SABRE/FOIL-bodyWire",
    secondary: [foilWire1, foilWire2, foilWire3, foilWire4],
    additionalInfo:
      "Electric body wire. Used for two of the fencing weapons, foil and sabre. Wire is transparent and hold the FIE international stardart for wires.",
  },
  {
    name: "EPEE BODY WIRE",
    description: "BODY WIRE WITH 3 PINS",
    img: epeeWireImg,
    price: 25,
    quantity: 1,
    id: "EPEE-bodyWire",
    secondary: [epeeWire1, epeeWire2, epeeWire3, epeeWire4],
    additionalInfo:
      "Electric body wire. Used for epee, foil and sabre. Wire is transparent and hold the FIE international stardart for wires.",
  },
];

const Wire = () => {
  return (
    <ShoppincSectionCard className={classes["wire-product-section"]}>
      {WireDummyData.map((wire) => (
        <WireItem
          name={wire.name}
          description={wire.description}
          img={wire.img}
          price={wire.price}
          quantity={wire.quantity}
          id={wire.id}
          key={wire.id}
          secondaryImgs={wire.secondary}
          additionalInfo={wire.additionalInfo}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Wire;
