import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import data from '../data.json'


const ItemDetailContainer = () => {

 

  return (
    <div className='containerDetail'>
      <ItemDetail productos={data}/>
    </div>
  )
}

export default ItemDetailContainer