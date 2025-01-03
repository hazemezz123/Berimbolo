const products = [
  {
    id: 1,
    name: "Wireless Camera",
    price: "$99.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Alarm System",
    price: "$149.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "CCTV Kit",
    price: "$199.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smart Lock",
    price: "$79.99",
    image: "https://via.placeholder.com/150",
  },
];

const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
