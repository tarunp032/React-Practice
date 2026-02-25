import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setProducts(data.products));
      setLoading(false);
    })
  },[])
  return (
    <div>
      <h2>Home Page</h2>

      {loading ?(
        <p>Loading...</p>
      ) : (
        <p>Data Loaded Successfully</p>
      )}
    </div>
  )
}

export default Home
