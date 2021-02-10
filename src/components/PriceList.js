import React from "react";

import Footer from "./Home/Footer";
import "./PriceList.scss";

function PriceList() {
  const pricesFrizerie = [
    {
      name: "Tuns Clasic",
      time: "30 Min",
      price: "40 RON",
    },
    {
      name: "Tuns Fade",
      time: "45 Min",
      price: "50 RON",
    },
    {
      name: "Tuns Zero",
      time: "15 Min",
      price: "20 RON",
    },
    {
      name: "Tuns Păr Lung",
      time: "45 Min",
      price: "50 RON",
    },
    {
      name: "Contur",
      time: "10 Min",
      price: "15 RON",
    },
    {
      name: "Spălat",
      time: "5 Min",
      price: "10 RON",
    },
    {
      name: "Barbă Fade",
      time: "15 Min",
      price: "20 RON",
    },
    {
      name: "Barbă",
      time: "10 Min",
      price: "10 RON",
    },
    {
      name: "Mustață",
      time: "5 Min",
      price: "5 RON",
    },
  ];
  const pricesCoafor = [
    {
      name: "Tuns Păr Scurt",
      time: "45 Min",
      price: "50 RON",
    },
    {
      name: "Tuns Păr Lung",
      time: "60 Min",
      price: "60 RON",
    },
    {
      name: "Tuns - Schimbare Formă",
      time: "60 Min",
      price: "60 RON",
    },
    {
      name: "Spălat",
      time: "10 Min",
      price: "20 RON",
    },
    {
      name: "Coafat Drept",
      time: "30 Min",
      price: "40 RON",
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
      price: "150-250 RON",
    },
    {
      name: "Coafat - Mireasă",
      time: "90 Min",
      price: "250-500 RON",
    },
    {
      name: "Vopsit Rădăcină",
      time: "30 Min",
      price: "40 RON",
    },
    {
      name: "Vopsit Total",
      time: "40 Min",
      price: "60 RON",
    },
    {
      name: "Vopsit Suvițe",
      time: "60 Min",
      price: "100 RON",
    },
    {
      name: "Decapaj",
      time: "60 Min",
      price: "150 RON",
    },
    {
      name: "Coafat Extensii",
      time: "60 Min",
      price: "110 RON",
    },
    {
      name: "Montat Extensii",
      time: "120 Min",
      price: "7 RON/mesa",
    },
    {
      name: "Montat Extensii Bandă",
      time: "90 Min",
      price: "150 RON",
    },
    {
      name: "Permanent (manopera)",
      time: "60 Min",
      price: "150 RON",
    },
    {
      name: "Vopsea/pudra/sol.Permanent",
      time: "",
      price: "12 RON/10 Gr",
    },
  ];

  return (
    <div className="price-list">
      <div className="price-name">Frizerie</div>
      <table>
        <tbody>
          {pricesFrizerie.map((price, index) => (
            <tr key={index}>
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
          {pricesCoafor.map((price, index) => (
            <tr key={index}>
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