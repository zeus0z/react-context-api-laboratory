import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

const NavigationBar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
    </nav>
  )
}

export default NavigationBar