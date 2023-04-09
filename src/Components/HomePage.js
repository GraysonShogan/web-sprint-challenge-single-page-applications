import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Grayson's Pizzareia!</h1>
      <p>Choose from our delicious selection of pizzas!</p>
      <Link to="/order" id="order-pizza">
        Order Now!
      </Link>
    </div>
  );
}

export default HomePage;
