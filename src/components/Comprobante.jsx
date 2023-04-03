

const Comprobante = ({ cart,total, CntCuotas, TotalCuotas,CompraId }) => {
  console.log(cart)
  return (
    <>
      
        <div className="ordenDeCompra">
          <h2>RECIBO DE COMPRA</h2>
          <h2>
            SU ORDEN DE COMPRA ES :
            <span className="textRecibo">{CompraId}</span>
          </h2>
          {cart.map((prod) => (
            <>
              <h2>
                PRODUCTOS COMPRADOS :
                <span className="textRecibo">{prod.nombre}</span>
              </h2>
              <h2>
                CANTIDAD :<span className="textRecibo">{prod.cantidad}</span>
              </h2>
              <h2>
                PRECIO :<span className="textRecibo">{prod.precio}$</span>
              </h2>
            </>
          ))}
          <h2>
            TOTAL : <span className="textRecibo">{total}$</span>
          </h2>
          <h2>
            CUOTAS :
            <span className="textRecibo">
              {CntCuotas} de {TotalCuotas}$
            </span>
          </h2>
        </div>

    </>
  );
};

export default Comprobante;
