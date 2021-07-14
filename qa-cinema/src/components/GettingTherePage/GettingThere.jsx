import Container from 'react-bootstrap/Container';
import Carousels from './Carousels';
import GoogleMaps from './GoogleMaps';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import GoogleMapsDirections from './GoogleMapsDirections';
import Directions from './Directions';

const GettingThere = () => {

    return (
        <div class="background">
            <Carousels />
            <div style={{ width: "50%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                <div >
                    <Container className="p-3">
                        <Container>
                            <Row>
                            </Row>
                            <Row>
                                <Col>
                                    <Jumbotron>
                                        <div style={{ border: "solid", height: "500px", width: "100%", borderColor: "black" }}>
                                            {/* <GoogleMaps /> */}
                                            <GoogleMapsDirections />
                                        </div>
                                    </Jumbotron>
                                </Col>
                                <Row>
                                    <Col>
                                        <div style={{ margin: "auto", width: "100%" }}>
                                            <Directions />
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Container>
                    </Container>

                </div>

            </div>
            <br></br>
        </div >
    )
}
export default GettingThere