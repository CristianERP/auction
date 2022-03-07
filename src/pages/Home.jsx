import Card from '../components/Card';
import { useState, useEffect } from 'react'
import getAuctions from '../service/getAuctions';

const Home = () => {
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
        <>
            <section>
                <img src="../../assets/images/banner.png" alt="" className="object-cover w-full h-64 rounded-sm" />
            </section>
            <h1 className="my-4 text-2xl font-bold text-white">Destacados</h1>
            <section id="destacados" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <Card items={items}/>
            </section>
        </>
    );
}

export default Home;