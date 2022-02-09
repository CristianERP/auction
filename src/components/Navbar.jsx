import CategoriaIcon from '../../assets/icons/Categoria'
import Destacado from '../../assets/icons/Destacado'
import Reciente from '../../assets/icons/Reciente'
import Money from '../../assets/icons/Dinero'
import NavButton from './NavButton'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="flex items-center justify-between p-6 text-xl text-white bg-gray-900 rounded sm:block md:flex md:flex-col lg:flex lg:flex-row">
            <Link to="/">
                MY AUCTION
            </Link>
            <ul className="hidden my-4 sm:block md:flex">
                <NavButton>
                    <CategoriaIcon/>
                    <span>Categoria</span>
                </NavButton>
                <NavButton>
                    <Destacado />
                    <span>Destacados</span>
                </NavButton>
                <NavButton>
                    <Reciente />
                    <span>Cotizados Recientemente</span>
                </NavButton>
                <NavButton>
                    <Money />
                    <span>Mis subastas</span>
                </NavButton>
            </ul>

            <Link to="/login" className='p-2 text-black bg-white rounded md:right-0 focus:ring-4'>Iniciar sesión</Link>
                
        </nav>
     );
}
 
export default Navbar;