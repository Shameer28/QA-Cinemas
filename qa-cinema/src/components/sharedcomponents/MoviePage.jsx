import { useParams } from "react-router";
import { useEffect, useState } from "react";
import movieUtils from "../../utils/movies.js";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function leftPad(i, size) {
	i = i.toString();
	while (i.length < size) {
		i = "0" + i;
	}
	return i;
}


const MoviePage = (url) => {

    const { id } = useParams();
    const [movies, setMovies] = useState({ loading: true });

    useEffect(() => {
        getData();
		// eslint-disable-next-line
    }, [])

    const getData = () => {
        setMovies({ loading: true })

        movieUtils.get(id).then((resp) => {
            setMovies(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div class="background">
            <Container>
                <br></br>
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Movie details</h2>
                <br></br>
                {movies.loading ?
                    (<h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Loading Movie Details</h2>) : (
                        <div>
                            <Row>
                                <Col>
                                    <div style={{ margin: "0 auto" }}>
                                        <div class="centerText">
                                            <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1", }}>{movies.title}</h3><br></br>
                                        </div>
                                        <img src={movies.image} alt={movies.title + "'s Poster"} class="MoviePageImage" />
                                    </div>
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <div style={{ margin: "auto" }}>
                                        <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}><b>Director: </b> {movies.director} <br /><br></br>
                                            <b>Actors </b> <br/> {movies.actors.map(t => <span>{t.name} <br></br> </span>)} <br /><br></br>
                                            <b>Plot</b>: {movies.plot} <br /><br></br>
                                            <b>Show Times </b> <br></br> {movies.showTimes.map(t => {
												const time = new Date(t*1000)
												const timeStr =  time.toLocaleDateString()+" - "+ leftPad(time.getHours(), 2)+":"+ leftPad(time.getMinutes(), 2)
											
												return <span>{timeStr} <br></br> </span>})
											} <br /><br></br>
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                <br></br>
            </Container>
        </div>
    );
}

export default MoviePage;