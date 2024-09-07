import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // 
import UserInfo from '../components/UserInfo';

export default function CartView() {
  const {cart,createNewOrder} = useContext(CartContext);

  return (
    <>
      <h3>Cart View</h3>
      {cart.length === 0 ? (
        <p>Carrito vacio</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.title} style={{ width: '5%'}} />
              <h4>{item.title}</h4>
              <p>Description: {item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          ))}
        </ul>
      )}
      <UserInfo carrito={cart} createNewOrder={createNewOrder}/>
    </>
  );
}
