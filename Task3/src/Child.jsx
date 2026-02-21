import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Child = ({ sendData }) => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    sendData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <ClipLoader size={40} color="#6366f1" />
      </div>
    );
  }

  return null;
};

export default Child;
