import React, { useEffect } from 'react'
import axios from 'axios'
const Child = ({sendData}) => {

  const fetchData = async() => {
    const result = await axios.get("https://dummyjson.com/products");
    const first20Products = result.data.products.filter(
        (item) => item.id <= 20
      );
    sendData(first20Products)
  }
  useEffect(() =>{
    fetchData();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Child
