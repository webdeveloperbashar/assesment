import React from "react";
import MyAccordion from "./MyAccordion";
import { useSelector } from "react-redux";

const Accordion = () => {
  const products = useSelector((state) => state.products.products);
  const menuList = [
    {
      id: 1,
      menu: "Product",
      dropDown: products,
    },
    {
      id: 2,
      menu: "State",
      dropDown: products,
    },
    {
      id: 3,
      menu: "City",
      dropDown: products,
    },
  ];

  return (
    <>
      {menuList.map((elem) => (
        <MyAccordion key={elem.id} {...elem} />
      ))}
    </>
  );
};

export default Accordion;
