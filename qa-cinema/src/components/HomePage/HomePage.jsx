import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousels from './Carousel';
import image1 from './../img/BlackWidowPortrait.jpg'
import image2 from './../img/Fast9.jpg'
import image3 from './../img/JamesBond.jpg'
import './HomePage.css';

const HomePage = () => {
    return (
        <div class="background">
            <Carousels />
            <Container>
                <br></br>
                <h3><u>Top films</u></h3>
                <Row md={4}>
                    <Col xs={4}>
                        <div class="image">
                            <img src={image1} alt="BlackWidow" width="300px" height="400px" />
                            <div class="image__overlay">
                                <div class="image__title">BlackWidow</div>
                                <p className="image__description">
                                    IMDb rating: 8/10
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div class="image">
                            <img src={image2} alt="Fast9" width="300px" height="400px" />
                            <div class="image__overlay">
                                <div class="image__title">Fast and Furios 9</div>
                                <p className="image__description">
                                    IMDb rating: 7/10
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="image">
                            <img src={image3} alt="JamesBond" width="300px" height="400px" />
                            <div class="image__overlay">
                                <div class="image__title">James Bond</div>
                                <p className="image__description">
                                    IMDb rating: 9/10
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default HomePage;