import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )
  
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <><button onClick={()=> navigate(-1)}>Back</button>
    <div>
      <h2>My Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.thumbnail} alt={item.category} />
          <p>Price: ₹{item.price}</p>
          <p>Category: {item.category}</p>
          <p>Qty: {item.quantity}</p>
          <p>Total: ₹{item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Remove Item</button>
          <hr />
        </div>
      ))}
    </div>
    </>
  );
}

export default Cart;
