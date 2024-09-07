/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { getProduct } from '../productsMock.js'
import { useEffect, useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export default function ItemDetailView() {

  const [product, setProduct] = useState({})
  const { productId } = useParams()
  const {cart,  addItem} = useContext(CartContext); 

  const onAdd = (cantidad) => {
    const productoConCantidad = { ...product, cantidad };
    console.log(productoConCantidad)
    addItem(productoConCantidad); 
  }

  /*useEffect(() => {
    setProduct(getProduct(productId))
  }, [productId])*/

  useEffect(() =>{
    const db = getFirestore();

    const getProduct = doc(db,'productos',productId);

    getDoc(getProduct).then((snapshot) =>{
      if(snapshot.exists()){
        setProduct({id: snapshot.id, ...snapshot.data()})
      }
    })
  },[productId])
  return (
    <>
      <div className="container">
        <div className="item-detail">
          <img src={product.image} alt="" style={{width:'30%'}}/>
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <ItemCount price={product.price} stock={product.stock} agregarAlCarrito={onAdd} />
        </div>
      </div>
    </>
  )
}