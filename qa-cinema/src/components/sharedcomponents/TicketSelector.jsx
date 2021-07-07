import { useEffect, useState } from "react";
import axios from "axios";


const TicketSelector = (props) => {

    // Get All .select only showingTimes & title
    // Axios
    const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129,20]},{"id":2, "Title":"Picka", "ShowTimes":[81452812842129]}];
    const [movies, setMovies] = useState([]);
    const {getCart, setCart, url} = props;

    const getData = () => {
        setMovies([]);
		axios.get(url).then((res) => {
            setMovies(res.body);
		}).catch((err) => {
			console.log(err)
		});
	}

    useEffect(()=>{
        getData();
    },[])


    let slots = [];
    data.map(movie => {
        movie.ShowTimes.forEach(time => {
            slots.push([movie.Title, time])
        })
    })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
    }

    // Alternative - Add On change to select
    //             - Make value id of mvoie selected
    //             - On change => updates the timing dropdown


    return (      
    <div>
    <h3>Ticket Select</h3>
    {movies.length != 0 ? (
        <h5>Loading Form</h5>
      ) : (
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
      )}
    </div>);
}
 
export default TicketSelector;