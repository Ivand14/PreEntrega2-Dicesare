import React, {  useState,useEffect,useParams } from 'react'
import { Card,  CardBody,Image,Text,CardHeader,Button } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { getDoc, getFirestore,doc } from 'firebase/firestore';



const ItemDetail = ({producto}) => {

  console.log(producto)
  
  const [IrAlCart,setIrAlCart]=useState(false)

  const Add=()=>{
    setIrAlCart(true);
  }

  
  
  return (

<div className="cardDetail">
    <Link to={`/`}>
        <span className="material-symbols-outlined volver">keyboard_return</span>
    </Link>

    {
      <div key={producto.id} className='contDetail'>

      <Card direction={'row'} alignItems={'center'} boxShadow='dark-lg'>
        <CardHeader marginRight={'1rem'}>
          <Image height={'20rem'}
            src={producto.img}
          />
        </CardHeader>
        <CardBody >
            <Text pt='2' textAlign={'center'} fontSize={'1.5rem'}>{producto.name}</Text>
            <Text pt='2'>{producto.description}</Text>
            <Text pt='2' display={'flex'} alignItems={'center'}  ><span className="material-symbols-outlined">credit_card</span>PAGA EN 3 CUOTAS DE : {Math.round(parseInt(producto.precio)/3)}$</Text>
            <Text pt='2' display={'flex'} alignItems={'center'}  ><span className="material-symbols-outlined">credit_card</span>PAGA EN 6 CUOTAS DE : {Math.round(parseInt(producto.precio)/6)}$</Text>
            <Text pt='2' display={'flex'} alignItems={'center'}  ><span className="material-symbols-outlined">credit_card</span>PAGA EN 12 CUOTAS DE : {Math.round(parseInt(producto.precio)/12)}$</Text>
            <Text pt='2'fontSize={'1.4rem'} color={'darkcyan'}>STOCK : {producto.stock}</Text>
            <Text marginBottom={6} fontSize={'1.6rem'} color={'darkcyan'}>{producto.precio}$</Text>

            <Text>
              {IrAlCart ? <Link to={`/cart`}>
                            <Button colorScheme='facebook' className='btn-cart'>TERMINAR COMPRA</Button>
                          </Link> : 
                          <ItemCount Add={Add} id={producto.id} nombre={producto.name}img={producto.img}stock={producto.stock}precio={producto.precio}
                          />}

            </Text>


            
            

        </CardBody>
      </Card>
         

</div>

    }

    
    
      
 

</div>
  )
}

export default ItemDetail