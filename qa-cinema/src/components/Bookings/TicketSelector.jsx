import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import movieUtils from "./../../utils/movies";
import payment from "../../utils/payment";
import Carousel from 'react-bootstrap/Carousel'

import image1 from './img/theatre.jpg'
import image2 from './img/set.png'
import image3 from './img/cinemas.jpg'
import image4 from './img/cinema2.jpg'
import Card from 'react-bootstrap/Card'

const TicketSelector = (props) => {

    // Get All .select only showingTimes & title
    // Axios
    // const data = [{"id":-1, "Title":"Detective", "ShowTimes":[81452812842129,20]},{"id":2, "Title":"Picka", "ShowTimes":[81452812842129]}];
    const [movies, setMovies] = useState([]);
    const [showtimes, setShowtiemes] = useState(<p>Loading Show Times</p>)
    const { setPage, getCart, setCart, url } = props;

    const getData = () => {
        setMovies([]);
        movieUtils.getAll().then((res) => {
            setMovies(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        getData();
    }, [])

    const updateForm = (e) => {
        e.preventDefault();
        const firstOption = e.target.parentElement.querySelector("#MovieId")[0]
        if (firstOption.value === "Select A Movie") {
            firstOption.remove()
        }
        movieUtils.get(e.target.value).then((res) => {
            if (res.data) {
                const timming = e.target.parentElement.querySelector("#MovieTimings");
                timming.innerHTML = "";
                res.data.showTimes.map((t) => {
                    const time = new Date(t*1000)
                    timming.innerHTML += `<option>${time.toLocaleDateString()+" - "+time.getHours()+":"+time.getMinutes()}</option>`
                })
            } else {
                throw new Error("No body on responce")
            }
        }).catch((err) => {
            console.log(err)
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = {};

        for (let i = 0; i < 6; i++) {
            if (e.target[i].value == "Select A Movie" || e.target[i].value == "" || e.target[i].value < 0) {
                alert("Please Fill In All Inputs");
                return;
            }
            formData[e.target[i].id] = e.target[i].value;
            if (i > 1) {
                e.target[i].value = "";
            } else if (i === 0) {
                formData["MovieTitle"] = e.target[0][e.target[0].selectedIndex].text
            }

        }
        formData.price = (formData.Adults * 10) + (formData.Child * 5) + [0, 3, 5, 7.5][formData.Concessions]
        setCart(getCart => [...getCart, formData])
    }

    return (
        <div class="background">
            <Carousel controls={false} slide={true} fade={true} pause={false} height="650px">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>

            <br></br>
            <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Book your tickets </h2>
            <br></br>

            <Container>
                <Card className="text-center">
                    <Card.Header>Ticket Select</Card.Header>
                    <Card.Body>
                        <Card.Title><u>Please fill out the form to book tickets</u></Card.Title>
                        <Card.Text>

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
                                    </select><br />

                                    <label htmlFor="Name" >Name:</label><br />
                                    <input type="text" id="Name" /><br />

                                    <label htmlFor="Adults" >Adults £10:</label><br />
                                    <input type="number" id="Adults" /><br />

                                    <label htmlFor="Child" >Child (Under 16s) £5:</label><br />
                                    <input type="number" id="Child" /><br />

                                    <label htmlFor="Concessions" >Concession:</label><br />
                                    <select id="Concessions">
                                        <option value={0}> No Snacks </option>
                                        <option value={1}>£3 Large Drink </option>
                                        <option value={2}>£5 Popcorn </option>
                                        <option value={3}>£7.50 Large Drink & Popcorn </option>
                                    </select><br />

                                    <br /><input type="submit" value="Add To Cart" />
                                    <button onClick={() => { setPage("Checkout") }} disabled={getCart.length === 0}>Checkout</button>
                                </form>

                            )}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                {/* import the andrews form if it messes up */}
            </Container>
        </div>
    );

}

export default TicketSelector;