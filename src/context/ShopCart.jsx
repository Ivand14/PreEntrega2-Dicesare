import React, { createContext, useState } from 'react'
export const CartContext=createContext();

const ShopCart = ({children}) => {

  const [cart,setCart]=useState([])


  

  const removeProd=(id)=>{
    setCart(cart.filter(prod=>prod.id!==id))
  }

  return(
    
  <CartContext.Provider value={{cart,setCart,removeProd}}>{children}</CartContext.Provider>
    
  ) 
    
  
}

export default ShopCart