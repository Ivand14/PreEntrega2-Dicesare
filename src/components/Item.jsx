import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'

import {Link} from 'react-router-dom'

const Item = ({id,name,img,stock,precio}) => {


  return (

      <Card maxW='sm' height={'26em'} width={'17rem'} boxShadow='dark-lg' p='6' rounded='md' bg='white' key={id}>
        <CardBody display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'.5rem'} >
        <Image height={'10rem'} width={'auto'}
          src={img}
          alt={name}
          borderRadius='lg'
        />
        <Stack mt='4' spacing='.4' display={'flex'} flexDirection={'column'} alignItems={'start'} width={'100%'}>
        <Heading size='md' fontSize='1rem' fontFamily='Oswald, sans-serif'>{name}</Heading>
        <Text color='blue.600' fontSize='1.1rem'  textAlign={'start'} fontFamily='Oswald, sans-serif'>
          PRECIO:{precio}$
        </Text>
        <Text color='blue.600' fontSize='1rem' textAlign={'start'} fontFamily='Oswald, sans-serif'>
          STOCK: {stock}
        </Text>
        </Stack>
        </CardBody>
        <Divider />
        <CardFooter display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Button variant='solid' colorScheme='blue' className='boton' fontFamily='Oswald, sans-serif'>
              <Link to={`/item/${id}`}>VER PRODUCTO</Link>
            </Button>
        </CardFooter>
      </Card>
  

  )
}

export default Item