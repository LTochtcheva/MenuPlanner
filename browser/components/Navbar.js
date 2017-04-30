
import React from 'react'
import { Link } from 'react-router'


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default" id="navbar">
        <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/menu">My Menu</Link>
            </li>
            <li>
              <Link to="/menu/new">Plan Menu</Link>
            </li>
            <li>
              <Link to="/recipes" >Recipes</Link>
            </li>
            <li>
              <Link to="/recipes/add" >Add Recipe</Link>
            </li>
        </ul>
      </nav>
    )
  }
}

