import { useState } from "react"

const Images = ({images}) => {
    const [imagen, setImagen] = useState(images[0])

    return ( 
        <>
        <div className="grid">
            <img src={imagen} alt="" className="object-contain w-full mb-8 h-80"/>
            <div className="grid grid-cols-4 gap-4 ">
                {images.map((img, i) => {
                    return(
                        <img key={i} src={img} alt={i} className="cursor-pointer" onClick={() => setImagen(img)}/>
                    )
                })}
            </div>
        </div>
        </>
     );
}
 
export default Images;