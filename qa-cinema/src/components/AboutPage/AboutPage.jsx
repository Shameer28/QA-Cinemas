import './AboutPage.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from './../img/aboutus.png'
import image2 from './../img/oliver.jpg'
import image3 from './../img/haaris.jpg'
import image4 from './../img/shameer.jpg'
import image5 from './../img/social.jpg'
import image6 from './../img/linkedin.jpg'
import image7 from './../img/andrew.jpg'
import image8 from './../img/Github.png'
import Container from 'react-bootstrap/Container';

const AboutPage = () => {
    return (
        <div class="background">
            <img src={image1} alt="About us photo" width="100%" fluid /><br /><br />
            <div >
                <Container className="p-3">
                    <Container>
                        <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Meet our developers</h2><br />
                        <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                            <Row>

                                <Col>
                                    <Image src={image4} width="100%" alt="Shameer's Photo" thumbnail />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Shameer Dar</h4>
                                    <h4><b>Role</b> : Front-End Developer</h4><br />
                                    <Row>
                                        <Col class="col-sm">
                                            <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col class="col-sm">
                                            <a href="https://github.com/Shameer28" target="_blank"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                            <Row>
                                <Col>
                                    <Image src={image3} width="100%" height="100%" alt="Haaris's Photo" thumbnail />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Haaris Moghal <br /></h4>
                                    <h4><b>Role</b> : Front-End Developer</h4><br />
                                    <Row>
                                        <Col>
                                            <a href="https://www.linkedin.com/in/haaris-moghal-60b8b0159/" target="_blank"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/HaarismoghalQA" target="_blank"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                            <Row>
                                <Col>
                                    <Image src={image7} width="100%" height="100%" alt="Andrew's Photo" thumbnail />
                                </Col>
                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Andrew McCall <br /></h4>
                                    <h4><b>Role</b> : Back-End Developer</h4><br />
                                    <Row>

                                        <Col>
                                            <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/Andrew-McCall" target="_blank"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div >
                        <br></br>
                        <div style={{ width: "100%", marginRight: "auto", marginLeft: "auto", backgroundColor: "white", border: "solid" }}>
                            <Row>
                                <Col>
                                    <Image src={image2} width="100%" height="100%" alt="Oliver's Photo" thumbnail />
                                </Col>

                                <Col style={{ margin: "auto", width: "50%" }}>
                                    <h4><b>Name</b> : Oliver Dillion <br /></h4>
                                    <h4><b>Role</b> : Back-End Developer</h4><br />
                                    <Row>
                                        <Col>
                                            <a href="https://www.linkedin.com/in/oliverdillon" target="_blank"><Image src={image6} width="73%" height="100%" alt="LinkedIn" thumbnail /></a>
                                        </Col>
                                        <Col>
                                            <a href="https://github.com/StarLight-Oliver" target="_blank"><Image src={image8} width="95%" height="100%" alt="Github" thumbnail /></a>
                                        </Col>
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