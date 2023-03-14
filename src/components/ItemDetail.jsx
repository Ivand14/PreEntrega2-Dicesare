import React, { useState } from 'react'
import { Card, Stack, CardBody, CardFooter,Heading,Divider,Button,Image,Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {

  const{ id } = useParams();
  
  let [contador,setCount]=useState(0)

  const sumar=()=>{
    if(contador>=0){
      setCount(contador+1)
    }
  }

  const restar=()=>{
    if (contador<=0) {
      setCount(contador=0)
    }else{
      setCount(contador-1)
    }
  }

  const prodFiltrado=productos.filter((producto) => producto.id==id)
  
  return (
    <div className="cardDetail">
    {prodFiltrado.map((producto)=>(
    <div key={producto.id}>
      <Card maxW='sm'  width={'45rem'} boxShadow='dark-lg' p='6' rounded='md' bg='white' marginBottom={'2rem'}>
          <CardBody display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'.5rem'} height={'20rem'}>
          <Image height={'13rem'} width={'auto'}
            src={producto.img}
            alt={producto.name}
            borderRadius='lg'
          />
          <Stack mt='3' spacing='2'>
          <Heading size='md' fontSize='1rem'>{producto.name}</Heading>
          <Text>
            {producto.description}
          </Text>
          <Text color='blue.600' fontSize='.9rem'>
            PRECIO: {producto.precio}
          </Text>
          <Text color='blue.600' fontSize='.9rem'>
            STOCK: {producto.stock}
          </Text>
          </Stack>
    </CardBody>
    <Divider />
    <CardFooter display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'2rem'} >
        <Button onClick={restar} color='blue.600' fontSize='1rem' >
          -
        </Button>

        <Text color='blue.600' fontSize='1.1rem'>
        {contador}
        </Text>

        <Button onClick={sumar} color='blue.600' fontSize='1rem'>
          +
        </Button>

        <Button  color='blue.600' fontSize='.9rem' className='boton'>
          COMPRAR
        </Button>
    </CardFooter>

  </Card>
      </div>))}
      
    </div>
  )
}

export default ItemDetail