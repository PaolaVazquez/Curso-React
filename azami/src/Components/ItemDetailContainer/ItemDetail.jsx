import { width } from '@mui/system'
import { useParams } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import { db } from "../../firebaseConfig"
import Swal from "sweetalert2";
import { CartContext } from '../../context/CartContext';

import { getDoc, collection, doc } from "firebase/firestore"
export const ItemDetail = () => {

  const {id} = useParams();

  const { agregarCarrito, getQuantityById } = useContext ( CartContext )
  const [productSelected, setProductSelected] = useState({})

  useEffect(()=>{
    const itemsCollection = collection(db, "products")
    const ref = doc(itemsCollection, id)
    getDoc(ref)
    .then(res => {
      setProductSelected({
        ...res.data(),
        id: res.id
      })
    })

  }, [id])

  console.log(productSelected)
  const onAdd = (cantidad)=>{
    let producto =  {
      ...productSelected,
      quantity: cantidad
    }
    agregarCarrito(producto)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })
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
