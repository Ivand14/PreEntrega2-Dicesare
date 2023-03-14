import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const { categoria }=useParams()

  const getDatos = async ()=>{
    const resp= await fetch('../data.json')
    const data = await resp.json()
    return data
  }

  console.log(getDatos())

  const categoriaFiltro= data.filter((dta)=> dta.categoria===categoria)
  

  return (
    <div className='contenedor-cards'>
    {categoria? <ItemList productos={categoriaFiltro}/>  :   <ItemList productos={data}/>}
    </div>
  )
}

export default ItemListContainer