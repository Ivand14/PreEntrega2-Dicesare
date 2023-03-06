import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'

const ItemListContainer = () => {

  const productos=()=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(data)
        reject(new Error('No se encontraron los productos'))
      },2000)
    })
  }

  

  return (
    <>
    <ItemList productos={productos(data)}/>
    </>
  )
}

export default ItemListContainer