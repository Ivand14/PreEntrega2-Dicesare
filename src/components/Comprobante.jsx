import React, { useContext } from "react";
import { CartContext } from "../context/ShopCart";
import{Document,Page,View,Text} from "@react-pdf/renderer"

const Comprobante = ({ cart,total, CntCuotas, TotalCuotas,CompraId }) => {
  console.log(cart)
  return (
    <Document>
      <Page>
        <View className="ordenDeCompra">
          <Text>RECIBO DE COMPRA</Text>
          <Text>
            SU ORDEN DE COMPRA ES :
            <span className="textRecibo">{CompraId}</span>
          </Text>
          {cart.map((prod) => (
            <>
              <Text>
                PRODUCTOS COMPRADOS :
                <span className="textRecibo">{prod.nombre}</span>
              </Text>
              <Text>
                CANTIDAD :<span className="textRecibo">{prod.cantidad}</span>
              </Text>
              <Text>
                PRECIO :<span className="textRecibo">{prod.precio}$</span>
              </Text>
            </>
          ))}
          <Text>
            TOTAL : <span className="textRecibo">{total}$</span>
          </Text>
          <Text>
            CUOTAS :
            <span className="textRecibo">
              {CntCuotas} de {TotalCuotas}$
            </span>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Comprobante;
