import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ITEMS from "../shared/data"
import Images from "./Images"


const AuctionDetail = () => {
    const params = useParams()

    const [auction, setAuction] = useState(ITEMS.find(item => item.id === Number(params.id)))

    const { id, nombre, precio, ofertas, imagen, imagenes } = auction


    return (
        <>
            <div className="grid grid-cols-2 gap-4 px-10 text-white ">    
                 
                 <Images images={imagenes} />
                
                <div>
                    <h1 className="mb-3 text-2xl text-center">{nombre}</h1>
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-3">
                            <span className="font-bold">Tiempo restante:</span>
                            <span>1 hora</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold">Ofertas:</span>
                            <span>3</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between my-4">
                        <span className="text-xl font-bold">Precio actual:</span>
                        <span>80000</span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span>Oferta minima:</span>
                            <span>81000</span>
                        </div>
                        <div className="flex justify-between my-4">
                            <span>Establezca su oferta</span>
                            <input type="text" className="py-1 pl-3 text-black border rounded-sm shadow-sm placeholder:italic w-28 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:text-slate-400 border-slate-300 focus:outline-none" placeholder="$ 0"/>
                        </div>
                        <button className="block w-full px-2 py-1 mt-3 rounded-sm hover:bg-slate-400 bg-slate-300 text-slate-900">Hacer oferta</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuctionDetail;