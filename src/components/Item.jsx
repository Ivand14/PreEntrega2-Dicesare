import React from 'react'
import { Card, Stack, CardBody, CardFooter,Heading,Divider,ButtonGroup,Button,Image,Text, Center, } from '@chakra-ui/react'


const Item = ({id,name,img,description,stock,precio}) => {
  return (
    <>
      <div key={id}>
      <Card maxW='sm' height={'30rem'} width={'17rem'} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'.5rem'}>
        <Image height={'10rem'} width={'auto'}
          src={img}
          alt={name}
          borderRadius='lg'
        />
        <Stack mt='3' spacing='2'>
        <Heading size='md' fontSize='1rem'>{name}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='.9rem'>
          {precio}
        </Text>
        <Text color='blue.600' fontSize='.9rem'>
          STOCK: {stock}
        </Text>
        </Stack>
  </CardBody>
  <Divider />
  <CardFooter display={'flex'} alignItems={'center'} justifyContent={'center'} >
    <ButtonGroup spacing='1'>
      <Button variant='solid' colorScheme='blue' className='boton'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  
  </>
  )
}

export default Item