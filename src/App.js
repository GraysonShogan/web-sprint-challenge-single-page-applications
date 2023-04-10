import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import * as yup from 'yup'
import axios from "axios";

const App = () => {

  const initialZaData = {
      name: '',
      size: '',
      pepperoni: false,
      cheese: false,
      sauce: false,
      crust: false,
      special: ''
  }
  const [errors, setErrors] = useState({
      name: '',
      size: '',
      pepperoni: '',
      cheese: '',
      sauce: '',
      crust: '',
      special: ''
  })

  const history = useHistory()

  const handleChange = (evt) => {
    const {type, name, checked, value} = evt.target
    const valueToUse = evt.target.type === 'checkbox' ? checked : value
    validate(name, valueToUse)
    setZaData({...zaData, [name]: valueToUse})
  }
  
  // const handleChange = (name, value) => {
  //   // const { value, name } = evt.target
  //   // let value = evt.target.getAttribute('name')
  //   // let name = evt.target.getAttribute('name')
  //   // console.log(evt.target)
  //   // console.log(name)
  //   validate(name, value)
  //   setZaData({...zaData, [name]: value})
  // }

  const [zaData, setZaData] = useState(initialZaData)

  const testOrder = {
      name: zaData.name.trim(),
      size: zaData.size,
      pepperoni: zaData.pepperoni,
      cheese: zaData.cheese,
      sauce: zaData.sauce,
      crust: zaData.crust,
      special: zaData.special
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios.post('https://reqres.in/api/orders', testOrder)
      .then(res => {
        history.push('/confirmation')
        console.log(res)
        return
      })
      .catch(err => {
        history.push('/error')
      })
  }

  const validate = (name, value) =>{
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setErrors({
        ...errors, [name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })
    console.log(name, value)
  }


  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Must include a name for the order')
      .min(2, 'name must be at least 2 characters'),
    size: yup
      .string()
      .required('must pick a size for your pizza'),
    pepperoni: yup
      .boolean(),
    cheese: yup
      .boolean(),
    sauce: yup
      .boolean(),
    crust: yup
      .boolean(),
    special: yup
      .string()
  })
 


  return (
    <div className="App">
      <nav>
        <Link to='/'> home </Link>
        <Link to='/pizza' id='order-pizza'>.... order some pizza </Link>
      </nav>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form zaData={zaData} change={handleChange} errors={errors} submit={handleSubmit}/>
      </Route>
      <Route path='/confirmation'>
        <Confirmation />
      </Route>
    </div>
  );
};
export default App;