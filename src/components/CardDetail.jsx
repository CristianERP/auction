import Corazon from "../../assets/icons/Corazon";
const CardDetail = ({name, precio, ofertas, imagen}) => {
    return ( 
    <article className="container w-full max-w-md mx-auto text-white border">
    <img src="../../assets/images/item-1.jpg" alt=""  className="object-cover w-full"/>
    <div className="relative m-2">
      <p>Zapatilla Nike</p>
      <span>70.000</span>
      <div className="flex text-sm">
        <span className="font-bold">Ofertas : 10</span>
        <span>Tiempo: 1h</span>
        <a href="">Hacer Oferta</a>
      </div>
      <div className="absolute top-0 right-0 cursor-pointer">
        <Corazon />
      </div>
    </div>
  </article> );
}
 
export default CardDetail;