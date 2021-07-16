import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Container } from "react-bootstrap";
import payment from "../../utils/payment";

import Carousel from 'react-bootstrap/Carousel'

import image1 from './img/theatre.jpg'
import image2 from './img/set.png'
import image3 from './img/cinemas.jpg'
import image4 from './img/cinema2.jpg'

const StripeCheckoutForm = (props) => {

    const { setPage, getCart } = props;
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const handleCardDetailsChange = event => {
        event.error ? setCheckoutError(event.error.message) : setCheckoutError(); // Card Check on change
    };

    const getCost = () => {
        let total = 0;
        getCart.forEach(x => total += x.price)
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
                if (e.target[i].value === "") {
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
        <div class="background">
            <Carousel controls={false} slide={true} fade={true} pause={false} height="650px">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br></br>
            <Container>
                <div style={{ backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                    <div className="stripe-form-container">
                        <form onSubmit={handleFormSubmit} className="stripe-form w-308px lg:w-600px lg:px-8 py-6 lg:py-10 m-auto">
                            <h2 className="text-black mb-6 uppercase font-600">Stripe Payment: Pay with card</h2>
                            <div className="mb-4">
                                <label htmlFor="name" >Billing Name:</label><br />
                                <input type="text" id="name" /><br />
                                <label htmlFor="email" >Email:</label><br />
                                <input type="text" id="email" /><br />
                                <label htmlFor="address" >Address:</label><br />
                                <textarea type="text" id="address" /><br />

                                <h6>Card Information</h6>
                                <div className="container" style={{ color: "white" }} >
                                    <div data-testid="card" style={{ width: "50%", margin: "auto" }}>
                                        <CardElement  onChange={handleCardDetailsChange} />
                                    </div>
                                </div>

                            </div>
                            {checkoutError ? <div className="text-sm my-4 text-black">{checkoutError}</div> : null}
                            <Button onClick={() => { setPage("TicketSelector") }}>Back</Button> &nbsp;
                            <Button type="submit" disabled={isProcessing || !stripe}> {isProcessing ? "Processing..." : `Pay £${getCost()}`} </Button>
                        </form><br />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StripeCheckoutForm;
