import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Child = ({ sendData }) => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    if (sendData) {
  sendData(result.data.products);
}

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader-card">
          <ClipLoader size={58} color="#6366f1" />
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Child;
