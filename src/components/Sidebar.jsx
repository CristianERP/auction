import {  useState } from "react"
import Filtro from "./Filtro"
import Precio from "./filtros/Precio"
import Categoria from "./filtros/Categoria"
import Locacion from "./filtros/Locacion"
import axios from "axios"



const Sidebar = ({handleSearch, keyword}) => {
    const [openCategoria, setOpencategoria] = useState(false)
    const [openPrecio, setOpenPrecio] = useState(false)
    const [openLocacion, setOpenLocacion] = useState(false)

    return (
        <>
            <form>
                <input type="text" className="w-full py-1 pl-4 bg-white border rounded-sm shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar palabra clave" value={keyword} onChange={handleSearch} />
            </form>
            <div className="mt-4 text-white">
                <ul>
                    <li>
                        <Filtro name="Categoria" onClick={() => setOpencategoria(!openCategoria)} />
                        {openCategoria ?
                            <Categoria /> :
                            ""
                        }

                    </li>
                    <li>
                        <Filtro name="Precio" onClick={() => setOpenPrecio(!openPrecio)} />
                        {openPrecio ?
                            <Precio /> :
                            ""}
                    </li>
                    <li>
                        <Filtro name="Locacion" onClick={() => setOpenLocacion(!openLocacion)} />
                        {openLocacion ?
                            <Locacion /> : ""}
                    </li>
                </ul>
            </div>

        </>

    );
}

export default Sidebar;