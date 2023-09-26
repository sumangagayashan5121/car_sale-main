import Link from "next/link";
import { Rating } from "../rating";
import { useRouter } from 'next/router';
import Car1 from "../../assets/1/car1.jpg";
import Car2 from "../../assets/2/car1.jpg";

const products = [
  {
    id: 1,
    name: "Nissan Caravan NV350",
    imageSrc: Car1.src,
    // numReviews: 10,
    price: 16500,
  },
  {
    id: 2,
    name: "HINO PROFIA TRACTOR HEAD",
    imageSrc: Car2.src,
    // numReviews: 8,
    price: 12900,
  }
];

const ProductCard = ({ product }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${product.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer"
    onClick={handleClick}>
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        {/* <div className="flex items-center mt-1 mb-2">
          <Rating value={product.rating} />
          <span className="ml-2 text-gray-500">
            {product.numReviews} reviews
          </span>
        </div> */}
        <p className="text-black font-medium text-lg mt-auto">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12">Vehicles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <div className="mt-8 flex justify-center">
        <Link href="/products" legacyBehavior>
          <a className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300">
            View All
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default Products;
