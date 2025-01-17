import { Link } from 'react-router-dom'

export default function Item( {id, title, price, img} ) {

  return (
    <div>
      <div className="card">
        <img src={img} alt="" style={{width:'30%'}} />
        <h2>{title}</h2>
        <p>Precio: ${price}</p>
        <button>
          <Link to={`/product/${id}`}>Ver detalle</Link>
        </button>
      </div>
    </div>
  )
}