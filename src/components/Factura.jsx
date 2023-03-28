import React, { useContext,useState } from 'react'
import { CartContext } from '../context/ShopCart'


const Factura = () => {

    const {cart,total}=useContext(CartContext)

    const [cuotas, setCuotas] = useState(1);

    const cambioCuotas = (event) => {
      setCuotas(Number(event.target.value));
    };

    const nuevoTotal= parseInt(total/cuotas)
    console.log(cart)

  return (
    <div>
        
        <form action="" className='form'>
          <h2 className='textDatos'>DATOS PERSONALES</h2>
          <div className="datosPersonales">
          <div className="datos">
            <label htmlFor="" id='name'>NOMBRE</label>
            <input type="text" id='name' />
          </div>

          <div className="datos">
            <label htmlFor="" id='apellido'>APELLIDO</label>
            <input type="text" id='apellido' />
          </div>

          <div className="datos">
            <label htmlFor="" id='dni'>DNI:</label>
            <input type="number" id='dni' />
          </div>

          <div className="datos">
            <label htmlFor="" id='domicilio'>DIRECCIÓN</label>
            <input type="text" id='domicilio' />
          </div>
          </div>

          <h2 className='textDatos'>PAGO</h2>
          <div className="datosPersonales">
          <div className="datos">
            <label htmlFor="" id='nroTarjeta'>NUMERO DE TARJETA</label>
            <input type="text" id='nroTarjeta' />
          </div>

          <div className="datos">
            <label htmlFor="" id='nombreTit'>NOMBRE COMPLETO DEL TITULAR</label>
            <input type="text" id='nombreTit' />
          </div>

          <div className="datos">
            <label htmlFor="" id='dni'>DNI:</label>
            <input type="number" id='dni' />
          </div>

          <div className="datos">
            <label htmlFor="" id='domicilio'>DIRECCIÓN</label>
            <input type="text" id='domicilio' className='input' />
          </div>

          <select name="cuotas" className='datos' onChange={cambioCuotas} value={cuotas}>
            <option value={1} selected>1 CUOTA</option>
            <option value={3} >3 CUOTAS</option>
            <option value={6} >6 CUOTAS</option>
            <option value={12} >12 CUOTAS</option>
          </select>
          </div>
        <h2 className='textDatos'>TOTAL A PAGAR : {nuevoTotal}$</h2>
        </form>
        
        
    </div>
  )
}

export default Factura