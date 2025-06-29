import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/singleproduct/${id}`)
      .then((res) => res.json())
      .then((result) => setProductData(result.data));
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Product Details
      </h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            value={productData.title}
            id="title"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            value={productData.description}
            id="description"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            value={productData.price}
            id="price"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
