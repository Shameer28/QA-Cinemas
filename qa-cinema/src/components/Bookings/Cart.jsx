const Cart = ({getCart, SetCart}) => {
    if (getCart.length===0){
        return(<></>);
    }
    return ( 
    <div>
        <h1>Cart:</h1>
        {getCart.map(x=>(<p>{x.Name}</p>))}
    </div> );
}
 
export default Cart;