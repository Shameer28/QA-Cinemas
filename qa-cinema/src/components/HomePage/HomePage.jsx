import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousels from './Carousel';
import image1 from './../img/MovieThumbnails/BlackWidowPortrait.jpg'
import image2 from './../img/MovieThumbnails/Fast9.jpg'
import image3 from './../img/MovieThumbnails/JamesBond.jpg'
import image4 from './../img/MovieThumbnails/AQuietPlace2.jpg'
import image5 from './../img/MovieThumbnails/Conjuring.jpg'
import image6 from './../img/MovieThumbnails/Nobody.jpg'
import './HomePage.css';

const HomePage = () => {
    return (
        <div class="background">
            <Carousels />
            <Container>
                <br></br>
                <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>TOP FILMS</h3>
                <br></br>
                <br></br>
                <Row md={4}>
                    <Col xs={4}>
                        <div className="image">
                            <img className="movie" src={image1} alt="BlackWidow" width="100%" height="100%" />
                            <br></br>                            
                        </div>
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1", textAlign: "center", width: "75%"}}><br></br>Black Widow</div>
                        <br></br>
                    </Col>
                    <Col xs={4}>
                        <div className="image">
                            <img className="movie" src={image2} alt="Fast9" width="100%" height="100%" />                            
                        </div>                        
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1", textAlign: "center", width: "75%"}}><br></br>Fast and Furious 9</div>
                    </Col>
                    <Col>
                        <div className="image">
                            <img className="movie" src={image3} alt="JamesBond" width="100%" height="100%" />
                        </div>
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1",textAlign: "center", width: "100%"}}><br></br>James Bond No Time To Die</div>
                    </Col>
                </Row>
                <Row md={4}>
                    <Col xs={4}>
                        <div className="image">
                            <img className="movie" src={image4} alt="AQuietPlace2" width="100%" height="100%" />
                        </div>
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1", textAlign: "center", width: "75%"}}><br></br>A Quiet Place II</div>
                        <br></br>
                    </Col>
                    <Col xs={4}>
                        <div className="image">
                            <img className="movie" src={image5} alt="Conjuring" width="100%" height="100%" />
                        </div>
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1", textAlign: "center", width: "75%"}}><br></br>Conjuring: Devil made me do it</div>
                    </Col>
                    <Col>
                        <div className="image">
                            <img className="movie" src={image6} alt="Nobody" width="100%" height="100%" />
                        </div>
                        <div style={{color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase",lineHeight: "1.1", textAlign: "center", width: "100%"}}><br></br>Nobody</div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default HomePage;