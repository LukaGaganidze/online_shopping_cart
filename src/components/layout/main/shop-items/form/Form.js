import React from "react";

import ShoppingSectionCard from "../../../../UI/ShoppincSectionCard/ShoppincSectionCard";

import FormItemSmall from "./FormItemSmall";
import FormItemLarge from "./FormItemLarge";

import classes from "./Form.module.css";

// form images

// small
import glovePic from "../../../../../assets/main-content-pics/forms/glove/glove-main/glove-main.jpg";
import glove1 from "../../../../../assets/main-content-pics/forms/glove/glove-1.jpg";
import glove2 from "../../../../../assets/main-content-pics/forms/glove/glove-2.jpg";
import glove3 from "../../../../../assets/main-content-pics/forms/glove/glove-3.jpg";
import glove4 from "../../../../../assets/main-content-pics/forms/glove/glove-4.jpg";

import foilLamePic from "../../../../../assets/main-content-pics/forms/foilJacket/faoil-man-main/faoil-man-main.jpg";
import foilLame1 from "../../../../../assets/main-content-pics/forms/foilJacket/foil-jacket1.jpg";
import foilLame2 from "../../../../../assets/main-content-pics/forms/foilJacket/foil-jacket2.jpg";
import foilLame3 from "../../../../../assets/main-content-pics/forms/foilJacket/foil-jacket3.jpg";
import foilLame4 from "../../../../../assets/main-content-pics/forms/foilJacket/foil-jacket4.jpg";

import sabreLamePic from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket-main/sabre-jacket-main.jpg";
import sabreLame1 from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket1.jpg";
import sabreLame2 from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket2.jpg";
import sabreLame3 from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket3.jpg";
import sabreLame4 from "../../../../../assets/main-content-pics/forms/sabreJacket/sabre-jacket4.jpg";

// large
import menFormPic from "../../../../../assets/main-content-pics/forms/formMan/form-man-main/form-man-main.jpg";
import manForm1 from "../../../../../assets/main-content-pics/forms/formMan/form-man1.jpg";
import manForm2 from "../../../../../assets/main-content-pics/forms/formMan/form-man2.jpg";
import manForm3 from "../../../../../assets/main-content-pics/forms/formMan/form-man3.jpg";
import manForm4 from "../../../../../assets/main-content-pics/forms/formMan/form-man4.jpg";

import womanFormPic from "../../../../../assets/main-content-pics/forms/formWoman/form-woman-main/form-woman-main.jpg";
import womanForm1 from "../../../../../assets/main-content-pics/forms/formWoman/form-woman1.jpg";
import womanForm2 from "../../../../../assets/main-content-pics/forms/formWoman/form-woman2.jpg";
import womanForm3 from "../../../../../assets/main-content-pics/forms/formWoman/form-woman3.jpg";
import womanForm4 from "../../../../../assets/main-content-pics/forms/formWoman/form-woman4.jpg";

const FormDummyData = [
  {
    name: "GLOVE",
    description: "GLOVE FOR FOIL AND EPEE",
    img: glovePic,
    price: 39,
    quantity: 1,
    id: "GLOVE",
    smallDisplay: true,
    secondary: [glove1, glove2, glove3, glove4],
    additionalInfo:
      "The product is used for two of the fencing weapons, foil and epee. It has special grip, which compliments your weapon control.",
  },
  {
    name: "FOIL JACKET",
    description: "FOIL ELECTRIC JACKET LIGHT",
    img: foilLamePic,
    price: 181,
    quantity: 1,
    id: "LIGHTWEIGHTFOILLAMEMENS",
    smallDisplay: true,
    secondary: [foilLame1, foilLame2, foilLame3, foilLame4],
    additionalInfo:
      "FIE international standart foil electric jacket 800N. It is long lasting, ultra light and washable. ",
  },
  {
    name: "SABRE JACKET",
    description: "SABRE ELECTRIC JACKET LIGHT",
    img: sabreLamePic,
    price: 290,
    quantity: 1,
    id: "LIGHTWEIGHTSABRELAMEMENS",
    smallDisplay: true,
    secondary: [sabreLame1, sabreLame2, sabreLame3, sabreLame4],
    additionalInfo:
      "FIE international standart sabre electric jacket 800N. It is long lasting, ultra light and washable.",
  },
  {
    name: "MENS FORM",
    description: "MEN FENCNING FORM FOR ALL WEAPONS",
    img: menFormPic,
    price: 261,
    quantity: 1,
    id: "MENSJACKET",
    smallDisplay: false,
    secondary: [manForm1, manForm2, manForm3, manForm4],
    additionalInfo:
      "FIE international standart men form 1600N. It is long lasting,  light and washable. Can be used for all fencing weapons.",
  },
  {
    name: "WOMANS FORM",
    description: "WOMAN FENCNING FORM FOR ALL WEAPONS",
    img: womanFormPic,
    price: 39,
    quantity: 1,
    id: "WOMANSJACKET",
    smallDisplay: false,
    secondary: [womanForm1, womanForm2, womanForm3, womanForm4],
    additionalInfo:
      "FIE international standart woman form 1600N. It is long lasting,  light and washable. Can be used for all fencing weapons.",
  },
];
const FormDataSmall = FormDummyData.filter((el) => el.smallDisplay);
const FormDataLarge = FormDummyData.filter((el) => !el.smallDisplay);

const Form = () => {
  return (
    <React.Fragment>
      <ShoppingSectionCard className={classes["form-product-sec1"]}>
        {FormDataSmall.map((form) => (
          <FormItemSmall
            name={form.name}
            description={form.description}
            img={form.img}
            price={form.price}
            quantity={form.quantity}
            id={form.id}
            key={form.id}
            secondaryImgs={form.secondary}
            additionalInfo={form.additionalInfo}
          />
        ))}
      </ShoppingSectionCard>

      <div className={classes["form-sec-innermarg"]}></div>

      <ShoppingSectionCard className={classes["form-product-sec1"]}>
        {FormDataLarge.map((formL) => (
          <FormItemLarge
            name={formL.name}
            description={formL.description}
            img={formL.img}
            price={formL.price}
            quantity={formL.quantity}
            id={formL.id}
            key={formL.id}
            secondaryImgs={formL.secondary}
            additionalInfo={formL.additionalInfo}
          />
        ))}
      </ShoppingSectionCard>
    </React.Fragment>
  );
};

export default Form;
