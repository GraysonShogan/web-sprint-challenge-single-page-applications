import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import OrderForm from "./Components/OrderForm";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/pizza" element={<PizzaForm />} />
    </Routes>
  );
};
export default App;
