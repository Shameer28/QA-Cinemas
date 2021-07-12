import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";

import axios from "axios";

const StripeCheckoutForm = (props) => {
    
    const {setPage, getCart, setCart} = props;
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements(); //Stripe Thang?

    const handleCardDetailsChange = event => {
        event.error ? setCheckoutError(event.error.message) : setCheckoutError(); // Card Check on change
    };

    const handleFormSubmit = async ev => {
        ev.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessingTo(true);

        console.log(elements);
        // TODO: NEED TO SET these from another form
        const billingDetails = {
            name: 'Imran Sayed',
            email: 'andrewmccall@gmail.com',
            address: {
                city: 'Pune',
                line1: 'Address 1',
                state: 'my state',
                postal_code: '2200'
            }
        };

        
        const cardElement = elements.getElement("card");

        try {
            const { data: clientSecret } = await axios.post("http://localhost:3000/stripe/request", { //Backend get client secret
                amount: getCart.price * 100
            });

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                setCheckoutError(error.message);
                setProcessingTo(false);
                return;
            }

            // TODO: REDIRECT TO BE ADDED
            window.location.href="/paymentSuccess";
            
        } catch (err) {
            setCheckoutError(err.message);
        }
    };

    return (
        <div className="stripe-form-container">
            <form onSubmit={handleFormSubmit} className="stripe-form w-308px lg:w-600px border border px-4 lg:px-8 py-6 lg:py-10 m-auto">
                <h2 className="text-black mb-6 uppercase font-600">Stripe Payment: Pay with card</h2>
                <div className="mb-4">
                    <form>
                        <label htmlFor="Child" >Child (Under 16s) £5:</label><br/>
                        <input type="number" id="Child" /><br/>
                    </form>

                    <h6>Card Information</h6>
                    <CardElement
                        onChange={handleCardDetailsChange}
                    />
                </div>
                {checkoutError ? <div className="text-sm my-4 text-black">{checkoutError}</div> : null}
                <button onClick={() => {setPage("TicketSelector")}}>Back</button>
                <button disabled={isProcessing || !stripe}>
                    {isProcessing ? "Processing..." : `Pay £${getCart.price}`}
                </button>
            </form>
        </div>
    );
};

export default StripeCheckoutForm;