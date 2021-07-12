import './Classification.css'
import Accordions from './Accordions';
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import image1 from './../img/classificationbanner.png'
import './Classification.css'


const Classification = () => {
    return (
        <div class="background">
            < Image src={image1} alt="About us photo" width="100%" />
            <Container>
                <br />
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Movie Content Rating System</h2>
                <br />
                <h3 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Ratings At A Glance :</h3><br />
                <Accordions />
            </Container>
            <br />

        </div>

    );
}

export default Classification;