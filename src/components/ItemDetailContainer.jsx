import { getDoc, getFirestore,doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const {id}=useParams();
  const[productos,setProductos]=useState([])
  

  useEffect(()=>{

    const db=getFirestore();

    const onlyItem= doc(db,'instrumentos',`${id}`);
    getDoc(onlyItem)
      .then((snapshot)=>{
        if(snapshot.exists()){
          setProductos({id:snapshot,...snapshot.data()})
        }
      })
  },[`${id}`])

  console.log(productos)

  return (
    <div className='containerDetail'>
      <ItemDetail 
        producto={productos}      
      
      />
    </div>
  )
}

export default ItemDetailContainer