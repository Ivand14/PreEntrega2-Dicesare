import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const getProducts= async() =>{
    const response = await fetch ('/public/data.json')
    const data= await response.json()
    return data
  }

  const [producto,setProducto]=useState([])


  useEffect(()=>{
    getProducts().then((producto)=>setProducto(producto))
  },[])


  return (
    <div className='containerDetail'>
      <ItemDetail productos={producto}/>
    </div>
  )
}

export default ItemDetailContainer