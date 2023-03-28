import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ShopCart from './context/ShopCart'
import Cart from './components/Cart'
import Loading from './components/Loading'
import Factura from './components/Factura'










const App = () => {

  const[loader,setLoader]=useState(true)
  

  setTimeout(() => {
    setLoader(false)
  }, 2000);

  
  if(loader){
    return(
      <>
      <Loading />
      </>
    )
  }

  return (

<ShopCart>




    <BrowserRouter className='container-cards'>

      <ChakraProvider>
        <NavBar/>

        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/resumen' element={<Factura/>}/>
          

        </Routes>

      </ChakraProvider>

    </BrowserRouter>

</ShopCart>
  )
}

export default App
