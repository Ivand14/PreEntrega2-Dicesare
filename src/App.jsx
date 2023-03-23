import React, { useState } from 'react'
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











const App = () => {
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

        </Routes>

      </ChakraProvider>

    </BrowserRouter>

</ShopCart>
  )
}

export default App
