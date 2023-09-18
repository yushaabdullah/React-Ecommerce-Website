import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
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
      isNew: false,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: false,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: false,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      isNew: false,
      oldPrice: 500,
      price: 300,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
