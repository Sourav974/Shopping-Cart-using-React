import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          price: 200000,
          title: "Macbook Pro M1",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 120000,
          title: " I phone 13 Pro",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 70000,
          title: " I Pad Pro",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }

  render() {
    const { product } = this.state;
    return (
      <div className="cart">
        {product.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
