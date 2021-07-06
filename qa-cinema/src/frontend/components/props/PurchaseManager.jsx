import { useState } from "react";
import Payment from "./Payment";
import TicketSelector from "./TicketSelector";

const PurchaseManager = () => {

    const [getCart, setCart] = useState({id:0});

    return ( 
    <div>
        <TicketSelector getCart={getCart} setCart={setCart}/>

        <br/> {/* Add Cart? Prop that looks pretty with itemz? */}

        <Payment cart={getCart}/> {/*Maybe a Button to new page*/}
    </div> 
    );
}
 
export default PurchaseManager;