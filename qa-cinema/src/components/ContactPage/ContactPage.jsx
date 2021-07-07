import Email from "./Email";
import GoogleMaps from "../GettingTherePage/GoogleMaps";
import ContactInformation from "./ContactInformation";
import Container from 'react-bootstrap/Container';
const ContactPage = () => {
    return (
        <div>


            <Email />
            <br></br>
            <Container>
                <div style={{  }} >
                    <GoogleMaps />
                </div>
                <br></br>
                <ContactInformation />
            </Container>
            
            
        </div>
    );
}

export default ContactPage;