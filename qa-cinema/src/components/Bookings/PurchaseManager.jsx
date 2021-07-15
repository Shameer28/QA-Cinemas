import { useState } from "react";
import TicketSelector from "./TicketSelector";
import StripeCheckoutForm from './StripePayment';
import Cart from "./Cart";
import { Container } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

import Carousel from 'react-bootstrap/Carousel'

import image1 from './img/theatre.jpg'
import image2 from './img/set.png'
import image3 from './img/cinemas.jpg'
import image4 from './img/cinema2.jpg'

const stripePromise = loadStripe('pk_test_51JAb8eJE1YNxquuDvcbs6vxzAMjXQfYDU5vS6FvOd35njC6Ceq9VIwWAPn9rK4Z7dMhaGrTyoA41Gw191ltILhIs00yuoTEWIx');


const PurchaseManager = () => {

    const [getCart, setCart] = useState([]);
    const [getPage, setPage] = useState("TicketSelector")

    return (
        <div className="text-center">
            {getPage === "TicketSelector" ? (
                <TicketSelector setPage={setPage} getCart={getCart} setCart={setCart} />
            ) : (
                getPage === "PaymentSuccess" ? (
                    <div className="background">

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
                        <Container >
                            <div style={{ backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>

                                <h1>Payment Success!</h1>

                            </div>
                        </Container>
                    </div>
                ) : (
                    <Elements stripe={stripePromise}>
                        <StripeCheckoutForm setPage={setPage} getCart={getCart} setCart={setCart} />
                    </Elements>)
            )}

            <div className="background">
                <br></br>
                    <Cart getCart={getCart} setCart={setCart} />
                <br></br>
            </div>
        </div>
    );
}

export default PurchaseManager;