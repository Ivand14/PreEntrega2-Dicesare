import React, { useState,useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection,getDocs,getFirestore} from 'firebase/firestore'


const ItemListContainer = () => {

  const { categoria }=useParams()

  const [instrumentos,setInstrumentos]=useState([])
  console.log(instrumentos)

  useEffect(()=>{
    const db=getFirestore();

    const itemCollection= collection(db,'instrumentos');
    getDocs(itemCollection).then((snapshot)=>{
      const docs=snapshot.docs.map((doc)=>doc.data());
      setInstrumentos(docs);
    })
  },[])


  const categoriaFiltro= instrumentos.filter((dta)=> dta.categoria===categoria)
  

  return (
    <div className='contenedor-cards'>
    {categoria? <ItemList productos={categoriaFiltro}/>  :   <ItemList productos={instrumentos}/>}
    </div>
  )
}

export default ItemListContainer