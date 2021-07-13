import { Container } from "react-bootstrap";
import './style.css'
const Cart = ({ getCart, setCart }) => {

    // <button 
    //             onClick={x=>{let newCart = getCart;
    //                     newCart.splice(key, 1);
    //                     setCart(newCart);}}>
    //         X</button>


    if (getCart.length === 0) {
        return (<></>);
    } else {
        return (
            <div>
                <Container>
                    <div style={{ border: "solid", backgroundColor: "white" }}>
                        <div>
                            <h1><u>Basket:</u></h1><br></br>
                            {getCart.map((x, key) => (<p key={key}>
                                <div class="center">                                    
                                        <h4>
                                            Name: {x.Name} <br></br>
                                            Movie Title: {x.MovieTitle} <br></br>
                                            Adults: {x.Adults}<br></br>
                                            Childs: {x.Child} <br></br>
                                            Snacks: {["No Snack", "Large Drink", "Popcorn", "Large Drink & Popcorn"][x.Concessions]} <br></br>
                                            Total Price: £{x.price}
                                        </h4>
                                    
                                </div>


                            </p>))}
                        </div>
                    </div>
                </Container>


            </div>
        )
    }
}

export default Cart;