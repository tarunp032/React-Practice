import React, { useEffect, useState } from "react";
import Child from "./Child";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Product = ({ appData }) => {
  const [products, setProducts] = useState({});
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const mergeProducts = (newData, source) => {
    setProducts((prev) => {
      const updated = { ...prev };

      newData.forEach((item) => {
        const productWithSource = { ...item, source };

        if (!updated[item.id]) {
          updated[item.id] = [];
        }

        const alreadyExists = updated[item.id].some(
          (p) => p.source === source
        );

        if (!alreadyExists) {
          updated[item.id].push(productWithSource);
        }
      });

      return updated;
    });
  };

  useEffect(() => {
    if (appData.length > 0) {
      mergeProducts(appData, "APP_API");
    }
  }, [appData]);

  const getDataFromChild = (childData) => {
    mergeProducts(childData, "CHILD_API");
  };

  const allProducts = Object.values(products).flat();

  const filteredData = allProducts.filter(
    (item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.category?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortType === "PRICE_LOW_HIGH") {
      return a.price - b.price;
    }
    if (sortType === "PRICE_HIGH_LOW") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div
      >
        <input
          type="text"
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleLogout}
        >
          SignOut
        </button>
      </div>

      <div className="sort-buttons" style={{ marginBottom: "15px" }}>
        <button onClick={() => setSortType("PRICE_LOW_HIGH")}>
          Price: L-H
        </button>
        <button onClick={() => setSortType("PRICE_HIGH_LOW")}>
          Price: H-L
        </button>
      </div>

      <Child sendData={getDataFromChild} />

      {sortedData.map((item, index) => (
        <div
          key={`${item.id}-${item.source}-${index}`}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <LazyLoadImage
            src={item.image}
            effect="blur"
            width="80"
            alt={item.category}
          />

          <div>
            <h4>{item.title}</h4>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <button onClick={() => navigate(`/product/${item.id}`)}>
              View Details
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
