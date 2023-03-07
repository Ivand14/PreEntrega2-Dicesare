import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'

const ItemListContainer = () => {

  const getDatos=()=>{
    return new Promise((resolve, reject) => {
      if (data.length<0){
        reject(new Error('No pudimos encontrar productos'))
      }

      setTimeout(() => {
        resolve(data)
      }, 2500);
    })
  }

  async function fetchingData(){
    try{
      const datos= await getDatos();
    }catch(err){
      console.log('Error')
    }
  }

  fetchingData();
  
  console.log(data)
  return (
    <div className='contenedor-cards'>
    <ItemList productos={data}/>
    </div>
  )
}

export default ItemListContainer