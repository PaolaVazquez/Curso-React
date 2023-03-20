import { createContext, useState } from "react"
export const CartContext = createContext()
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
  //AGREGAR
  const agregarCarrito = (producto) =>{
    let existe = isInCart(producto.id)
    if(existe ){
      let newCart = cart.map((elemento) => {
        if(elemento.id === producto.id){
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity
          }
        }else{
          return elemento
        }
      })

      setCart(newCart)
    } else{
      setCart( [...cart, producto] )
    }
  }

  const isInCart = ( id )=>{
    return cart.some( (elemento) => elemento.id === id)
  }

  //ELIMINAR
  const deleteProductById = (id)=>{
    const newCart = cart.filter((element) => element.id !== id)
    setCart(newCart)
  }

  //CONTAR
  const getQuantityById = (id)=>{
    const productSelected = cart.find((elemento)=> elemento.id === id)
    return productSelected?.quantity
  }
  //TOTAL DEL PRECIO DEL CARRITO
  const getTotalPrice = ()=> {
    let precioTotal = cart.reduce((acc, elemento) =>{
      return acc + elemento.quantity * elemento.price;
    }, 0)
    return precioTotal;
  }
  let data ={
    cart: cart,
    agregarCarrito: agregarCarrito,
    deleteProductById: deleteProductById,
    getQuantityById: getQuantityById
  }

  return (
    <CartContext.Provider value={ data }>
      {children}
    </CartContext.Provider>
  )
}
