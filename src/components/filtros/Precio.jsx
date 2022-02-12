const Precio = () => {
    return ( <form className="px-3 my-3">
    <div className="flex gap-2 ">
        <div>
            <label htmlFor="min"> Minimo </label>
            <input type="text" name="min" id="min" className="block py-1 pl-3 text-black border rounded-sm shadow-sm placeholder:italic w-28 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-400 border-slate-300 focus:outline-none " placeholder="$ Min" />
        </div>
        <div>
            <label htmlFor="max"> Maximo </label>
            <input type="text" id="max" className="block py-1 pl-3 text-black border rounded-sm shadow-sm placeholder:italic w-28 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-400 border-slate-300 focus:outline-none" placeholder="$ Max" />
        </div>
    </div>
    <button className="block px-2 py-1 mt-3 rounded-sm hover:bg-slate-400 bg-slate-300 text-slate-900">Aplicar</button>
</form> );
}
 
export default Precio;