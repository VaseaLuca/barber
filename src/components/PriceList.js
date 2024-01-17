import React from "react";

import Footer from "./Home/Footer";
import "./PriceList.scss";

const pricesFrizerie = [
  {
    name: "Tuns Clasic",
    spacer: "......................",
    price: "70 RON",
  },
  {
    name: "Tuns Fade",
    spacer: "......................",
    price: "80 RON",
  },
  {
    name: "Tuns din Foarfecă",
    spacer: "......................",
    price: "80 RON",
  },
  {
    name: "Pachet tuns și Barbă",
    spacer: "......................",
    price: "90 RON",
  },
  {
    name: "Tuns Barbă",
    spacer: "......................",
    price: "30 RON",
  },
  {
    name: "Spălat",
    spacer: "......................",
    price: "10 RON",
  },
];
const pricesCoafor = [
  {
    name: "Pachet Tuns",
    spacer: "......................",
    price: "150 RON",
  },
  {
    name: "Coafat - Păr Scurt",
    spacer: "......................",
    price: "70 RON",
  },
  {
    name: "Coafat Drept",
    spacer: "......................",
    price: "80 RON",
  },
  {
    name: "Coafat Bucle",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Coafat Ocazie",
    spacer: "......................",
    price: "250 RON",
  },
  {
    name: "Coafat - Mireasă",
    spacer: "......................",
    price: "250 - 500 RON",
  },
  {
    name: "Vopsit Total",
    spacer: "......................",
    price: "250 - 400 RON",
  },
  {
    name: "Vopsit Suvițe",
    spacer: "......................",
    price: "400 - 700 RON",
  },
  {
    name: "Decolorat",
    spacer: "......................",
    price: "500 - 800 RON",
  },
  {
    name: "Balayage",
    spacer: "......................",
    price: "800 - 1200 RON",
  },
];

const priceManichiura = [
  {
    name: "Manichiură Clasică",
    spacer: "......................",
    price: "60 RON",
  },
  {
    name: "Pedichiură Clasică",
    spacer: "......................",
    price: "70 RON",
  },
  {
    name: "Manichiură cu ojă Semipermanentă",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Pedichiură cu ojă Semipermanentă",
    spacer: "......................",
    price: "110 RON",
  },
  {
    name: "Îndepărtat Semipermanentă",
    spacer: "......................",
    price: "30 RON",
  },
  {
    name: "Îndepărtat Gel",
    spacer: "......................",
    price: "40 RON",
  },
];

const PriceList = () => {
  return (
    <div className="price-list">
      <div className="price-name">Frizerie</div>

      <table>
        <tbody>
          {pricesFrizerie.map((price) => (
            <tr key={price.name}>
              <td>{price.name}</td>
              <td>{price.spacer}</td>
              <td>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="price-name">Coafor</div>
      <table>
        <tbody>
          {pricesCoafor.map((price) => (
            <tr key={price.name}>
              <td>{price.name}</td>
              <td>{price.spacer}</td>
              <td>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="price-name">Manichiură & Pedichiură</div>
      <table>
        <tbody>
          {priceManichiura.map((price) => (
            <tr key={price.name}>
              <td>{price.name}</td>
              <td>{price.spacer}</td>
              <td>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};
export default PriceList;
