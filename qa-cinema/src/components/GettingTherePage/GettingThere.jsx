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
            <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                <div >
                    <Container className="p-3">
                        <Container>
                            <Row>
                            </Row>
                            <Row>
                                <Col>
                                    <Jumbotron>
                                        <div style={{ border: "solid", height: "500px" }}>
                                            {/* <GoogleMaps /> */}
                                            <GoogleMapsDirections />
                                            
                                        </div>
                                    </Jumbotron>
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <Directions />
                                    
                                </Col>
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