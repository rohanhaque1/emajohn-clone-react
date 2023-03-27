import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const addToCart = props.addToCart

  return (
    <>
      <div>
        <div className="max-w-xs rounded-lg shadow-md border-2 border-cyan-600 p-2">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-lg h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold tracking-wide">{name}</h4>
              <h3 className="text-xl">Price: ${price}</h3>
              <p>Manufacturer: {seller}</p>
              <p>Rating: {ratings}</p>
            </div>
            <button
              onClick={() => addToCart(props.product)}
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Add To Cart
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
