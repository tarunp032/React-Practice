import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [toggle]);

  const changeState = () => {
    setToggle(!toggle);
  };

  // console.log(`>>>>>data`, data);
  console.log(`>>>>>toggle`, toggle);
  return (
    <div>
      <button onClick={changeState}>Toggle</button>

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
              src={item.image}
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

export default Api;
