import React from 'react';
import { useRouter } from 'next/router';
import Keyboard1Img from "../assets/keyboard1.png";
import Keyboard2Img from "../assets/keyboard2.png";
import Keyboard3Img from "../assets/keyboard3.png";
import Keyboard4Img from "../assets/keyboard4.png";
import Navbar from "../components/Navbar";
import { Footer } from "../components/footer";
import Car1 from "../assets/1/car1.jpg";
import Car2 from "../assets/1/car2.jpg";
import Car3 from "../assets/1/car3.jpg";
import Car4 from "../assets/2/car1.jpg";
import Car5 from "../assets/2/car2.jpg";
import Car6 from "../assets/2/car3.jpg";
const products = [
  {
    id: 1,
    name: "Nissan Caravan NV350",
    imageSrc: [
      Car1.src,
      Car2.src,
      Car3.src,
    ],
    description: 'Nissan Caravan NV350 2019 Model',
    rating: 5,
    numReviews: 10,
    price: 16500,
  },
  {
    id: 2,
    name: "HINO PROFIA TRACTOR HEAD",
    imageSrc: [
      Car4.src,
      Car5.src,
      Car6.src,
    ],
    description: 'HINO PROFIA TRACTOR HEAD 2002 MANUAL PUMP',
    rating: 5,
    numReviews: 8,
    price: 12900,
  },
  {
    id: 3,
    name: "Keyboard 3",
    imageSrc: [
      Keyboard2Img.src,
      Keyboard3Img.src,
      Keyboard4Img.src,
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
    numReviews: 6,
    price: 79.99,
  },
  {
    id: 4,
    name: "Keyboard 4",
    imageSrc: [
      Keyboard2Img.src,
      Keyboard3Img.src,
      Keyboard4Img.src,
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
    numReviews: 12,
    price: 149.99,
  },
  {
    id: 5,
    name: "Keyboard 5",
    imageSrc: [
      Keyboard2Img.src,
      Keyboard3Img.src,
      Keyboard4Img.src,
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
    numReviews: 9,
    price: 119.99,
  },
  {
    id: 6,
    name: "Keyboard 6",
    imageSrc: [
      Keyboard2Img.src,
      Keyboard3Img.src,
      Keyboard4Img.src,
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
    numReviews: 7,
    price: 89.99,
  },
];
const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Fetch the product details using the `productId` from the router
  // Replace the placeholder data with your actual product data

  // const product = {
  //   id: productId,
  //   name: 'Keyboard 2',
  //   imageSrc: [
  //     Keyboard2Img.src,
  //     Keyboard3Img.src,
  //     Keyboard4Img.src,
  //   ],
  //   rating: 4.5,
  //   numReviews: 10,
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   price: 19.99,
  // };
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [product, setProduct] = React.useState(null);
  
  function getProductById(productId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        return products[i];
      }
    }
    return null; // Return null if no product with the specified ID is found
  }
  React.useEffect(() => {
    // Simulated fetch of product details using productId
    console.log(productId);
    const num = parseInt(productId);
    const selectedProduct = getProductById(num);
    console.log(selectedProduct);
    setProduct(selectedProduct);
    // const fetchProductDetails = async () => {
    //   try {
    //     // Replace with your actual API call to fetch product details
    //     const response = await fetch(`/api/products/${productId}`);
    //     const data = await response.json();
    //     setProduct(data);
    //   } catch (error) {
    //     console.error('Error fetching product details:', error);
    //   }
    // };

    if (productId) {
      getProductById();
    }
  }, [productId]);

  if (!product) {
    return <div className="bg-black">Loading...</div>;
  }

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageSrc.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === product.imageSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-10">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.imageSrc[activeImageIndex]}
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
          <p className=" mb-4 text-black">{product.description}</p>
          <p className="text-2xl font-bold mb-4 text-black">${product.price.toFixed(2)}</p>
          {/* Add to cart button or other actions */}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handlePreviousImage}
          className="mr-2 focus:outline-none bg-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {product.imageSrc.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`w-12 h-12 object-cover mx-2 ${
              index === activeImageIndex ? 'border-2 border-blue-500' : ''
            }`}
          />
        ))}
        <button onClick={handleNextImage} className="ml-2 focus:outline-none bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
      <Footer />
    </div>
    
  );
};

export default ProductDetails;
