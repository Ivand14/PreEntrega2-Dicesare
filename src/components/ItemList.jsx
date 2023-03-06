import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'


const ItemList = ({productos}) => {
  return (
    <>
    <Container>

      {productos?.map((producto)=>(
        <Item
        key={producto.id}
        name={producto.name}
        img={producto.img}
        description={producto.description}
        stock={producto.stock}
        categoria={producto.categoria}
        precio={producto.precio} 
        />
        
      ))}

    </Container>

    </>
  )
}

export default ItemList