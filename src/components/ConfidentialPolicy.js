import React from "react";

import Footer from "./Home/Footer";
import "./ConfidentialPolicy.scss";

const ConfidentialPolicy = () => {
  return (
    <div className="policy">
      <div className="policy-header">
        Politica de prelucrare a datelor personale
      </div>
      <div className="policy-description">
        <span className="description-bold">O & M GOLDEN TIMES SRL</span> , cu
        sediul legal in Iasi, Str. Prof. Emil Honoriu Nr. 22C, inmatriculata sub
        nr. J22/3634/2018, cod unic de inregistrare nr. 40360718, va comunicam
        prezenta politica de prelucrare a datelor personale, pentru a va explica
        modul in care prelucram si protejam datele dvs. cu caracter personal.{" "}
        <br />
        <br /> Va comunicam aceasta Politica la inceputul interactiunii noastre
        prin intermediul site-ului nostru web. <br />
        <br /> <span className="description-bold">
          https://goldentimes.ro
        </span>{" "}
        nu colecteaza date personale <br /> Site-ul nostru nu colecteaza
        informatii personale (numele complet, adresa de e-mail, numarul de
        telefon, sexul, preferintele de limba ale browserului sau adresa IP)
        atunci cand ne contactati prin formularul de contact, ne contactati
        telefonic / email sau folositi serviciile. <br />{" "}
        <span className="description-bold">https://goldentimes.ro</span> nu
        foloseste module cookie.
        <br />
        <br /> Nu vom colecta sau prelucra date cu caracter personal sensibile
        legate de dumneavoastra (de exemplu informatii despre originea rasiala
        sau etnica, opiniile politice, confesiunea religioasa sau convingerile
        filozofice, sanatatea, viata sexuala sau orientarea sexuala), cu
        exceptia cazului in care suntem obligati sa facem acest lucru prin lege
        si/sau in cazul in care ne-ati furnizat consimtamantul dumneavoastra
        explicit in mod separat. In cazul in care ne furnizati in mod voluntar
        date cu caracter personal (inclusiv date cu caracter personal sensibile)
        prin interactiunea dumneavoastra cu website-ul nostru sau prin
        corespondenta cu noi prin telefon, e-mail sau in orice alta modalitate,
        din proprie vointa si nu la cererea noastra, vom sterge astfel de date
        cu caracter personal din sistemele noastre daca nu consideram ca
        prelucrarea acestora este necesara pentru un scop legitim. <br />
        <br /> <span className="description-bold">https://goldentimes.ro</span>
        nu distribuie nicio informatie de identificare personala cu agentii de
        publicitate si nu permite agentilor de publicitate sa acceseze
        informatiile personale. Ca vizitator, sau ca si client, aveti dreptul la
        modificarea sau stergerea completa a datelor pe care le detinem despre
        dumneavoastra.
      </div>
      <Footer />
    </div>
  );
}
export default ConfidentialPolicy;