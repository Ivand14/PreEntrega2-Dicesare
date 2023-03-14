import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartWidget from './components/CartWidget'



const App = () => {


  return (

    
    <BrowserRouter className='container-cards'>

    <ChakraProvider>
    <NavBar/>

    <Routes>
    <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>


    </Routes>

    </ChakraProvider>

    </BrowserRouter>
  )
}

export default App
