import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import PizzaForm from "./Components/PizzaForm";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order" element={<PizzaForm />} />
    </Routes>
  );
};
export default App;
