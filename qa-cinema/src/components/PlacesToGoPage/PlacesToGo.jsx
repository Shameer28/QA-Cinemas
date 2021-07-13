import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PlacesToGoPage.css'
import image2 from './../img/christophers.jpg'
import image1 from './../img/christopher2.jpg'
import image3 from './../img/christophers3.jpg'
import image4 from './../img/MirrorBar.jpg'
import image5 from './../img/MirrorBar2.jpg'
import image6 from './../img/MirrorBar3.jpg'
import image7 from './../img/Namco.jpg'
import image8 from './../img/Namco2.jpg'
import image9 from './../img/Namco3.jpg'
import image10 from './../img/placestogo.jpg'

const PlacesToGo = () => {
    return (
        <div class="background">
            <div>
                <Image src={image10} alt="About us photo" width="100%" fluid /><br />
                <Container>
                    <br />
                    <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Here Are Some Local Venues to Checkout!</h2><br />
                    <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Christophers</h3>
                    <Row>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image1} width="750px" height="499px" alt="Christophers Building Photo" thumbnail />
                                <p><b>Open Hours: 11AM - 12AM</b></p>
                                <p><b>Venue Description:</b><br />
                                    Classic all-day American steakhouse and grill plus martini cocktail bar in high-ceilinged rooms. </p>
                                <br></br>
                            </div>

                        </Col>

                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image3} width="750px" height="499px" alt="Christophers Food Photo" thumbnail />

                                <p><b>Offers:</b><br />
                                    <ul>
                                        <li>Get 25% off with your cinema ticket, if you dine with us</li>
                                        <li>Buy one get one free cinema ticket, if you leave a review</li>
                                    </ul> </p>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image2} width="750px" height="499px" alt="Christophers Dining Decor" thumbnail />

                                <p><b>Contact Details:</b></p>
                                <ul>
                                    <li>Phone:  020 7240 4222</li>
                                    <li>Email: christophersgrill@live.com</li>
                                </ul>

                            </div>
                        </Col>

                    </Row>
                    <br />

                    <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>The Mirror Bar</h3>
                    <Row>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image6} width="750px" height="499px" alt="The Mirror Bar Building Photo" thumbnail />
                                <p><b>Open Hours: 5PM - 12AM</b></p>
                                <p><b>Venue Description:</b><br />
                                    Elegant cocktail lounge bar with decorative mirrors, in a refined hotel setting. </p>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image4} width="750px" height="499px" alt="Photo of Bar in The Mirror Bar" thumbnail />
                                <p><b>Offers:</b><br />
                                    <ul>
                                        <li>Get 30% off with your cinema ticket, when you spend £35 or more</li>
                                        <li>Buy one get one free cinema ticket, if you leave a review</li>
                                    </ul> </p>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image5} width="750px" height="499px" alt="MIrror Roof Decor Photo" thumbnail />
                                <p><b>Contact Details:</b><br /></p>
                                <ul>
                                    <li>Phone:  020 7631 8000</li>
                                    <li>Email: themirrorbar@live.com</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <br />

                    <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Namco Funscape</h3>

                    <Row>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image9} width="750px" height="499px" alt="Namco Funscape Building Photo" thumbnail />
                                <p><b>Open Hours: 12PM - 11PM</b></p>
                                <p><b>Venue Description:</b><br />
                                    At Namco Funscape you can choose from more high-tech entertainment than any other London venue – including 150 of the latest interactive video games, Pool Hall &
                                    six lanes of techno-bowling.</p>
                            </div>

                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image8} width="750px" height="499px" alt="Photo In Namco Funscape Of Two People Playing Dance Game" thumbnail />
                                <p><b>Offers:</b><br />
                                    <ul>
                                        <li>Get 20% off with your cinema ticket, when you spend £20 or more on games</li>
                                        <li>Buy one get one free cinema ticket, if you leave a review</li>
                                    </ul> </p>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div style={{ width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                                <Image src={image7} width="750px" height="499px" alt="Photo In Namco Funscape Of Pool Tables" thumbnail />
                                <p><b>Contact Details:</b><br /></p>
                                <ul>
                                    <li>Phone:  020 7967 1066</li>
                                    <li>Email: namcofunscape@live.com</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                </Container>
            </div >
        </div>
    );
}

export default PlacesToGo;