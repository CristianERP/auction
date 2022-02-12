const Filtro = ({onClick, name}) => {
    return ( 
        <div className="flex justify-between px-1 py-2 transition rounded-sm cursor-pointer hover:bg-slate-500" onClick={onClick}><span>{name}</span> <span>🔽</span></div>
     );
}
 
export default Filtro;