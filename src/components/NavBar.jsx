import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import '../styles/NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <button>
            <Link to={'/'}>Inicio</Link>
          </button>
          <button>
            <Link to={'/category/pantalones'}>Pantalones</Link>
          </button>
          <button>
            <Link to={'/category/remeras'}>Remeras</Link>
          </button>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}