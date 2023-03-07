import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
  return (
    <>
    <div className='cards'>

      {productos?.map((producto)=>(
        <Item
        key={producto.id}
        id={producto.id}
        name={producto.name}
        img={producto.img}
        description={producto.description}
        stock={producto.stock}
        categoria={producto.categoria}
        precio={producto.precio} 
        />
        
      ))}

    </div>

    </>
  )
}

export default ItemList