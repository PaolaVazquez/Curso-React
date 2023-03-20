import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

  const { cart, deleteProductById } = useContext( CartContext )
  //console.log(cart)

  
  return (
    <div>
      {
        cart.map( (elemento) => {
          return (
          <div key={elemento.id}>
            <h2>{elemento.nombre}</h2>
            <h2>Cantidad: {elemento.quantity}</h2>
            <h3>{elemento.price}</h3>
            <button onClick={()=>deleteProductById(elemento.id)}>Eliminar</button>
          </div>)
        })
      }
    </div>
  )
}
