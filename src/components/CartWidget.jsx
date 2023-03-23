import React, { useContext } from 'react'
import { CartContext } from '../context/ShopCart'


const CartWidget = () => {

  const {cart,setCart}=useContext(CartContext);
  const total= cart.reduce((acc,red)=>{
    return acc + red.cantidad;
  },0)

  return (
    <div>
        <i className="bi bi-bag icon"></i>
        <span className='numberCart'>{total}</span>
    </div>
  )
}

export default CartWidget