import React, {Component} from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import logo from "../images/logo.png"

const logoStyle = {
    maxWidth:'200px'
}

function NavBar(){
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img style={logoStyle} src={logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
                        <Link className="nav-link" to="/category/calzados">Calzados</Link>
                        <CartWidget/>
                    </div>
                </div>
                </div>
           </nav>);
}

export default NavBar;