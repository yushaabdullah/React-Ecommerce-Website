import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, unde non, harum nostrum blanditiis et soluta consectetur exercitationem reprehenderit illo odit. Aliquid quo quod perferendis a corporis eveniet saepe odit.",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
    {
      id: 1,
      img1: "https://images.pexels.com/photos/3170421/pexels-photo-3170421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3170422/pexels-photo-3170422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Black T-Shirt",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, unde non, harum nostrum blanditiis et soluta consectetur exercitationem reprehenderit illo odit. Aliquid quo quod perferendis a corporis eveniet saepe odit.",
      isNew: true,
      oldPrice: 500,
      price: 300,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price} Taka</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>123 Taka</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
