import { useState, useEffect } from 'react'
import getCategorias from "../../service/getCategorias";

const Categoria = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
       getResult()
    },[])

    const getResult = async () => {
        const res = await getCategorias()
        setCategorias(res)
    }
    
    return (
        <ul>
            {categorias.map((item) => <li className="px-3 py-2 my-2 transition rounded-sm cursor-pointer hover:bg-slate-500" key={item._id} >{item.name}</li>)}
        </ul>
    );
}

export default Categoria;