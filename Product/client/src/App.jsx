import React from "react";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
