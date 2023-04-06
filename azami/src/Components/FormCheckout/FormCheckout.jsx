import { useState } from "react"
import { db } from "../../firebaseConfig"
import {addDoc, collection, updateDoc, doc}from "firebase/firestore"
import Container from '@mui/material/Container';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from "@mui/material";
import './FormCheckout.css'
import { Box } from "@mui/system";


export const FormCheckout = ({cart, getTotalPrice, setOrderId, clearCart }) => {
    const [userData, setUserData] = useState({
        name: "", 
        email: "",
        phone: ""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        let total = getTotalPrice()
        let order = {
            buyer: userData,
            items: cart,
            total: total
        }
        let orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
        .then((res) => {
            setOrderId(res.id);
            clearCart();
          })
        .catch(err => console.log (err))

        cart.map( (product) => {
            let refDoc = doc(db, "products", product.id)
            updateDoc(refDoc, { stock: product.stock - product.quantity })
        })

    }
  return (
    <div>
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                            <form onSubmit={handleSubmit}>
                                
                                <input type="text" placeholder="Email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                                <input type="text" placeholder="Teléfono" value={userData.phone} onChange={(e) => setUserData({...userData, phone: e.target.value})}/>
                                <button type="submit">Comprar</button>
                            </form>
                        </Grid>
                        <Grid xs={12} md={6}>
                        <div className="form-container">
                            <div className="field-container">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Nombre" id="name" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})}/>
                            </div>
                            <div className="field-container">
                                <label for="cardnumber">Card Number</label>
                                <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric"/>
                                <svg id="ccicon" class="ccicon" width="430" height="271" viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                </svg>
                            </div>
                            <div className="field-container">
                                <label for="expirationdate">Expiration (mm/yy)</label>
                                <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric"/>
                            </div>
                            <div className="field-container">
                                <label for="securitycode">Security Code</label>
                                <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric"/>
                            </div>
                        </div>
                        </Grid>

                    </Grid>
                </Box>
                
            </Container>

        </React.Fragment>
        
        
    </div>
  )
}
