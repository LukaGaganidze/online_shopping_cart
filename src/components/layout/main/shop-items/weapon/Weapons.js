import React from "react";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";
import WeaponsProductItem from "./WeaponsProductItem";

import foilImage from "../../../../../assets/main-content-pics/weapons/foil/foilmain/foilmain.jpg";
import foil1 from "../../../../../assets/main-content-pics/weapons/foil/foil1.jpg";
import foil2 from "../../../../../assets/main-content-pics/weapons/foil/foil2.jpg";
import foil3 from "../../../../../assets/main-content-pics/weapons/foil/foil3.jpg";
import foil4 from "../../../../../assets/main-content-pics/weapons/foil/foil4.jpg";

import epeeImage from "../../../../../assets/main-content-pics/weapons/epee/epeemain/epeemain.jpg";
import epee1 from "../../../../../assets/main-content-pics/weapons/epee/epee1.jpg";
import epee2 from "../../../../../assets/main-content-pics/weapons/epee/epee2.jpg";
import epee3 from "../../../../../assets/main-content-pics/weapons/epee/epee3.jpg";
import epee4 from "../../../../../assets/main-content-pics/weapons/epee/epee4.jpg";

const WeaponsDummyData = [
  {
    name: "FOIL",
    description: "COMPLETE FENCING WEAPON",
    img: foilImage,
    secondary: [foil1, foil2, foil3, foil4],
    price: 210,
    quantity: 1,
    id: "foil-1",
    additionalInfo:
      "This is complete foil, with all attributes included. This product contains every attribute electric foil needs to function.",
  },
  {
    name: "EPEE",
    description: "COMPLETE FENCING WEAPON",
    img: epeeImage,
    price: 210,
    quantity: 1,
    id: "eppe-1",
    secondary: [epee1, epee2, epee3, epee4],
    additionalInfo:
      "This is complete epee, with all attributes included. This product contains every attribute electric epee needs to function",
  },
];

const Weapons = () => {
  return (
    <ShoppincSectionCard>
      {WeaponsDummyData.map((weapon) => (
        <WeaponsProductItem
          key={weapon.id}
          name={weapon.name}
          description={weapon.description}
          img={weapon.img}
          secondaryImgs={weapon.secondary}
          price={weapon.price}
          quantity={weapon.quantity}
          id={weapon.id}
          additionalInfo={weapon.additionalInfo}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Weapons;
