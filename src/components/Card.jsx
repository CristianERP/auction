import { useState } from "react";
import data from "../shared/data";
import CardDetail from "./CardDetail";

const Card = () => {
    const [items, setItems] = useState(data);
    
    return ( 
    <>
    {items.map(item => <CardDetail key={item.id} {...item}/>)}  
    </>
     );
}
 
export default Card;