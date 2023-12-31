import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CartApp React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>   
                            <NavLink className="nav-link" to="/catalog">Catalog</NavLink>
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar