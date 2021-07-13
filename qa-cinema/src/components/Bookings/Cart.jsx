import { Container } from "react-bootstrap";

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
                            <h1>Cart:</h1>
                            <p>Name | Movie | Adults, Children | Concession | Price </p>
                            {getCart.map((x, key) => (<p key={key}>{x.Name} | {x.MovieTitle} | {x.Adults}, {x.Child} | {["No Snack", "Large Drink", "Popcorn", "Large Drink & Popcorn"][x.Concessions]} | £{x.price}</p>))}
                        </div>
                    </div>
                </Container>


            </div>
        )
    }
}
   
export default Cart;