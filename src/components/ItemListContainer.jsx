import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const { categoria }=useParams()



  const categoriaFiltro= data.filter((dta)=> dta.categoria===categoria)
  

  return (
    <div className='contenedor-cards'>
    {categoria? <ItemList productos={categoriaFiltro}/>  :   <ItemList productos={data}/>}
    </div>
  )
}

export default ItemListContainer