import axios from "axios";
import { use } from "react";

const productPromise = axios
  .get("https://dummyjson.com/products")
  .then((res) => res.data.products);

function ApiProduct() {
  const data = use(productPromise);

  console.log(">>>>>", data);

  return (
    <div>
      <h2>Products</h2>
      {data.map((item) => (
        <div key={item.id}>
        <img
      src={item.thumbnail}
      alt={item.category}
    />
        <p >{item.title}</p>
        <p>{item.category}</p>
        <p>{item.brand}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiProduct;