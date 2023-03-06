import React from 'react'
import { Card, Stack, CardBody, CardFooter } from '@chakra-ui/react'


const Item = ({key,name,img,description,stock,precio}) => {
  return (
    <div>
      <div key={key}>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {precio}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Stock:{stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </div>
    </div>
  )
}

export default Item