import { useState, useEffect } from 'react'
import getCategorias from '../service/getCategorias';

const CategoriaList = ({onMouseLeave}) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        let isCancelled = false
        getCategorias().then(res => {
            if(!isCancelled){
                setCategorias(res)
            }
            
        })
        return () => {
            isCancelled = true;
          };
    }, [])
 

    return ( 
        <ul onMouseLeave={onMouseLeave} className='absolute left-0 w-full rounded-sm top-11 bg-slate-600 '>
        
            {categorias.map(item => <li key={item._id} className='px-2 py-1 hover:bg-slate-500'>{item.name}</li>)}
        </ul>
    );
}
 
export default CategoriaList;