import React, { useContext, useState } from 'react'

import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShopCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import Loading from './Loading'

const Cart = () => {

    const {cart,total,vaciarCart}=useContext(CartContext);   
    const[loader,setLoader]=useState(true)

    
    if(cart.length === 0) {
        return (
            <div className='contCart'>
            <h2 className='textoCart'>NO HAY PRODUCTOS EN EL CARRITO<span className="material-symbols-outlined emoji">
            sentiment_dissatisfied</span></h2>
            <Link to={`/`}>
            <Button colorScheme='blue' className='btn-cart'>REALIZAR UNA COMPRA </Button>
            </Link>
            </div>
        )
    }

    
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  
    
    if(loader){
      return(
        <>
        <Loading />
        </>
      )
    }
    

    return (
        <>
                <Link to={`/`}>
                <span className="material-symbols-outlined volver">keyboard_return</span>
                </Link>
                {cart.map(prod=> <ItemCart key={prod.id} prod={prod} />)} 

                <div className="resumenCompra">

                <div className="BtnVaciar">
                <Button colorScheme='facebook' className='btn-cart' onClick={vaciarCart} fontFamily='Oswald, sans-serif'>VACIAR CARRITO</Button>
                </div>

                <div className="Total">
                    <h2 className='textTotal' >TOTAL:</h2>
                    <h2 className='numberTotal' >{total}$</h2>
                </div>


                <div className="BtnTotal">
                <Link to={`/resumen`}>
                <Button colorScheme='facebook' className='btn-cart'fontFamily='Oswald, sans-serif'>COMPRAR</Button>
                </Link>
                </div>

                </div>

        </>
    )
}

export default Cart