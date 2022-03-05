import CategoriaIcon from '../../assets/icons/Categoria'
import Destacado from '../../assets/icons/Destacado'
import Reciente from '../../assets/icons/Reciente'
import Money from '../../assets/icons/Dinero'
import LogIn from '../../assets/icons/LogIn'
import Menu from '../../assets/icons/Menu'
import NavButton from './NavButton'
import { Link } from 'react-router-dom';
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="flex items-center justify-between p-6 text-xl text-white bg-gray-900 rounded sm:block md:flex md:flex-col lg:flex lg:flex-row">
            <Link to="/" className='hidden sm:block'>
                MY AUCTION
            </Link>
            <div className="cursor-pointer sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
                {
                    isOpen ?
                        <ul className="my-4 sm:block md:flex">
                            <NavButton>
                                <CategoriaIcon />
                                <span>Categoria</span>
                            </NavButton>
                            <NavButton path="/featured">
                                <Destacado />
                                <span>Destacados</span>
                            </NavButton>
                            <NavButton>
                                <Reciente />
                                <span>Cotizados Recientemente</span>
                            </NavButton>
                            <NavButton path='/myauction'>
                                <Money />
                                <span>Mis subastas</span>
                            </NavButton>
                        </ul> :
                        ""
                }
            </div>
            <ul className="hidden my-4 sm:block md:flex">
                <NavButton>
                    <CategoriaIcon />
                    <span>Categoria</span>
                </NavButton>
                <NavButton path="/featured">
                    <Destacado />
                    <span>Destacados</span>
                </NavButton>
                <NavButton>
                    <Reciente />
                    <span>Cotizados Recientemente</span>
                </NavButton>
                <NavButton path='/myauction'>
                    <Money />
                    <span>Mis subastas</span>
                </NavButton>
            </ul>

            <Link to="/login" className='p-2 text-black rounded md:right-0 focus:ring-4'>
                <LogIn />
            </Link>

        </nav>
    );
}

export default Navbar;