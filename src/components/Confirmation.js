import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Confirmation(props) {
  return (
    <div>
        <header>
        <h1>BloomTech Eats</h1>
        <nav>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/pizza'>order</NavLink>
        </nav>
      </header>
      <section className='headBoard'>
        <h3>confirmed</h3>
      </section>
    </div>
  )
}