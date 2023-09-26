import React from 'react';
import { useRouter } from 'next/router';
import Keyboard1Img from "../assets/keyboard1.png";
import Keyboard2Img from "../assets/keyboard2.png";
import Keyboard3Img from "../assets/keyboard3.png";
import Keyboard4Img from "../assets/keyboard4.png";
import Car1 from "../assets/1/311991727_125085003667633_7955697498765704729_n.jpg";
const products = [
  {
    id: 1,
    name: "Keyboard 1",
    imageSrc: Car1.src,
    // rating: 5,
    // numReviews: 10,
    price: 99.99,
  },
  {
    id: 2,
    name: "Keyboard 2",
    imageSrc: Keyboard2Img.src,
    // rating: 5,
    // numReviews: 8,
    price: 129.99,
  },
  {
    id: 3,
    name: "Keyboard 3",
    imageSrc: Keyboard3Img.src,
    rating: 5,
    numReviews: 6,
    price: 79.99,
  },
  {
    id: 4,
    name: "Keyboard 4",
    imageSrc: Keyboard2Img.src,
    rating: 5,
    numReviews: 12,
    price: 149.99,
  },
  {
    id: 5,
    name: "Keyboard 5",
    imageSrc: Keyboard3Img.src,
    // rating: 5,
    // numReviews: 9,
    price: 119.99,
  },
  {
    id: 6,
    name: "Keyboard 6",
    imageSrc: Keyboard4Img.src,
    // rating: 5,
    // numReviews: 7,
    price: 89.99,
  },
];
const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch the product details using the `productId` from the router
  // Replace the placeholder data with your actual product data

  const product = {
    id: productId,
    name: 'Keyboard 2',
    imageSrc: Keyboard2Img.src,
    // rating: 4.5,
    // numReviews: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 px-4">
          <h1 className="text-2xl font-bold mb-2 text-black">{product.name}</h1>
          {/* <div className="flex items-center mb-2">
            <div className="text-yellow-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 16.308l-4.08 2.166.777-4.535L1.946 7.96l4.535-.658L10 2.692l2.52 4.07 4.535.658-3.75 3.979.776 4.535L10 16.308z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.numReviews} reviews)
            </span>
          </div> */}
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4 text-black">${product.price.toFixed(2)}</p>
          {/* Add to cart button or other actions */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
