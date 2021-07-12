import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListMovies from "./../sharedcomponents/ListMovies"


const AllGalleryPage = () => {

    return (
        <div class="background">
            <Container>
                <br></br>
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Best Movies Of All Time</h2>
                <br></br>
                <div>
                    <row>
                        <ListMovies url="http://localhost:3000/movies/getAll" />
                    </row>
                </div>

                <br></br>

            </Container>
        </div>
    );

}

export default AllGalleryPage;