import React, { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [fechedData, setFechedData] = useState([]);

  const submitHandle = async (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      price === 0
    ) {
      alert("please fill all details!!");
      return;
    }
    const formData = { title: title, description: description, price: price };
    console.log(formData);

    const response = await fetch("/api/createproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      fetchData();
      setTitle("");
      setDescription("");
      setPrice(0);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/showproduct");
      const result = await response.json();
      setFechedData(result);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(fechedData);

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id) => {
    const response = await fetch(`/api/deleteproduct/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-700">
        Create Products for Women
      </h2>

      <div className="max-w-md mx-auto">
        <form
          onSubmit={submitHandle}
          className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <div>
            <label
              htmlFor="title"
              className="block font-semibold text-gray-700"
            >
              Title
            </label>
            <input
              value={title}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. T-shirt"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block font-semibold text-gray-700"
            >
              Description
            </label>
            <input
              value={description}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Description of T-shirt"
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block font-semibold text-gray-700"
            >
              Price
            </label>
            <input
              value={price}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 799"
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200">
            Create
          </button>
        </form>

        <div className="mt-6">
          {fechedData.length > 0 ? (
            <div>
              {fechedData.map((item, idx) => (
                <div
                  className="relative border bg-white shadow-sm my-3 p-4 rounded-xl flex flex-col items-start gap-1"
                  key={idx}
                >
                  <button
                    onClick={() => handleClick(item._id)}
                    className="absolute right-2 top-2 bg-red-500 hover:bg-red-600 text-white font-bold px-2 rounded-full"
                  >
                    X
                  </button>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-blue-600 font-medium">{`₹${item.price}`}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-6">
              Create Your First Product
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
