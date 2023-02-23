//let estilos ={
//    color: "red",
//    fontSize: "2rem"
//}

//ESTILOS EN LÍNEA

import { CardWidget } from "../CardWidget/CardWidget";
import "./Navbar.css"
export const Navbar = ()=>{ // se pueden tantos como se tengan
    return (
        
    <div className="container-navbar">
        <nav className="nav">
            <div className="container">
                <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-header"/>
                <ul className="links ">
                    <li className="link">INICIO</li>
                    <li className="link">PRODUCTOS</li>
                    <li className="link">NOVEDADES</li>
                    <li className="link">CÓMO COMPRAR</li>
                    <li className="link"> <CardWidget/></li>
                </ul>
            </div>
        </nav>
        
    </div>
    );
};

//export default Navbar; // solo se puede uno por archivo