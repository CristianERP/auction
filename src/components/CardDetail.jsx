import { Link } from "react-router-dom";
import Corazon from "../../assets/icons/Corazon";
const CardDetail = ({_id, description, startPrice, ofertas, profileImage, product_name,endPrice, endDate}) => {

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

    return (
    <Link to={`/detail/${_id}`} className="container w-full max-w-md mx-auto text-white border">
    <img src={profileImage || "../../assets/images/item-1.jpg"} alt=""  className="object-contain mx-auto h-80 w-80"/>
    <div className="relative m-2">
      <p>{product_name}</p>
      <span>{endPrice}</span>
      <div className="flex flex-col text-sm">
        <span className="font-bold">Ofertas : 10</span>
        <span>Tiempo: {`${days}d ${hours}h ${mins}m`}</span>
        <button href="">Hacer Oferta</button>
      </div>
      <div className="absolute top-0 right-0 cursor-pointer">
        <Corazon />
      </div>
    </div>
  </Link> );
}
 
export default CardDetail;