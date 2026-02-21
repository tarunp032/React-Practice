import React, { useEffect, useEffectEvent, useState } from "react";
import axios from "axios";
const UseEffectEvent = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchData = useEffectEvent(() => {
    console.log(`>>>toggle_first`, toggle);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  });

  console.log(`>>>toggle_last`, toggle);
  console.log(`>>>data`, data);

  useEffect(() => {
    fetchData();
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div>
      <h1>Event</h1>
      <button onClick={handleToggle}>Toggle</button>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.title}</h3>
            <img
              src={item.thumbnail}
              alt={item.category}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <p>Price: ₹{item.price}</p>
            <div>
              {[1, 2, 3, 4, 5].map((num) => (
                <span key={num} style={{ color: "gold", fontSize: "18px" }}>
                  {num <= Math.round(item.rating.rate) ? "★" : "☆"}
                </span>
              ))}
              <span style={{ marginLeft: "6px" }}>({item.rating.count})</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectEvent;
