import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore';

import {Button} from '@chakra-ui/react'
import { CartContext } from '../context/ShopCart'
import {Link} from 'react-router-dom'
import Loading from './Loading'

const Factura = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {cart,total,vaciarCart}=useContext(CartContext)
    const [cuotas, setCuotas] = useState(1);
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [dni,setDni]=useState("")
    const [direccion,setDireccion]=useState("")
    const[compraId,setCompraId]=useState(null);
    const[titular,setTitular]=useState("")
    const[nroTarjeta,setNroTarjeta]=useState("")
    const[dniTitular,setDniTitular]=useState("")
    const toast = useToast()


    const cambioCuotas = (event) => {
      setCuotas(Number(event.target.value));
    };

    const nuevoTotal= parseInt(total/cuotas)
    

    const[loader,setLoader]=useState(true)
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  
    
    if(loader){
      return(
        <>
        <Loading />
        </>
      )
    }

    const db=getFirestore();
    const sentForm=(e)=>{
      e.preventDefault();
      addDoc(ordersCollection,order).then(({id})=>setCompraId(id));
    };

    const order={
      nombre,
      apellido,
      dni,
      direccion,
      cart:cart.map((prod)=>({
        id:prod.id,
        name:prod.nombre,
        precio:prod.precio,
        cantidad:prod.cantidad
      })),
      Cuotas:cuotas,
      PrecioPorCuota: nuevoTotal,
      titular,
      nroTarjeta,
      dniTitular,
      
    };  

    const ordersCollection=collection(db,"compras");

    
    

    
  return (
    
    

    <div className='contenedorForm'>

      
    <Link to={`/cart`}>
        <span className="material-symbols-outlined volver">keyboard_return</span>
    </Link>
        
        <form action="" className='form' onSubmit={sentForm}>
          <div className="datosPersonales">
            <h2 className='textDatos'>DATOS PERSONALES</h2>
            <div className="datos">
              <label htmlFor="" id='name'>NOMBRE</label>
              <input type="text" id='name' onChange={(e)=>setNombre(e.target.value) } required/>
            </div>

            <div className="datos">
              <label htmlFor="" id='apellido'>APELLIDO</label>
              <input type="text" id='apellido' onChange={(e)=>setApellido(e.target.value)} required />
            </div>

            <div className="datos">
              <label htmlFor="" id='dni'>DNI:</label>
              <input type="number" id='dni' onChange={(e)=>setDni(e.target.value)} required />
            </div>

            <div className="datos">
              <label htmlFor="" id='domicilio'>DIRECCIÓN</label>
              <input type="text" id='domicilio' onChange={(e)=>setDireccion(e.target.value)} required />
            </div>
          </div>

          <div className="datosPersonales">
            <h2 className='textDatos'>PAGO</h2>
            <div className="datos">
              <label htmlFor="" id='nroTarjeta'>NUMERO DE TARJETA</label>
              <input type="text" id='nroTarjeta' onChange={(e)=>setNroTarjeta(e.target.value)} required />
            </div>

            <div className="datos">
              <label htmlFor="" id='nombreTit'>NOMBRE DEL TITULAR</label>
              <input type="text" id='nombreTit' onChange={(e)=>setTitular(e.target.value)} required />
            </div>

            <div className="datos">
              <label htmlFor="" id='dni'>DNI:</label>
              <input type="number" id='dni' onChange={(e)=>setDniTitular(e.target.value)} required />
            </div>



          </div>

        <div className="botonContainer">
          <div className="selecCuotas">
            <h2>SELECCIONAR CUOTAS:</h2>
            <select name="cuotas" className='datos' onChange={cambioCuotas} value={cuotas} required>
              <option value={1}>1 CUOTA</option>
              <option value={3} >3 CUOTAS</option>
              <option value={6} >6 CUOTAS</option>
              <option value={12} >12 CUOTAS</option>
            </select>
          </div>
          <h2 className='textDatos'>TOTAL A PAGAR : {nuevoTotal}$</h2>
          { nombre && apellido && dni && direccion && titular && nroTarjeta && dniTitular != '' ? <Button onClick={onOpen} variant='solid' colorScheme='blue' className='boton' fontFamily='Oswald, sans-serif' type="submit" display={'Flex'} alignContent={'center'} >
            COMPRAR
          </Button> : <Button colorScheme="blackAlpha" fontFamily="Oswald, sans-serif" onClick={() =>
            toast({
              title: 'Formulario.',
              description: "Debes completar todos los campos.",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })}>
              COMPRAR
            </Button> }
          <Modal isOpen={isOpen} onClose={onClose}>

            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign={'center'}>ROXYAM</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              </ModalBody>
              <document>
                <div className="ordenDeCompra">
                  <h2>RECIBO DE COMPRA</h2>
                <h3>SU ORDEN DE COMPRA ES : <span  className='textRecibo'>{compraId}</span> </h3>
                {cart.map((prod)=>(
                  <div key={prod.id}>                  
                  <h3>PRODUCTOS COMPRADOS : <span className='textRecibo'>{prod.nombre}</span></h3>
                  <h3>CANTIDAD : <span className='textRecibo'>{prod.cantidad}</span> </h3>
                  <h3>PRECIO : <span className='textRecibo'>{prod.precio}$</span></h3>
                  </div>
                ))}
                <h3>TOTAL : <span className='textRecibo'>{total}$</span></h3>
                <h3>CUOTAS : <span className='textRecibo'>{cuotas} de {nuevoTotal}$</span> </h3>
                </div>
              </document>
              <ModalFooter>
                <Link to={`/`}>
                <Button 
                onClick={() =>{
                  toast({
                    title: 'COMPRA REALIZADA.',
                    description: "GRACIAS POR CONFIAR EN NOSTROS.",
                    status: 'success',
                    duration: 1500,
                    isClosable: true,
                  });vaciarCart();}}>OK</Button>
                </Link>
              </ModalFooter>
            </ModalContent>

          </Modal>
        </div>
        </form>
        
        
    </div>
  )
}

export default Factura