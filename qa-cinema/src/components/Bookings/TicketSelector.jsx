import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


const TicketSelector = (props) => {

    // Get All .select only showingTimes & title
    // Axios
    // const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129,20]},{"id":2, "Title":"Picka", "ShowTimes":[81452812842129]}];
    const [movies, setMovies] = useState([]);
    const [showtimes, setShowtiemes] = useState(<p>Loading Show Times</p>)
    const {setPage, getCart, setCart, url} = props;

    const getData = () => {
        setMovies([]);
		axios.get(url+"getAll").then((res) => {
            if (res.data){
                setMovies(res.data)
            }else{
                throw new Error("No body on responce")
            }
		}).catch((err) => {
			console.log(err)
		});
	}

    useEffect(()=>{
        getData();
    },[])

    const updateForm = (e)=>{
        e.preventDefault();
        const firstOption = e.target.parentElement.querySelector("#MovieTitle")[0]
        if (firstOption.value == "Select A Movie"){
            firstOption.remove()
        }
        axios.get(url+"get/"+e.target.value).then((res) => {
            if (res.data){
                const timming = e.target.parentElement.querySelector("#MovieTimings");
                timming.innerHTML="";
                res.data.showtimes.map((t)=>{
                    timming.innerHTML+=`<option>${t}</option>`
                })
            }else{
                throw new Error("No body on responce")
            }
		}).catch((err) => {
			console.log(err)
		});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
    }

    return (      
    <div>
    <h3>Ticket Select</h3>
    {movies.length == 0 ? (
        <h5>Loading Form</h5>
      ) : (
        <form onSubmit={handleSubmit}>

            <select id="MovieTitle" onChange={updateForm}>
            <option value={null}> Select A Movie </option>
            {movies.map((m, key) => {
                return <option key={key} value={String(m._id)}> {m.title} </option>
            })}
            </select>
            <select id="MovieTimings">
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
      <br/><Button onClick={(x)=>{setPage("Checkout")}}>Checkout</Button>
    </div>);
}
 
export default TicketSelector;