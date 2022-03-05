import { useState, useEffect } from "react"
import getDepartamentos from "../../service/getDepartamentos";


const Locacion = () => {
    const [departamentos, setDepartamentos] = useState([])
    useEffect(() => {
        getDepartamentos().then(res => {
            const dep = res.map(d => d.departamento);
            setDepartamentos(dep);
        })
    }, [departamentos]);
    return (
    <form className="px-3 my-3">
        <select name="localizacion" id="localizacion" className="w-full py-1 pl-3 italic border rounded-sm shadow-sm text-slate-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 border-slate-300 focus:outline-none">
            <option value="">Selecciona una localizacion</option>
            {departamentos.map(d => <option key={d} value={d} >{d}</option>)}
        </select>
        <button className="block px-2 py-1 mt-3 rounded-sm hover:bg-slate-400 bg-slate-300 text-slate-900">Aplicar</button>
    </form>);
}

export default Locacion;