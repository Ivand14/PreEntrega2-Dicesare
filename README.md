# E-commerce de instrumentos musicales
![FUNCIONAMIENTO DE LA PAGINA](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmM0MzBhOTkxNGY1MjVlYjUxYWNkMGRlNDEzZjM0NjQwYjRmMGU2NCZjdD1n/lwwDbsPAmHOyKRrTbe/giphy.gif)

Este proyecto tiene la finalidad de poder navegar a través de los distintos productos, también ver los detalles de los mismos. Realizar compras y que los datos y productos comprados lleguen a una base de datos

Este proyecto fue realizado con:
 -    ReactJs
-    ChakraUi
-    CSS
- Google Fonts
- Bootstrap Icons
- Base de datos Firestore

Los componentes que se utilizaron fueron:
-    App: Este componente contiene  toda la aplicación.
- Navbar: Aquí se encuentran los links para navegar en la aplicacion ya sea por categoría o en general. También contiene el carrito de compras.
- CartWidget: Es un icono de compra en donde se muestran la cantidad de productos agregadas al carrito.
- ItemListContainer: Acá se realiza el renderizado de todos los productos que son traidos de la base de datos Firestore.
- ItemList: Este componente recibe las props de ItemListContainer y dentro de ItemList se encuentra el componente **_Item_** al cual se le pasan las props para que muestre su producto respectivo.
- Item: Recibe las porps del ItemList y con Chakra Ui se crea una tarjeta de presentacion de cada producto y contiene un boton de detalles para ver el producto mas especificado.
- ItemDetailContainer: Acá se realiza el renderizado del producto mas en detalle y desde trae desde Firestore el producto especificado.
- ItemDetail:Contiene el producto detallado este componente contiene el **_ItemCount_**.
- ItemCount:Contiene el contador con la logica para agregar los productos al carrito.
- Cart: Es el contenedor donde se van a mostrar los productos en el carrito, contiene los botones de total , vaciar carrito y comprar.
- ItemCart: Es el producto comprado que tambien contiene un boton para eliminarlo y tambien un subTotal.
- Factura: Es donde se llenan los datos personales y de pago. Contiene un boton de compra que al clickear manda los datos a Firestore.
- Footer:Contiene datos de la tienda.


