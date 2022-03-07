import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Images from "./Images"
import getAuctions from "../service/getAuctions"
import axios from "axios"
import getUser from '../service/getUser'

const AuctionDetail = () => {
    const params = useParams()

    const [items, setItems] = useState([]);
    const [input, setInput] = useState('')
    const [message, setMessage] = useState('')
    const [user, setUser] = useState(getUser())
    const [ofertas, setOfertas] = useState(null)

    useEffect(() => {
        getAuctions().then(res => {
            setItems(res)
        })
        
    },[])

    useEffect(() => {
        axios.get('http://localhost:3333/subasta/api/offers/allByAuction?auctionId='+params.id).then(({data}) => setOfertas(data.length))
    },[])

    const handleOferta = async () => {
        if(!user) window.location.assign("/login");
        const oferta = document.querySelector('#oferta').value
        if(!oferta) return
        if(Number(oferta)-Number(endPrice) >= 1000){
            const response =  await axios.post('http://localhost:3333/subasta/api/offers/create',{
                offerValue: Number(oferta),
                auction: params.id
            },{
                headers: {
                  Authorization: `${user.token}`
                }
              })
            const res = response.data
            setMessage('Oferta creada exitosamente')
            setTimeout( async () => {
                setMessage('')
                setInput('')
                const response = await axios.get('http://localhost:3333/subasta/api/auctions/'+params.id)
                const res = response.data
                setItems([res])
                axios.get('http://localhost:3333/subasta/api/offers/allByAuction?auctionId='+params.id).then(({data}) => setOfertas(data.length))
            }, 3000)
            
        }else{
            setMessage('El precio debe ser mayor o igual a la oferta minima')
            setTimeout(() => {
                setMessage('')
            }, 3000)
        }
    }


    const getHours = () => {
        let endDateAuction = new Date('2022-03-10')
        let currentDate = new Date()
        let time = endDateAuction - currentDate;
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor(time / (1000 * 60 * 60) - days * 24);
        let mins = Math.floor(time / (1000 * 60) - hours * 60 - days * 24 * 60);
        let sec = Math.floor(
            time / 1000 - mins * 60 - hours * 60 * 60 - days * 24 * 60 * 60
          );
        days = days > 9 ? days : "0" + days;
        hours = hours > 9 ? hours : "0" + hours;
        mins = mins > 9 ? mins : "0" + mins;
        sec = sec > 9 ? sec : "0" + sec;
      
        return [days, hours, mins, sec];
      
      }
    const [days, hours, mins, sec] = getHours()

    if(items.length === 0) return 'Cargando'

    const { _id, product_name, endPrice, profileImage, images } = items.find(item => item._id == params.id)


    return (
        <>
            <div className="grid grid-cols-2 gap-4 px-10 text-white ">    
                 
                 <Images images={images} />
                
                <div>
                    <h1 className="mb-3 text-2xl text-center">{product_name}</h1>
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-3">
                            <span className="font-bold">Tiempo restante:</span>
                            <span>{`${days}d ${hours}h ${mins}m`}</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold">Ofertas:</span>
                            <span>{ofertas}</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between my-4">
                        <span className="text-xl font-bold">Precio actual:</span>
                        <span>{endPrice}</span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span>Oferta minima:</span>
                            <span>{endPrice+1000}</span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span>Establezca su oferta</span>
                            <input id="oferta" type="text" value={input} onChange={(e) => setInput(e.target.value)} className="py-1 pl-3 text-black border rounded-sm shadow-sm placeholder:italic w-28 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-400 border-slate-300 focus:outline-none" placeholder="$ 0"/>
                            
                        </div>
                        
                        <button onClick={handleOferta} className="block w-full px-2 py-1 mt-3 rounded-sm hover:bg-slate-400 bg-slate-300 text-slate-900">Hacer oferta</button>
                        <p className="text-center">{message}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuctionDetail;