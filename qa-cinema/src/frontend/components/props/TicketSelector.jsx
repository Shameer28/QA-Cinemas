const TicketSelector = (props) => {

    // Get All Data () .select only showingTimes
    // Axios
    const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129]}];

    const {getCart, setCart} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
        console.log(e);
        console.log(getCart)
    }

    return (       
    <form onSubmit={handleSubmit}>
        <label htmlFor="MovieTitle" >Movie Title:</label><br/>
        <input type="text" id="MovieTitle" /><br/>

        <label htmlFor="ScreenTime" >Time:</label><br/>
        <input type="date" id="ScreenTime" /><br/>

        <label htmlFor="Name" >Name:</label><br/>
        <input type="text" id="Name" /><br/>

        <label htmlFor="Adults" >Adults:</label><br/>
        <input type="number" id="Adults" /><br/>

        <label htmlFor="Child" >Child:</label><br/>
        <input type="number" id="Child" /><br/>

        {/* Drop Down For Concessions */}

        <input type="submit" value="Submit" />
      </form>
      );
}
 
export default TicketSelector;