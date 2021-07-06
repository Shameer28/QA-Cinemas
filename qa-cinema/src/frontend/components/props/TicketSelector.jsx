const TicketSelector = (props) => {

    // Get All .select only showingTimes & title
    // Axios
    const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129,20]},{"id":2, "Title":"Picka", "ShowTimes":[81452812842129]}];

    let slots = [];
    data.map(movie => {
        movie.ShowTimes.forEach(time => {
            slots.push([movie.Title, time])
        })
    })

    const {getCart, setCart} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
    }

    return (      
    <div>
    <h3>Ticket Select</h3>
    <form onSubmit={handleSubmit}>

        <select id="MovieTitle">
        {slots.map(s => {
            return <option value={s}> {`${s[0]} - ${String(s[1])}`} </option>
        })}
        </select><br/>

        <label htmlFor="Name" >Name:</label><br/>
        <input type="text" id="Name" /><br/>

        <label htmlFor="Adults" >Adults:</label><br/>
        <input type="number" id="Adults" /><br/>

        <label htmlFor="Child" >Child:</label><br/>
        <input type="number" id="Child" /><br/>

        {/* Drop Down For Concessions */}

        <input type="submit" value="Submit" />
      </form>
    </div>);
}
 
export default TicketSelector;