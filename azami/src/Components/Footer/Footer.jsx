//rafc hace función con exportación de función
//fafce hace función con exportación por default
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom"
import "./Footer.css"
import Container from '@mui/material/Container';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer bg-footer">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className="contentFooter">
            <Box>
              <Grid container spacing={3} >
                <Grid item xs={12} md={5}>
                  <div className='footer-azami'>
                    <Link to="/">
                      <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-footer"/>
                    </Link>
                    <p>Creamos azami </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={3}>
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
                </Grid>
                <Grid item xs={12} md={3}>
                  <div className="redes-sociales">
                      <h3>SIGUENOS EN:</h3>
                      <Link href="" className="icon-sm"><FacebookIcon/></Link>
                      <Link href="" className="icon-sm"><InstagramIcon/></Link>
                      <Link href="" className="icon-sm"><InstagramIcon/></Link>
                  </div>
                </Grid>
                
              </Grid>
            </Box>
        </Container>
      </React.Fragment>
      
    </Box>
  )
}
