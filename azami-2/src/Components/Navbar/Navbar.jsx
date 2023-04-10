// import { CardWidget } from "../CardWidget/CardWidget";
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
 
    
  return (
    <div>
        <div className="prom-franja py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2 className="h4">
                            <i className="fa-solid fa-heart me-2"></i>
                            HAZ TU PEDIDO 
                            <i className="fa-solid fa-heart ms-2"></i>
                        </h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h2 className="h4">Mayor a $700MXN y llevate <b>GRATIS</b> un llavero</h2>
                    </div>
                </div>
                
            </div>
        </div>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-header"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >NOVEDADES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >CÓMO COMPRAR</Link>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link disabled"><CardWidget/></a> */}
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </header>
        
    </div>
  )
}
