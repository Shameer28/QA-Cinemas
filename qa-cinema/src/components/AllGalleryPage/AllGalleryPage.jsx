
import { Container, Row } from "react-bootstrap";

import ListMovies from "./../sharedcomponents/ListMovies"


const AllGalleryPage = () => {

    return (
        <div className="background">
            <Container>
                <br></br>
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Now Showing</h2>
                <br></br>
                <div>
                    <Row>
                        <ListMovies />
                    </Row>
                </div>

                <br></br>

            </Container>
        </div>
    );

}

export default AllGalleryPage;