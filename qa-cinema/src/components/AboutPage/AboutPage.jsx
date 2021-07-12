import './AboutPage.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from './../img/aboutus.png'
import image2 from './../img/oliver.jpg'
import image3 from './../img/haaris.jpg'
import image7 from './../img/andrew.jpg'
import image4 from './../img/shameer.jpg'
import image5 from './../img/social.jpg'
import Container from 'react-bootstrap/Container';

const AboutPage = () => {
    return (
        <div class="background">

            <Image src={image1} alt="About us photo" width="100%" fluid /><br />
            <div style={{ margin: "auto", width: "50%" }}>
                <Container>
                    <div>
                        <h1>Meet the Team</h1><br />
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={image4} width="100%" alt="Shameer's Photo" thumbnail />
                                    <p><b>Name</b> : Shameer Dar<br /></p>
                                    <b>Role</b> : Front-End Developer<br />
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={image5} width="100%" alt="LinkedIn & GitHub logos" thumbnail />
                                    <p><b>Social Media:</b><br />
                                        LinkedIn: <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank">https://www.linkedin.com/in/shameer</a><br />
                                        GitHub: <a href="https://github.com/Shameer28" target="_blank">https://github.com/Shameer28</a></p>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={image3} width="100%" height="100%" alt="Haaris's Photo" thumbnail />
                                    <p><b>Name</b> : Haaris Moghal <br /></p>
                                    <p><b>Role</b> : Front-End Developer<br /></p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={image5} width="100%" alt="LinkedIn & GitHub logos" thumbnail />
                                    <p><b>Social Media:</b><br />
                                        LinkedIn: <a href="https://www.linkedin.com/in/haaris-moghal-60b8b0159/" target="_blank">https://www.linkedin.com/in/haaris</a><br />
                                        GitHub: <a href="https://github.com/HaarismoghalQA" target="_blank">https://github.com/HaarismoghalQA</a></p>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={image7} width="100%" height="100%" alt="Andrew's Photo" thumbnail />
                                    <p><b>Name</b> : Andrew McCall <br /></p>
                                    <p><b>Role</b> : Back-End Developer<br /></p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={image5} width="100%" alt="LinkedIn & GitHub logos" thumbnail />
                                    <p><b>Social Media:</b><br />
                                        LinkedIn: <a href="https://www.linkedin.com/in/shameer-dar-91b120a5/" target="_blank">https://www.linkedin.com/in/shameer</a><br />
                                        GitHub: <a href="https://github.com/Andrew-McCall" target="_blank">https://github.com/Andrew-McCall</a></p>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src={image2} width="100%" height="100%" alt="Oliver's Photo" thumbnail />
                                    <p><b>Name</b> : Oliver Dillion <br /></p>
                                    <p><b>Role</b> : Back-End Developer<br /></p>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Image src={image5} width="100%" alt="LinkedIn & GitHub logos" thumbnail />
                                    <p><b>Social Media:</b><br />
                                        LinkedIn: <a href="https://www.linkedin.com/in/oliverdillon" target="_blank">https://www.linkedin.com/in/oliver</a><br />
                                        GitHub: <a href="https://github.com/StarLight-Oliver" target="_blank">https://github.com/StarLight-Oliver</a></p>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                    </div>

                </Container>


            </div>

        </div >
    );
}

export default AboutPage;