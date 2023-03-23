import React, { useContext } from 'react'
import { Card, Stack, CardBody, CardFooter,Heading,Divider,ButtonGroup,Button,Image,Text, Center, } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'


const Item = ({id,name,img,stock,precio}) => {

  return (
    <>
      <div key={id}>
      <Card maxW='sm' height={'26em'} width={'17rem'} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'.5rem'} >
        <Image height={'10rem'} width={'auto'}
          src={img}
          alt={name}
          borderRadius='lg'
        />
        <Stack mt='4' spacing='.4' display={'flex'} flexDirection={'column'} alignItems={'start'} width={'100%'}>
        <Heading size='md' fontSize='1rem'>{name}</Heading >
        <Text color='blue.600' fontSize='1.1rem'  textAlign={'start'}>
          PRECIO:{precio}
        </Text>
        <Text color='blue.600' fontSize='1rem' textAlign={'start'}>
          STOCK: {stock}
        </Text>
        </Stack>
  </CardBody>
  <Divider />
  <CardFooter display={'flex'} alignItems={'center'} justifyContent={'center'} >
    <ButtonGroup spacing='1'>
      <Button variant='solid' colorScheme='blue' className='boton'>
        <Link to={`/item/${id}`}>VER PRODUCTO</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  
  </>
  )
}

export default Item