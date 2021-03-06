import './AboutPage.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import image1 from './../img/aboutus.png'
import image2 from './../img/oliver.jpg'
import image3 from './../img/haaris.jpg'
import image4 from './../img/shameer.jpg'
import image6 from './../img/linkedin.jpg'
import image7 from './../img/andrew.jpg'
import image8 from './../img/Github.png'
import Container from 'react-bootstrap/Container';

const AboutPage = () => {
    return (
        <div class="background">
            <img src={image1} alt="About us" width="100%" fluid /><br /><br />
            <div >
                <Container className="p-3">
                    <Container>
                        <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Meet our developers</h2><br />
                        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                            <Row>

                                <Col border="solid" borderColor="black" >
                                    <Image src={image4} width="100%" alt="Shameer's Photo" fluid border="solid" borderColor="black" />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Shameer Dar</h4>
                                    <h4><b>Role</b> : Product Owner/Front-End Developer</h4><br />
                                    <Row>
                                        <Col class="col-sm">
                                            <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank" rel="noreferrer"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col class="col-sm">
                                            <a href="https://github.com/Shameer28" target="_blank" rel="noreferrer"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                            <br /><br />
                                        </Col>
                                        <h5 className="text-center"> Contact me via LinkedIn <br />
                                            or <br />
                                            via Contact Us Page <br /><br />
                                            <Button href="/contactpage">Contact Us</Button>
                                        </h5>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                            <Row>
                                <Col>
                                    <Image src={image3} width="100%" height="100%" alt="Haaris's Photo" fluid border="solid" borderColor="black" />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Haaris Moghal <br /></h4>
                                    <h4><b>Role</b> : Front-End Developer</h4><br />
                                    <Row>
                                        <Col>
                                            <a href="https://www.linkedin.com/in/haaris-moghal-60b8b0159/" target="_blank" rel="noreferrer"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/HaarismoghalQA" target="_blank" rel="noreferrer"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                            <br /><br />
                                        </Col>
                                        <h5 className="text-center"> Contact me via LinkedIn <br />
                                            or <br />
                                            via Contact Us Page <br /><br />
                                            <Button href="/contactpage">Contact Us</Button>
                                        </h5>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                            <Row>
                                <Col>
                                    <Image src={image7} width="100%" height="100%" alt="Andrew's Photo" fluid border="solid" borderColor="black" />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Andrew McCall <br /></h4>
                                    <h4><b>Role</b> : Back-End Developer</h4><br />
                                    <Row>

                                        <Col>
                                            <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank" rel="noreferrer"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/Andrew-McCall" target="_blank" rel="noreferrer"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                            <br /><br />
                                        </Col>
                                        <h5 className="text-center"> Contact me via LinkedIn <br />
                                            or <br />
                                            via Contact Us Page <br /><br />
                                            <Button href="/contactpage">Contact Us</Button>
                                        </h5>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", color: "white", border: "solid", borderColor: "black" }}>
                            <Row>
                                <Col>
                                    <Image src={image2} width="100%" height="100%" alt="Oliver's Photo" fluid border="solid" borderColor="black" />
                                </Col>

                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Oliver Dillon <br /></h4>
                                    <h4><b>Role</b> : Scrum Master/Back-End Developer</h4><br />
                                    <Row>
                                        <Col>
                                            <a href="https://www.linkedin.com/in/oliverdillon" target="_blank" rel="noreferrer"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/StarLight-Oliver" target="_blank" rel="noreferrer"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                            <br /><br />
                                        </Col>
                                        <h5 className="text-center"> Contact me via LinkedIn <br />
                                            or <br />
                                            via Contact Us Page <br /><br />
                                            <Button href="/contactpage">Contact Us</Button>
                                        </h5>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                    </Container>
                </Container >
            </div >
        </div >
    );
}

export default AboutPage;