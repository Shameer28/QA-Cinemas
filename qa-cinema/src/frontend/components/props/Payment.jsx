const Payment = (props) => {

    const {getCart, setCart} = props;

    return (
        <div>
            <h3>Payment</h3>
            <form>
                <label htmlFor="Name" >Name:</label><br/>
                <input type="text" id="Name" /><br/>

                <label htmlFor="CardNumber" >Card Number:</label><br/>
                <input type="number" id="CardNumber" /><br/>

                <label htmlFor="ExpiryData" >Child:</label><br/>
                <input type="text" id="ExpiryData" /><br/>

                <label htmlFor="CVC" >CVC:</label><br/>
                <input type="number" id="CVC" /><br/>

                <input type="submit" value="Submit" />
            </form>
        </div> 
     );
}
 
export default Payment;