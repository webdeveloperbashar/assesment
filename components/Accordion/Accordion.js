import React from "react";
import MyAccordion from "./MyAccordion";
import { useSelector } from "react-redux";

const Accordion = () => {
  // all product names
  const products = useSelector((state) => state.products.products);
  // all product state and city
  const address = useSelector((state) => state.selectProducts.selectProducts);
  const menuList = [
    {
      id: 1,
      menu: "Product",
      products: products,
    },
    {
      id: 2,
      menu: "State",
      state: address,
    },
    {
      id: 3,
      menu: "City",
      city: address,
    },
  ];

  return (
    <>
      {menuList.map((elem, index) => (
        <MyAccordion key={index + 1} {...elem} />
      ))}
    </>
  );
};

export default Accordion;
