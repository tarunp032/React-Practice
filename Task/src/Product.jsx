import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Product.css";

const Product = ({ data }) => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  //  Search Filter
  const filteredData = data.filter(
    (item) =>
      item?.brand?.toLowerCase().includes(search.toLowerCase()) ||
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.category?.toLowerCase().includes(search.toLowerCase()),
  );

  // const filteredData = data.filter(
  //   (item) =>
  //   item.title.toLowerCase().includes(search.toLowerCase()) ||
  //     item.brand.toLowerCase().includes(search.toLowerCase()) ||
  //         item.category.toLowerCase().includes(search.toLowerCase()),
  // );

  //  Sorting Logic
  const getSortedData = () => {
    let sortedArray = [...filteredData];

    if (sortType === "PRICE_LOW_HIGH") {
      sortedArray.sort((a, b) => a.price - b.price);
    }

    if (sortType === "PRICE_HIGH_LOW") {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    if (sortType === "RATING_HIGH_LOW") {
      sortedArray.sort((a, b) => b.rating - a.rating);
    }

    return sortedArray;
  };

  const sortedData = getSortedData();

  return (
    <>
      {/* Search + Sort Section */}
      <div className="top-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title, brand or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="sort-buttons">
          <button onClick={() => setSortType("PRICE_LOW_HIGH")}>
            Price: L-H
          </button>
          <button onClick={() => setSortType("PRICE_HIGH_LOW")}>
            Price: H-L
          </button>
          <button onClick={() => setSortType("RATING_HIGH_LOW")}>
            Rating ⭐
          </button>
        </div>
      </div>

      {/*  Products */}
      <div className="product-container">
        {sortedData.map((item) => (
          <div className="product-card" key={item.id}>
            <LazyLoadImage
              src={item.thumbnail}
              alt={item.title}
              effect="blur"
              className="product-img"
            />

            <h2 className="product-title">{item.title}</h2>

            <p>
              <b>Brand:</b> {item.brand}
            </p>
            <p>
              <b>Category:</b> {item.category}
            </p>

            <p className="price">
              <b>Price:</b> ₹{item.price}
              <span className="discount">({item.discountPercentage}% OFF)</span>
            </p>

            <p>
              <b>Rating:</b> ⭐ {item.rating}
            </p>
            <p>
              <b>Stock:</b> {item.stock}
            </p>
            <p>
              <b>Availability:</b> {item.availabilityStatus}
            </p>

            <p>
              <b>Description:</b> {item.description}
            </p>

            <p>
              <b>Tags:</b> {item.tags.join(", ")}
            </p>

            <p>
              <b>Dimensions:</b> {item.dimensions.width} ×{" "}
              {item.dimensions.height} × {item.dimensions.depth} cm
            </p>

            <p>
              <b>Weight:</b> {item.weight} g
            </p>

            <p>
              <b>Warranty:</b> {item.warrantyInformation}
            </p>
            <p>
              <b>Shipping:</b> {item.shippingInformation}
            </p>
            <p>
              <b>Return Policy:</b> {item.returnPolicy}
            </p>
            <p>
              <b>Minimum Order:</b> {item.minimumOrderQuantity}
            </p>

            {/* Reviews */}
            <div className="reviews">
              <h4>Reviews</h4>
              {item.reviews.map((review, index) => (
                <div className="review" key={index}>
                  <p>
                    <b>Name:</b> {review.reviewerName}
                  </p>
                  <p>
                    <b>Rating:</b> ⭐ {review.rating}
                  </p>
                  <p>
                    <b>Comment:</b> {review.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* Meta */}
            <div className="meta">
              <p>
                <b>SKU:</b> {item.sku}
              </p>
              <p>
                <b>Barcode:</b> {item.meta.barcode}
              </p>
              <p>
                <b>Created At:</b>{" "}
                {new Date(item.meta.createdAt).toDateString()}
              </p>
            </div>
          </div>
        ))}

        {/* No Result */}
        {sortedData.length === 0 && (
          <h2 className="no-result">No products found</h2>
        )}
      </div>
    </>
  );
};

export default Product;
