import Hamburger from './Hamburger'
import '../css/Header.css'

function Header(){

  return(
    <div className='header-container'>
      <h1 className="title" >Ruta 7  - Comparti el viaje</h1 >
      <Hamburger/>
    </div>

  )
}

export default Header;