import React from "react";
import { useSelector } from "react-redux";
import Card from "../../common/card";
import { FaBars } from "react-icons/fa";

const Index = ({ setDrawer }) => {
  // get all product from redux-store
  const products = useSelector((state) => state.products.products);
  return (
    <div className="home_wrapper">
      <div className="home_container">
        <div className="heading">
          <div className="logo">
            <h3>Edvora</h3>
            <span>
              <FaBars onClick={() => setDrawer(true)} />
            </span>
          </div>
          <p>Products</p>
        </div>
        <div className="slider_content">
          <div className="slider_heading">
            <h3>Product Names</h3>
          </div>
          <div className="slider_product">
            {products?.map((item) => (
              <Card
                key={item.time}
                img={item.image}
                imgWidth="70px"
                imgHeight="70px"
                productName={item.product_name}
                productBrand={item.brand_name}
                productPrice={item.price}
                location={item.address.city}
                state={item.address.state}
                date={item.date}
                description={item.discription}
              />
            ))}
          </div>
        </div>
        <div className="slider_content">
          <div className="slider_heading">
            <h3>Brand Names</h3>
          </div>
          <div className="slider_product">
            {products?.map((item) => (
              <Card
                key={item.time}
                img={item.image}
                imgWidth="70px"
                imgHeight="70px"
                productName={item.product_name}
                productBrand={item.brand_name}
                productPrice={item.price}
                location={item.address.city}
                date={item.date}
                description={item.discription}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
