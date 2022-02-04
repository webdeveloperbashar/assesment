import React from "react";
import { useDispatch } from "react-redux";
import { productSelect } from "../../store/actions/productSelectAction";

const Card = ({
  img,
  imgWidth,
  imgHeight,
  productName,
  productBrand,
  productPrice,
  location,
  state,
  date,
  description,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card_wrapper"
      onClick={() => dispatch(productSelect({ state: state, city: location }))}
    >
      <div className="card_inner">
        <div className="card_top">
          <img src={img} width={imgWidth} height={imgHeight} alt="cardImg" />
          <div className="product_details">
            <div className="name">
              <h2>{`${productName.substring(0, 15)}...`}</h2>
            </div>
            <div className="brand">
              <h3>{productBrand}</h3>
            </div>
            <div className="price">
              <p>$ {productPrice}</p>
            </div>
          </div>
        </div>
        <div className="card_bottom">
          <div className="lc_date">
            <p>{location}</p>
            <p>
              Date:{" "}
              {new Date(date).toLocaleDateString("en-US").split("/").join(":")}
            </p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
