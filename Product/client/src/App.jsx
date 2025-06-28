import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const [fechedData, setFechedData] = useState([]);

  const submitHandle = (e) => {
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

    fetch("/api/createproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
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

  return (
    <div>
      <h2 className="text-center text-2xl">Create products for womens</h2>
      <div className="max-w-72 mx-auto items-center justify-center ">
        <form onSubmit={submitHandle} className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            className=" border rounded border-gray-400 px-2 outline-none "
            placeholder="e.g T-shirt"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <input
            value={description}
            className=" border rounded border-gray-400 px-2 outline-none "
            placeholder="e.g description of t-shirt"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="price">Price</label>
          <input
            value={price}
            className=" border rounded border-gray-400 px-2 outline-none "
            placeholder="e.g 799"
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="border mt-4 rounded-lg font-extrabold bg-blue-500 cursor-pointer hover:bg-blue-600 py-2">
            Create
          </button>
        </form>
        <div>
          {fechedData ? (
            <div>
              {fechedData.map((item,idx) => (
                <div key={idx}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Create Your First Product</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
