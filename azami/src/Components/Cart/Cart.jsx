import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';
export const Cart = () => {

  const { cart, clearCart, getTotalPrice, deleteProductById } = useContext( CartContext )
  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };
  //console.log(cart)
  return (
    <div>
      <div className="containerCart">
        <Container maxWidth="xl">
              <Box sx={{
                width: "100%",
              }}>
                  <h1 className="titCart">Carrito</h1>
                <Grid container>
                  <Grid xs={8}>
                  
                    <div  className="tableCart">
                      {
                        cart.map( (elemento) => {
                          return (
                            <div key={elemento.id} className="itemCart">
                              <div className="imgCart">
                                <img src={elemento.image} alt="" />
                              </div>
                              <div className="titleCart">
                                <h2>{elemento.nombre}</h2>
                              </div>
                              <div className="quantityCart">
                                <h2>Cantidad: {elemento.quantity}</h2>
                              </div>
                              <div className="priceCart">
                                <h3>$ {elemento.price}</h3>
                              </div>
                              <div className="buttonsCart">
                                <DeleteIcon color="#937EBF" onClick={()=>deleteProductById(elemento.id)} />
                              </div>
                            </div>
                          )
                        })
                      }
                      <div className="subTotal">
                        <h4>Subtotal: <b className="priceTotal">{getTotalPrice()}</b></h4>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={4}></Grid>
                  
                
                </Grid>
                  
              </Box>
        </Container>
      </div>
     
    </div>
  )
}
