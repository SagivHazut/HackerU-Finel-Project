import React from "react";
import CardComponent from "../components/CardComponent/CardComponent";
function Basket(props) {
  const { cartItems } = props;
  return (
    <div className="block col-1">
      <h2>Cart Items</h2>
      <CardComponent>
        <div>{cartItems.lenght === 0 && <div> Cart Is Empty</div>}</div>
      </CardComponent>
    </div>
  );
}

export default Basket;
