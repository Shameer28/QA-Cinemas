import { useState } from "react";
import TicketSelector from "./TicketSelector";
import StripeCheckoutForm from './StripePayment';
import Cart from "./Cart";

import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51JAb8eJE1YNxquuDvcbs6vxzAMjXQfYDU5vS6FvOd35njC6Ceq9VIwWAPn9rK4Z7dMhaGrTyoA41Gw191ltILhIs00yuoTEWIx');


const PurchaseManager = () => {

    const [getCart, setCart] = useState([]);
    const [getPage, setPage] = useState("TicketSelector")

    return ( 
    <div className="text-center">
        {getPage==="TicketSelector" ? (
        <div>
            <Cart getCart={getCart} setCart={setCart}/>
            <TicketSelector setPage={setPage} getCart={getCart} setCart={setCart}/>
        </div>
        ) : (
            getPage==="PaymentSuccess" ? (
                <h1>Success!</h1>
            ):(
            <div>
                <Elements stripe={stripePromise}>
                    <StripeCheckoutForm setPage={setPage} getCart={getCart} setCart={setCart}/>
                </Elements>
                <Cart getCart={getCart} setCart={setCart}/>
            </div>)
        )}
        
    </div> 
    );
}
 
export default PurchaseManager;