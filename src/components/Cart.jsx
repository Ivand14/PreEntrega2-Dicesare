import React, { useContext,useState } from 'react'
import { CartContext } from '../context/ShopCart'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Button } from '@chakra-ui/react'
import Loading from './Loading'

const Cart = () => {

    const {cart,total,vaciarCart}=useContext(CartContext);   

    
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

    const[loader,setLoader]=useState(true)
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