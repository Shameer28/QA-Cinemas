import './Classification.css'
import Accordions from './Accordions';
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import image1 from './../img/classificationbanner.png'
import './Classification.css'


const Classification = () => {
    return (
        <div>

            < Image src={image1} alt="About us photo" width="100%" /> <br />


            <Container>
                <h1>Movie Content Rating System</h1><br />

                <h2>Ratings At A Glance :</h2><br />
                <Accordions />
            </Container>


        </div>

    );
}

export default Classification;