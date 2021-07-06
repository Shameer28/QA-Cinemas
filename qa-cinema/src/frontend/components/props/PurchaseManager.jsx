import { useState } from "react";
import Payment from "./Payment";
import TicketSelector from "./TicketSelector";

const PurchaseManager = () => {

    const [getCart, setCart] = useState({});

    return ( 
    <div>
        <TicketSelector cart={getCart}/>
        <Payment cart={getCart}/> {/*Maybe a Button to new page*/}
    </div> 
    );
}
 
export default PurchaseManager;