import Tables from "./Tables";
import { Container, Image } from 'react-bootstrap'
import image1 from './../img/openingtimes.png'
import './OpeningTimesPage.css'

const OpeningTimesPage = () => {
    return (
        <div class="background">
            < Image src={image1} alt="About us photo" width="100%" /> <br />
            <br />

            <Container>
                <h2 style={{
                    color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1", textAlign: "center"}}>QA Cinemas' Opening Hours :</h2>
                <br/>
                <Tables />
                <br/>
            </Container>
        </div>
    );
}

export default OpeningTimesPage;