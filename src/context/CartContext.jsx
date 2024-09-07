import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext([]);

// Creamos el proveedor que dará acceso al contexto desde un componente
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderId,setOrderId] = useState('')
  const addItem = (item) => {
    setCart([...cart, item]);   
  };

  const createNewOrder = (order) => {

    const db = getFirestore();

    const orders = collection(db,'order')

    addDoc(orders,order).then((snapshot) =>{
      setOrderId(snapshot.id)
      
      const getDoc = doc(db,'order',snapshot.id)

      updateDoc(getDoc,{orderId:snapshot.id})

      alert(snapshot.id)

    })

  };

  return (
    <CartContext.Provider value={{cart, setCart, addItem, createNewOrder}}>
      {children}
    </CartContext.Provider>
  );
}
