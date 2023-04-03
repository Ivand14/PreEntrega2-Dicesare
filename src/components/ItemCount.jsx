import React, { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../context/ShopCart";



const ItemCount = ({ stock, precio, id, nombre, img, Add }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);


  const addToCart = () => {
    setCart((items) => {
      const Itemfound = items.find((item) => item.id == id);
      if (Itemfound) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + count };
          } else {
            return item;
          }
        });
      } else {
        return [...items, { id, nombre, precio, cantidad: count, img }];
      }
    });
  };

  console.log(cart);

  const add = () => {
    setCount(count + 1);
  };

  const rest = () => {
    setCount(count - 1);
  };

  return (
    <div className="contenedor-contador">
      <div className="botones">
        <div className="btn-cont">
          {count < 1 ? (
            <Button colorScheme="blackAlpha">-</Button>
          ) : (
            <Button colorScheme="facebook" onClick={rest}>
              -
            </Button>
          )}

          <span>{count}</span>

          {count >= stock ? (
            <Button colorScheme="blackAlpha">+</Button>
          ) : (
            <Button colorScheme="facebook" onClick={add}>
              +
            </Button>
          )}
        </div>

        <div className="btnAgregar">
          {count <= 0 ? (
            <Button colorScheme="blackAlpha" fontFamily="Oswald, sans-serif">
              AGREGUE UN PRODUCTO
            </Button>
          ) : (
            <Button
              colorScheme="facebook"
              onClick={() => {
                addToCart(count);
                Add();
                toast({
                    title: 'PRODUCTO AÑADIDO.',
                    status: 'success',
                    duration: 1500,
                    isClosable: true,
                  })
              }}
              fontFamily="Oswald, sans-serif"
            >
              AGREGAR AL CARRITO
            </Button>
          )}
        </div>
      </div>
      <div className="mediosDePago">
        <img
          src="/public/img/mediosdepago.png"
          alt="cpTarjetas"
          className="pagos"
        />
      </div>
    </div>
  );
};

export default ItemCount;
