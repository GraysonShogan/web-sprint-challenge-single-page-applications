import React, { useState } from "react";
import axios from "axios";

const toppings = [
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Sausage",
  "Bacon",
  "Extra Cheese",
  "Black Olives",
  "Green Peppers",
  "Pineapple",
];

function PizzaForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [customerOrder, setCustomerOrder] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 2) {
      setNameError("name must be at least 2 characters");
    } else {
      setNameError("");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const selectedToppings = toppings.filter((topping) => data[topping]);

    const order = {
      name: data["name-input"],
      size: data["size"],
      toppings: selectedToppings,
      specialInstructions: data["special-text"],
    };

    axios
      .post("https://reqres.in/api/users", order)
      .then((response) => {
        setCustomerOrder(response.data);
      })
      .catch((error) => {
        setCustomerOrder("Error submitting your order!", error);
      });
  }

  return (
    <div>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">
          {" "}
          Name for the Order
          <input
            type="text"
            name="name-input"
            id="name-input"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </label>
        <label htmlFor="size-selector">
          {" "}
          Choice of Size
          <select name="size" id="size-dropdown">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <fieldset>
          <legend>Choice of Sauce:</legend>
          <label htmlFor="marinara">
            Marinara
            <input
              id="marinara-sauce"
              type="radio"
              name="sauce"
              value="marinara"
            />
          </label>
          <label htmlFor="alfredo">
            Alfredo
            <input
              id="alfredo-sauce"
              type="radio"
              name="sauce"
              value="alfredo"
            />
          </label>
          <label htmlFor="bbq">
            BBQ
            <input id="bbq-sauce" type="radio" name="sauce" value="bbq" />
          </label>
        </fieldset>
        <label htmlFor="toppings">
          Select your toppings:
          {toppings.map((topping) => (
            <div key={topping}>
              <input type="checkbox" id={topping} name={topping} />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
        </label>
        <label htmlFor="special-text">
          Special Instructions:
          <input id="special-text" type="text" name="special-text" value="" />
        </label>
        <label htmlFor="order-button">
          <button id="order-button" type="submit">
            Add to Order
          </button>
        </label>
      </form>
      {customerOrder && (
        <div>
          <p>
            Order for {customerOrder.name}: {customerOrder.size} pizza with{" "}
            {customerOrder.toppings}
          </p>
          {customerOrder.specialInstructions && (
            <p>Special instructions: {customerOrder.specialInstructions}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PizzaForm;
