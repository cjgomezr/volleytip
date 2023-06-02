import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NCBKHBu1aHMf2RGeQlCskPMilnRI9wYFSlQjFyXyJSQbA2FwRWHo2nPfUCIr6xqunnZQ5Kde2Cw014VO0XcaNRe00KI8ikZbR"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {products} );
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {

      console.log(err.response.data);
    }
  };

  return (
    <div className="cart">
      <h1>Productos en tu carro</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt=""
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} * {item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <div className="checkout">
        <button onClick={handlePayment}>PROCEDER AL PAGO</button>
      </div>

      <span className="reset" onClick={() => dispatch(resetCart())}>
        Limpiar carrito
      </span>
    </div>
  );
};

export default Cart;
