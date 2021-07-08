import { useState } from "react";
import Payment from "./Payment";
import TicketSelector from "./TicketSelector";

const PurchaseManager = () => {

    const [getCart, setCart] = useState({});
    const [getPage, setPage] = useState("TicketSelector")

    return ( 
    <div className="text-center">
        {getPage=="TicketSelector" ? (
        <TicketSelector setPage={setPage} getCart={getCart} setCart={setCart} url="http://localhost:3000/movies/"/>
        ) : (
        <Payment setPage={setPage} cart={getCart}/>
        )}
    </div> 
    );
}
 
export default PurchaseManager;