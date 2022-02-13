import { Link } from "react-router-dom";
import Corazon from "../../assets/icons/Corazon";
const CardDetail = ({id, name, precio, ofertas, imagen}) => {
    return ( 
    <Link to={`/detail/${id}`} className="container w-full max-w-md mx-auto text-white border">
    <img src="../../assets/images/item-1.jpg" alt=""  className="object-cover w-full"/>
    <div className="relative m-2">
      <p>Zapatilla Nike</p>
      <span>70.000</span>
      <div className="flex text-sm">
        <span className="font-bold">Ofertas : 10</span>
        <span>Tiempo: 1h</span>
        <button href="">Hacer Oferta</button>
      </div>
      <div className="absolute top-0 right-0 cursor-pointer">
        <Corazon />
      </div>
    </div>
  </Link> );
}
 
export default CardDetail;