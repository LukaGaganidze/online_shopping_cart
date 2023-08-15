import React from "react";
import MaskItems from "./MaskItems";

import ShoppincSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

// mask images
import foiMAskMain from "../../../../../assets/main-content-pics/maks/mask1/mask1-main/mask1-main.jpg";
import mask1o1 from "../../../../../assets/main-content-pics/maks/mask1/mask1-secondary1.jpg";
import mask1o2 from "../../../../../assets/main-content-pics/maks/mask1/mask1-secondary2.jpg";
import mask1o3 from "../../../../../assets/main-content-pics/maks/mask1/mask1-secondary3.jpg";
import mask1o4 from "../../../../../assets/main-content-pics/maks/mask1/mask1-secondary4.jpg";

import epeeMAskMain from "../../../../../assets/main-content-pics/maks/mask2/mask2-main/mask2-main.jpg";
import mask2o1 from "../../../../../assets/main-content-pics/maks/mask2/mask2-secondary1.jpg";
import mask2o2 from "../../../../../assets/main-content-pics/maks/mask2/mask2-secondary2.jpg";
import mas2o3 from "../../../../../assets/main-content-pics/maks/mask2/mask2-secondary3.jpg";
import mask2o4 from "../../../../../assets/main-content-pics/maks/mask2/mask2-secondary4.jpg";

import sabreMAskMain from "../../../../../assets/main-content-pics/maks/mask3/mask3-main/mask3-main.jpg";
import mask3o1 from "../../../../../assets/main-content-pics/maks/mask3/mask3-secondary1.jpg";
import mask3o2 from "../../../../../assets/main-content-pics/maks/mask3/mask3-secondary2.jpg";
import mask3o3 from "../../../../../assets/main-content-pics/maks/mask3/mask3-secondary3.jpg";
import mask3o4 from "../../../../../assets/main-content-pics/maks/mask3/mask3-secondary4.jpg";

import practiceMAskMain from "../../../../../assets/main-content-pics/maks/mask4/mask1-main/mask4-main.jpg";
import mask4o1 from "../../../../../assets/main-content-pics/maks/mask4/mask4-secondary1.jpg";
import mask4o2 from "../../../../../assets/main-content-pics/maks/mask4/mask4-secondary2.jpg";
import mask4o3 from "../../../../../assets/main-content-pics/maks/mask4/mask4-secondary3.jpg";
import mask4o4 from "../../../../../assets/main-content-pics/maks/mask4/mask4-secondary4.jpg";

const MaskDummyData = [
  {
    name: "FOIL ELECRIC MASK",
    description: "INTERNATIONAL STANDART FOIL MASK",
    img: foiMAskMain,
    price: 270,
    quantity: 1,
    id: "foil-mask",
    secondary: [mask1o1, mask1o2, mask1o3, mask1o4],
    additionalInfo:
      "FIE official world standart mask, high quality and long lesting 1600N. Allowed on any international A class competition. ",
  },
  {
    name: "EPEE MASK",
    description: "INTERNATIONAL STANDART EPEE MASK",
    img: epeeMAskMain,
    price: 250,
    quantity: 1,
    id: "eppe-mask",
    secondary: [mask2o1, mask2o2, mas2o3, mask2o4],
    additionalInfo:
      "FIE official world standart mask, high quality and long lesting 1600N. Allowed on any international A class competition. ",
  },
  {
    name: "SABRE MASK",
    description: "INTERNATIONAL STANDART SABRE MASK",
    img: sabreMAskMain,
    price: 280,
    quantity: 1,
    id: "sabre-mask",
    secondary: [mask3o1, mask3o2, mask3o3, mask3o4],
    additionalInfo:
      "FIE official world standart mask, high quality and long lesting 1600N. Allowed on any international A class competition. ",
  },
  {
    name: "PRACTICE MASK",
    description: "HIGH QUALITY PRACTICE MASK",
    img: practiceMAskMain,
    price: 200,
    quantity: 1,
    id: "practice-mask",
    secondary: [mask4o1, mask4o2, mask4o3, mask4o4],
    additionalInfo:
      "FIE official world standart mask, high quality and long lesting 1600N. This model is made fore practice, for competitions you ca checkout other mask models. ",
  },
];

const Mask = () => {
  return (
    <ShoppincSectionCard>
      {MaskDummyData.map((product) => (
        <MaskItems
          name={product.name}
          description={product.description}
          img={product.img}
          price={product.price}
          id={product.id}
          key={product.id}
          quantity={product.quantity}
          secondaryImgs={product.secondary}
          additionalInfo={product.additionalInfo}
        />
      ))}
    </ShoppincSectionCard>
  );
};

export default Mask;
