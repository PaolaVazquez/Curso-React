import { width } from '@mui/system'
import { useParams } from 'react-router-dom'
import { products } from '../../productMok'
import { ItemCount } from '../ItemCount/ItemCount'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = () => {

  const {id} = useParams();

  const { agregarCarrito, getQuantityById } = useContext ( CartContext )

  const productSelected = products.find((element) => element.id === Number(id));

  console.log(productSelected)
  const onAdd = (cantidad)=>{
    let producto =  {
      ...productSelected,
      quantity: cantidad
    }
    agregarCarrito(producto)
  }
  let quantity = getQuantityById( Number(id))
  return (
    <Box>
      <Container maxWidth="sm">
        <img src={productSelected.image} alt=""  style={{width: "400px"}}/>
        <h1>{productSelected.nombre }</h1>
        <h2>{productSelected.description}</h2>
        <h3>$ {productSelected.price} MXN</h3>
        <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
      </Container>
    </Box>
  )
}
