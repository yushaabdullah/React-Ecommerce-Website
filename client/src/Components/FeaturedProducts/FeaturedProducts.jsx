import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          At <strong>Wave & Thread</strong>, we take pride in offering a diverse
          range of clothing that cater to your every need. Some of our
          highlighted categories include:
          <br />
          <strong>Men's Fashion: </strong>
          From casual tees to sharp suits, our men's clothing collection is
          designed to make every man look and feel his best.
          <br />
          <strong>Women's Fashion: </strong>
          Stay ahead in the fashion game with our women's clothing range. Find
          dresses, tops, and accessories to express your unique style.
          <br />
          <strong>Kids' Fashion: </strong>
          Dress your little ones in style with our adorable and comfortable
          children's clothing. We have options for all ages, from infants to
          teenagers.
          <br />
          No matter what you're searching for, <strong>Wave & Thread</strong> is
          your go-to destination for quality products and exceptional customer
          service. Start exploring our collection today!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
