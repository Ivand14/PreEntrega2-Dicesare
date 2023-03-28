import React, { createContext, useState,useEffect } from 'react'
export const CartContext=createContext();



const ShopCart = ({children}) => {

  const [cart,setCart]=useState([])

  console.log(cart)

  const cartLS=JSON.stringify(cart)
  localStorage.setItem('cart',cartLS)

  console.log(cartLS)

  const total=cart.reduce((acc,red)=>{
    return acc + parseInt(red.cantidad) *parseInt(red.precio)
  },0)

  console.log(total)

  const vaciarCart=()=>{
    setCart([])
  }

  const removeProd=(id)=>{
    setCart(cart.filter(prod=>prod.id!==id))
  }

  return(
    
  <CartContext.Provider value={{cart,setCart,removeProd,total,vaciarCart}}>{children}</CartContext.Provider>
    
  ) 
    
  
}

export default ShopCart