import React, { createContext, useState } from 'react'

export const CartContext=createContext();



const ShopCart = ({children}) => {

  const [cart,setCart]=useState([]);
  const [count, setCount] = useState(0);

  

  const cartLS=JSON.stringify(cart)
  localStorage.setItem('cart',cartLS)

 

  const total=cart.reduce((acc,red)=>{
    return acc + parseInt(red.cantidad) *parseInt(red.precio)
  },0)


  const vaciarCart=()=>{
    setCart([])
  }

  const removeProd=(id)=>{
    setCart(cart.filter(prod=>prod.id!==id))
  }

  return(
    
  <CartContext.Provider value={{cart,setCart,removeProd,total,vaciarCart,count,setCount}}>{children}</CartContext.Provider>
    
  ) 
    
  
}

export default ShopCart