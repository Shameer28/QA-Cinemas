import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import image2 from './../img/christophers.jpg'
import image1 from './../img/christopher2.jpg'
import image3 from './../img/christophers3.jpg'
import image4 from './../img/MirrorBar.jpg'
import image5 from './../img/MirrorBar2.jpg'
import image6 from './../img/MirrorBar3.jpg'
import image7 from './../img/Namco.jpg'
import image8 from './../img/Namco2.jpg'
import image9 from './../img/Namco3.jpg'

const PlacesToGo = () => {
    return (
        <div>
            <h3>Places To Go</h3><br />
            <h4>Here Are Some Local Venues to Checkout!</h4>
            <Container>
                <h5>Christophers</h5>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={image1} width="100%" height="100%" alt="Christophers Building Photo" thumbnail />
                        <p><b>Open Hours: 11AM - 12AM</b></p>
                        <p><b>Venue Description:</b><br />
                            Classic all-day American steakhouse and grill plus martini cocktail bar in high-ceilinged rooms. </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image3} width="100%" height="100%" alt="Christophers Food Photo" thumbnail />
                        <p><b>Offers:</b><br />
                            <ul>
                                <li>Get 25% off with your cinema ticket, if you dine with us</li>
                                <li>Buy one get one free cinema ticket, if you leave a review</li>
                            </ul> </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image2} width="100%" height="100%" alt="Christophers Dining Decor" thumbnail />
                        <p><b>Contact Details:</b><br />
                            Phone: 020 7240 4222 <br />
                            Email: christophersgrill@live.com</p>
                    </Col>
                </Row>
            </Container><br />

            <Container>
                <h5>The Mirror Bar</h5>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={image6} alt="The Mirror Bar Building Photo" thumbnail />
                        <p><b>Open Hours: 5PM - 12AM</b></p>
                        <p><b>Venue Description:</b><br />
                            Elegant cocktail lounge bar with decorative mirrors, in a refined hotel setting. </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image4} alt="Photo of Bar in The Mirror Bar" thumbnail />
                        <p><b>Offers:</b><br />
                            <ul>
                                <li>Get 30% off with your cinema ticket, when you spend £35 or more</li>
                                <li>Buy one get one free cinema ticket, if you leave a review</li>
                            </ul> </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image5} alt="MIrror Roof Decor Photo" thumbnail />
                        <p><b>Contact Details:</b><br />
                            Phone:  020 7631 8000 <br />
                            Email: themirrorbar@live.com</p>
                    </Col>
                </Row>
            </Container><br />

            <Container>
                <h5>Namco Funscape</h5>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={image9} alt="Namco Funscape Building Photo" thumbnail />
                        <p><b>Open Hours: 12PM - 11PM</b></p>
                        <p><b>Venue Description:</b><br />
                            At Namco Funscape you can choose from more high-tech entertainment than any other London venue – including 150 of the latest interactive video games, Pool Hall &
                            six lanes of techno-bowling.</p>

                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image8} alt="Photo In Namco Funscape Of Two People Playing Dance Game" thumbnail />
                        <p><b>Offers:</b><br />
                            <ul>
                                <li>Get 20% off with your cinema ticket, when you spend £20 or more on games</li>
                                <li>Buy one get one free cinema ticket, if you leave a review</li>
                            </ul> </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={image7} alt="Photo In Namco Funscape Of Pool Tables" thumbnail />
                        <p><b>Contact Details:</b><br />
                            Phone:  020 7967 1066 <br />
                            Email: namcofunscape@live.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PlacesToGo;