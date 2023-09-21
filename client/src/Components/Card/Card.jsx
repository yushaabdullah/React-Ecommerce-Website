import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img1.data.attributes.url
            }
            alt=""
            className="mainImage"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImage"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>{item.oldPrice || item?.attributes.price + 500} Taka</h3>
          <h3>{item?.attributes.price} Taka</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
