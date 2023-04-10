import React, { useState } from "react";
import App from "../App";

export default function Form(props) {

 
    const { submit, change, zaData, errors } = props
    // const change = (evt) => {
    //     // let name = evt.target.getAttribute('name')
    //     // let value = evt.target.getAttribute('value')
    //     // let checked = evt.target.getAttribute('checked')
    //     // let type = evt.target.getAttribute('type')
    //     const { name, value, checked, type } = evt.target
    //     console.log(name)
    //     console.log(evt.target)
    //     const valueToUse = type === 'checkbox' ? checked : value
    //     change(name, valueToUse)
    // }

    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     submit()
    //   }

  return (
    <form onSubmit={submit} id='pizza-form'>
    <div>
      <input 
        type="text"
        id="name-input" 
        name="name" 
        onChange={change} 
        placeholder="name"  
        value={zaData.name} /><p>{errors.name}</p>
      <label>Size
        <select 
          type='dropdown'
          id="size-dropdown" 
          onChange={change} 
          value={zaData.size} 
          name='size'>
          <option name='big'>big pizza</option>
          <option name='medium'>medium pizza</option>
          <option name='small'>little pizza</option>
        </select>
      </label>
      <label>pepperoni
        <input 
        type="checkbox"
        name='pepperoni'
        checked={zaData.pepperoni}
        onChange={change}
        id='pepperoni'
    />
      </label>
      <label>cheese
        <input 
        type="checkbox"
        name='cheese'
        checked={zaData.cheese}
        onChange={change}
        id='cheese'
     />
      </label>
      <label>sauce
        <input 
        type="checkbox"
        name='sauce'
        checked={zaData.sauce}
        onChange={change}
        id='sauce'
     />
      </label>
      <label>crust
        <input 
        type="checkbox"
        name='crust'
        checked={zaData.crust}
        onChange={change}
        id='crust'
       />
      </label>
      <label>
        <input 
            type='text'
            id='special-text'
            placeholder="order instructions"
            value={zaData.special}
            onChange={change}
            name='special'
        />
      </label>
      <button onClick={submit} id='order-button'>add to order</button>
    </div>
    </form>
  );
}
