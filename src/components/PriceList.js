import React from "react";

import Footer from "./Home/Footer";
import "./PriceList.scss";

const pricesFrizerie = [
  {
    name: "Tuns Fade",
    time: "60 Min",
    price: "60 RON",
  },
  {
    name: "Tuns Clasic & Aranjat",
    time: "60 Min",
    price: "60 RON",
  },
  {
    name: "Tuns Zero",
    time: "30 Min",
    price: "30 RON",
  },
  {
    name: "Spălat Capilar",
    time: "10 Min",
    price: "10 RON",
  },
  {
    name: "Tuns Barbă & Aranjat",
    time: "15 Min",
    price: "20 RON",
  },
  {
    name: "Tuns Barbă Uniform",
    time: "10 Min",
    price: "10 RON",
  },
  {
    name: "Vopsit Barbă",
    time: "30 Min",
    price: "30 RON",
  },
];
const pricesCoafor = [
  {
    name: "Pachet Tuns",
    time: "60 Min",
    price: "140 RON",
  },
  {
    name: "Tuns",
    time: "45 Min",
    price: "80 RON",
  },
  {
    name: "Spălat",
    time: "10 Min",
    price: "20 RON",
  },
  {
    name: "Coafat Drept",
    time: "30 Min",
    price: "50 RON",
  },
  {
    name: "Coafat Bucle",
    time: "40 Min",
    price: "60 RON",
  },
  {
    name: "Coafat - Păr Scurt",
    time: "20 Min",
    price: "40 RON",
  },
  {
    name: "Coafat Ocazie",
    time: "90 Min",
    price: "150 - 250 RON",
  },
  {
    name: "Coafat - Mireasă",
    time: "90 Min",
    price: "250 - 500 RON",
  },
  {
    name: "Vopsit Total",
    time: "120 Min",
    price: "250 - 400 RON",
  },
  {
    name: "Vopsit Suvițe",
    time: "180 Min",
    price: "400 - 700 RON",
  },
  {
    name: "Balayage",
    time: "240 - 480 Min",
    price: "700 - 1200 RON",
  },
  {
    name: "Decolorat",
    time: "240 - 360 Min",
    price: "500 - 800 RON",
  },
];

const priceManichiura = [
  {
    name: "Manichiură Clasică",
    time: "30 Min",
    price: "40 RON",
  },
  {
    name: "Pedichiură Clasică",
    time: "45 Min",
    price: "60 RON",
  },
  {
    name: "Manichiură cu ojă Semipermanentă",
    time: "60 Min",
    price: "80 RON",
  },
  {
    name: "Pedichiură cu ojă Semipermanentă",
    time: "60 Min",
    price: "90 RON",
  },
  {
    name: "Îndepărtat Semipermanentă",
    time: "10 Min",
    price: "20 RON",
  },
  {
    name: "Îndepărtat Gel",
    time: "15 Min",
    price: "30 RON",
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
              <td>{price.time}</td>
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
              <td>{price.time}</td>
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
              <td>{price.time}</td>
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
