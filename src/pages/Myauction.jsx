import Card from "../components/Card";
import { useState, useEffect } from 'react'
import getAuctions from "../service/getAuctions";

const Myauction = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        getAuctions().then(res => {
            if(!isCancelled){
                setItems(res)
            }
        })

        return () => {
            isCancelled = true;
          };
    },[])

    if(!items) return 'Cargando...'
    return (
        <div className="lg:col-span-2 xl:col-span-3">
        <div className="grid gap-2 md:grid lg:grid-cols-2 xl:grid-cols-3">
            <Card items={items}/>
        </div>
        
    </div>  
    );
}

export default Myauction;