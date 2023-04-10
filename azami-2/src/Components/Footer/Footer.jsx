import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer bg-footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-5">
                    <div className='footer-azami'>
                        <Link to="/">
                        <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-footer"/>
                        </Link>
                        <p>Creamos azami </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-3">
                    <div className="atencion-legal">
                        <h3>SERVICIO AL CLIENTE</h3>
                        <ul>
                            <Link className="atencion-link">Preguntas frecuentes</Link> <br />
                            <Link className="atencion-link">Envíos y devoluciones</Link>
                        </ul>
                        
                        <h3>LEGAL</h3>
                        <ul>
                            <Link className="legal-link">Términos y condiciones</Link> <br />
                            <Link className="legal-link">Políticas de privacidad</Link>
                        </ul>
                      
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-3">
                    <div className="redes-sociales">
                        <h3>SIGUENOS EN:</h3>
                        <Link href="" className="icon-sm"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link href="" className="icon-sm"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="" className="icon-sm"><i className="fa-brands fa-tiktok"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
