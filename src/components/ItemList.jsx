import { useState, useEffect } from "react";
import Item from "./Item";
import { getAllProducts, getCategory } from "../productsMock.js";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function ItemList() {

  const { categoryId } = useParams()

  const [allProducts, setAllProducts] = useState([])

  /*useEffect(() => {
    if (categoryId) {
      setAllProducts(getCategory(categoryId))
    } else {
      getAllProducts
      .then((data) => setAllProducts(data))
    }
  }, [categoryId])*/

  useEffect(() =>{
      const db = getFirestore();

      if(categoryId){
        const productsCollection = query(collection(db,'productos'), where('category', '==', categoryId))

        getDocs(productsCollection).then((snapshot) =>{
          if(snapshot.size === 0){
            console.log("No hay productos")
          }

          setAllProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))

        })

      }else{
        const productsCollection = collection(db,'productos')

        getDocs(productsCollection).then((snapshot) =>{
          if(snapshot.size === 0){
            console.log("No hay productos")
          }

          setAllProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))

        })

      }

  },[categoryId])


  return (
    <>
      {
        allProducts.map(product =>
          <Item key={product.id} id={product.id} title={product.title} stock={product.stock} price={product.price} img={product.image} />
        )
      }
    </>
  )
}