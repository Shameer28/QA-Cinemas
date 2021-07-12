import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import movieUtils from "./../../utils/movies";
import payment from "../../utils/payment";


const StripeCheckoutForm = (props) => {
    
    const {setPage, getCart, setCart} = props;
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const handleCardDetailsChange = event => {
        event.error ? setCheckoutError(event.error.message) : setCheckoutError(); // Card Check on change
    };

    const getCost = () =>{
        let total = 0;
        getCart.forEach(x=>total+=x.price)
        return total;
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        
        setProcessingTo(true);
        
        const cardElement = elements.getElement("card");


        try {
            let formData = {};
            for (let i = 0; i < 3; i++) {
                if (e.target[i].value === ""){
                    throw new Error("Missing Billing Details")
                }
                formData[e.target[i].id] = e.target[i].value;
            }

            payment.createPaymentSecret(getCost()).then(async (res) => {
                const clientSecret = res.data;
                const paymentMethodReq = await stripe.createPaymentMethod({
                    type: "card",
                    card: cardElement,
                    billing_details: formData
                });

                if (paymentMethodReq.error) {
                    throw paymentMethodReq.error;
                }

                const { error } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethodReq.paymentMethod.id
                });

                if (error) {
                    throw error;
                }

                setPage("PaymentSuccess");

            }); 
        } catch (err) {
            setCheckoutError(err.message);
            setProcessingTo(false);
        }
    };

    return (
        <div className="stripe-form-container">
            <form onSubmit={handleFormSubmit} className="stripe-form w-308px lg:w-600px border border px-4 lg:px-8 py-6 lg:py-10 m-auto">
                <h2 className="text-black mb-6 uppercase font-600">Stripe Payment: Pay with card</h2>
                <div className="mb-4">
                    <label htmlFor="name" >Biling Name:</label><br/>
                    <input type="text" id="name" /><br/>
                    <label htmlFor="email" >Email:</label><br/>
                    <input type="text" id="email" /><br/>
                    <label htmlFor="address" >Address:</label><br/>
                    <textarea type="text" id="address" /><br/>

                    <h6>Card Information</h6>
                    <CardElement onChange={handleCardDetailsChange}/>

                </div>
                {checkoutError ? <div className="text-sm my-4 text-black">{checkoutError}</div> : null}
                <button onClick={() => {setPage("TicketSelector")}}>Back</button>
                <button disabled={isProcessing || !stripe}> {isProcessing ? "Processing..." : `Pay £${getCost()}`} </button>
            </form>
        </div>
    );
};

export default StripeCheckoutForm;