import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import movieUtils from "./../../utils/movies";
import payment from "../../utils/payment";

const TicketSelector = (props) => {

    // Get All .select only showingTimes & title
    // Axios
    // const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129,20]},{"id":2, "Title":"Picka", "ShowTimes":[81452812842129]}];
    const [movies, setMovies] = useState([]);
    const [showtimes, setShowtiemes] = useState(<p>Loading Show Times</p>)
    const {setPage, getCart, setCart, url} = props;

    const getData = () => {
        setMovies([]);
        movieUtils.getAll().then((res) => {
            setMovies(res.data)
		}).catch((err) => {
			console.log(err)
		});
	}

    useEffect(()=>{
        getData();
    },[])

    const updateForm = (e)=>{
        e.preventDefault();
        const firstOption = e.target.parentElement.querySelector("#MovieId")[0]
        if (firstOption.value === "Select A Movie"){
            firstOption.remove()
        }
        movieUtils.get(e.target.value).then((res) => {
            if (res.data){
                const timming = e.target.parentElement.querySelector("#MovieTimings");
                timming.innerHTML="";
                res.data.showTimes.map((t)=>{
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

        let formData = {};
        for (let i = 0; i < 5; i++) {
            if (e.target[i].value == "Select A Movie" || e.target[i].value == "" || e.target[i].value < 0){
                alert("Please Fill In All Inputs");
                return;
            }
            formData[e.target[i].id] = e.target[i].value;
            if (i>1){
                e.target[i].value = "";
            }else if (i===0){
                formData["MovieTitle"] = e.target[0][e.target[0].selectedIndex].text
            }

        }

        formData.price = formData.Adults*10 + formData.Child*5
        setCart(getCart => [...getCart, formData])
    }

    return (      
        <div>
        <h3>Ticket Select</h3>
        {movies.length === 0 ? (
            <h5>Loading Form</h5>
        ) : (
            <form onSubmit={handleSubmit}>

                <select id="MovieId" onChange={updateForm}>
                <option value={null}> Select A Movie </option>
                {movies.map((m, key) => {
                    return <option key={key} value={String(m._id)}> {m.title} </option>
                })}
                </select>
                <select id="MovieTimings">
                </select><br/>

                <label htmlFor="Name" >Name:</label><br/>
                <input type="text" id="Name" /><br/>

                <label htmlFor="Adults" >Adults £10:</label><br/>
                <input type="number" id="Adults" /><br/>

                <label htmlFor="Child" >Child (Under 16s) £5:</label><br/>
                <input type="number" id="Child" /><br/>

                {/* Drop Down For Concessions */}

                <br/><input type="submit" value="Add To Cart" />
                <button onClick={() => {setPage("Checkout")}} disabled={getCart.length===0}>Checkout</button>
            </form>
        )}
        </div>);
}
 
export default TicketSelector;