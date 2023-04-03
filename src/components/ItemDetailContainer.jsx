import { getDoc, getFirestore,doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const { id }=useParams();
  const [productos,setProductos]=useState([]);

  useEffect(()=>{
    const getProducto=async()=>{
      const db=getFirestore();
      const onlyItem=doc(db,"instrumentos",id)
      const response=await getDoc(onlyItem)

      const newItem={
        id:response.id,
        ...response.data()
      }

      setProductos(newItem);
    }
    getProducto();
  },[id]);

  

  return (
    <div className='containerDetail'>
      <ItemDetail 
      productos={productos}
      />
    </div>
  )
}

export default ItemDetailContainer