import React, { useState,useEffect} from 'react'
import ItemList from './ItemList'
import ItemInicio from './ItemInicio'
import { useParams } from 'react-router-dom'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import Loading from './Loading'

const ItemListContainer = () => {

  const { categoria }=useParams()

  const [instrumentos,setInstrumentos]=useState([])


  useEffect(()=>{
    const db=getFirestore();

    const itemCollection= collection(db,'instrumentos');
    getDocs(itemCollection).then((snapshot)=>{
      const docs=snapshot.docs.map((doc)=>{
        const newProduct={
          ...doc.data(),
          id:doc.id
        }
        return newProduct;
      });
      setInstrumentos(docs);
    })
  },[categoria])


  const categoriaFiltro= instrumentos.filter((dta)=> dta.categoria===categoria)
  
  const[loader,setLoader]=useState(true)
  setTimeout(() => {
    setLoader(false)
  }, 1000);

  
  if(loader){
    return(
      <>
      <Loading />
      </>
    )
  }



  if(categoria){
    return(
      <>
        <div className="contenedorGral">
        <ItemList productos={categoriaFiltro}/>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className="contenedorGral">
        <ItemInicio/>
        <h1>TODOS NUESTROS PRODUCTOS</h1>
        <ItemList productos={instrumentos}/>
        </div>
      </>
    )
  }


}

export default ItemListContainer