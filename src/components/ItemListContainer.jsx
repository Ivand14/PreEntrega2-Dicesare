import React, { useState,useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { categoria }=useParams()

  const getData = async()=>{
    const resp= await fetch('/public/data.json')
    const data= await resp.json()
    return data;
  }

  const [instrumentos,setInstrumentos]= useState([]);

  useEffect(()=>{
    getData().then((instrumentos)=>setInstrumentos(instrumentos))
  },[])


  const categoriaFiltro= instrumentos.filter((dta)=> dta.categoria===categoria)
  

  return (
    <div className='contenedor-cards'>
    {categoria? <ItemList productos={categoriaFiltro}/>  :   <ItemList productos={instrumentos}/>}
    </div>
  )
}

export default ItemListContainer