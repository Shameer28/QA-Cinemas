import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousels from './Carousel'

import image1 from './img/BlackWidow.jpg'
import image2 from './img/Fast9.jpg'
import image3 from './img/JamesBond.jpg'

const HomePage = () => {
    return (
        <div>
            <h3>Homepage</h3>
            <Carousels/>
            <h3>Top films</h3>
            <Container>
                <Row md={4}>
                    <Col xs={3}>
                        <img src={image1} alt="BlackWidow" width="200"/>
                    </Col>
                    <Col xs={6}><img src={image2} alt="Fast9" width="200"/></Col>
                    <Col><img src={image3} alt="JamesBond" width="200"/></Col>
                </Row>
            </Container>
            
        </div>
    );
}



export default HomePage;