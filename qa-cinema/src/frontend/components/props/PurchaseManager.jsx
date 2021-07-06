import { useState } from "react";
import Payment from "./Payment";
import TicketSelector from "./TicketSelector";

const PurchaseManager = () => {

    const [getCart, setCart] = useState({});

    return ( 
    <div className="text-center">
        <TicketSelector getCart={getCart} setCart={setCart}/>

        <br/> {/* Add Cart? Prop that looks pretty with itemz? */}

        <Payment cart={getCart}/> {/*Maybe a Button to new page*/}
    </div> 
    );
}
 
export default PurchaseManager;