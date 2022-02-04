import Image from "next/image";
import React, { useState } from "react";
import arrow from "../../assets/icon/arrow.png";

const MyAccordion = ({ menu, products, state, city }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="dropdown_menu">
      <div className="menu" onClick={() => setOpenDropdown(!openDropdown)}>
        <p>{menu}</p>
        <Image src={arrow} width="10px" height="10px" alt="arrow" />
      </div>
      <div className={`content ${openDropdown ? "openDropdown" : ""}`}>
        <ul>
          {products &&
            products.map((pdName) => (
              <li key={pdName.time}>- {pdName.product_name}</li>
            ))}
          {state &&
            state.map((pdName, index) => (
              <li key={index + 1}>- {pdName.state}</li>
            ))}
          {city &&
            city.map((pdName, index) => (
              <li key={index + 1}>- {pdName.city}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MyAccordion;
