import Tables from "./Tables";
import { Container, Image } from 'react-bootstrap'
import image1 from './../img/openingtimes.png'
import './OpeningTimesPage.css'

const OpeningTimesPage = () => {
    return (
        <div>
            < Image src={image1} alt="About us photo" width="100%" /> <br />
            <br />

            <Container>
                <h1 id="o1">QA Cinemas' Opening Hours :</h1><br />
                <Tables />
            </Container>
        </div>
    );
}

export default OpeningTimesPage;