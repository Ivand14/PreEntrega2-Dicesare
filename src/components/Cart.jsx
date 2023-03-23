import React, { useContext } from 'react'
import { CartContext } from '../context/ShopCart'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Button } from '@chakra-ui/react'

const Cart = () => {

    const {cart,setCart}=useContext(CartContext);
    console.log(cart)
    
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

    return (
        <>
                <Link to={`/item/:id`}>
                <span class="material-symbols-outlined">keyboard_return</span>
                </Link>
                {cart.map(prod=> <ItemCart key={prod.id} prod={prod} />)} 
        </>
    )
}

export default Cart