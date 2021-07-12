const Cart = ({getCart, setCart}) => {

    // <button 
    //             onClick={x=>{let newCart = getCart;
    //                     newCart.splice(key, 1);
    //                     setCart(newCart);}}>
    //         X</button>

    if (getCart.length===0){
        return(<></>);
    }else{
        return ( 
            <div>
                <h1>Cart:</h1>
                <p>Name | Movie | Adults, Children | Price </p>
                {getCart.map((x, key)=>(<p key={key}>{x.Name} | {x.MovieTitle} | {x.Adults}, {x.Child} | £{x.price}</p>))}
            </div>);
    }

}
 
export default Cart;