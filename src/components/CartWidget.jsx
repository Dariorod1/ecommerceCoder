import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom"

export default function CartWidget() {
  const {cart} = useContext(CartContext);

  const cartLength = cart ? cart.length : 0;

  return (
    <>
      <Link to={'/cart'}>🛒{cartLength}</Link>
      
    </>
  );
}
