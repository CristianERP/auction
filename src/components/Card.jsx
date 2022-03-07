import CardDetail from "./CardDetail";

const Card = ({items}) => {
    
    return ( 
    <>
    {items.map(item => <CardDetail key={item._id} {...item}/>)}  
    </>
     );
}
 
export default Card;