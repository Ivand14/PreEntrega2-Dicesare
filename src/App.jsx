import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'



const App = () => {




  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer greeting={'BIENVENIDO A ROXYAM TIENDA DE INSTRUMENTOS MUSICALES'}/>
    </ChakraProvider>
    </>
  )
}

export default App
