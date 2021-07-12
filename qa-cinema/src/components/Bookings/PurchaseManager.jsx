import { useState } from "react";
import TicketSelector from "./TicketSelector";
import StripeCheckoutForm from './StripePayment';

import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51JAb8eJE1YNxquuDvcbs6vxzAMjXQfYDU5vS6FvOd35njC6Ceq9VIwWAPn9rK4Z7dMhaGrTyoA41Gw191ltILhIs00yuoTEWIx');


const PurchaseManager = () => {

    const [getCart, setCart] = useState({});
    const [getPage, setPage] = useState("TicketSelector")

    return ( 
    <div className="text-center">
        {getPage=="TicketSelector" ? (
        <TicketSelector setPage={setPage} getCart={getCart} setCart={setCart} url="http://5.226.143.166/movies/"/>
        ) : (
        <Elements stripe={stripePromise}>
            <StripeCheckoutForm setPage={setPage} getCart={getCart} setCart={setCart}/>
        </Elements>

        )}
    </div> 
    );
}
 
export default PurchaseManager;