import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useState, useEffect } from 'react'
import getAuctions from "../service/getAuctions";
import axios from "axios";

const Featured = () => {
    const [items, setItems] = useState(null);
    const [keyword, setKeyword] = useState('')

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

    const handleSearch = async (e) => {
        setKeyword(e.target.value)
        if(e.target.value !== ''){
            const {data} = await axios.get('http://localhost:3333/subasta/api/auctions/auction_name/'+e.target.value)
            setItems(data)
        }else{
            getAuctions().then(res => {
                setItems(res)
            })
        }
    }

    if(!items) return 'Cargando...'

    return ( 
        <>
        <div className="relative gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="mb-8 md:h-0 md:sticky top-4">
                <Sidebar handleSearch={handleSearch} keyword={keyword}/>
            </div>

            <div className="lg:col-span-2 xl:col-span-3">
                <div className="grid gap-2 md:grid lg:grid-cols-2 xl:grid-cols-3">
                    <Card items={items}/>
                </div>
                
            </div>
        </div>
            
        </>
     );
}
 
export default Featured;