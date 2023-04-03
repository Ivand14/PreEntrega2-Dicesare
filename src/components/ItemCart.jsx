import { useContext } from "react"
import { CartContext } from "../context/ShopCart"



const ItemCart = ({prod}) => {

    const{removeProd}=useContext(CartContext);

  return (

    <div className='cartItem' key={prod.id}>
        <div className="imagenCart">
            <img src={prod.img} alt="" className="imgCart"/>
        </div>
        <div className="nombreCart" >
            <h2>Nombre:</h2>
            <h2>{prod.nombre}</h2>
        </div>
        <div className="precioCart">
            <h2>Precio:</h2>
            <h2>{prod.precio}</h2>
        </div>
        <div className="cantidadCart">
            <h2>Cantidad:</h2>
            <h2>{prod.cantidad}</h2>
        </div>
        <div className="subCart">
            <h2>Subtotal:</h2>
            <h2>{parseInt(prod.cantidad) * parseInt(prod.precio)}$</h2>
        </div>
        <div className="eliminarProd">
        <span className="material-symbols-outlined" onClick={()=>removeProd(prod.id)}>
            delete
        </span>
        </div>
    </div>
  )
}

export default ItemCart