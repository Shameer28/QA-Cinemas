import Email from "./Email";
import GoogleMaps from "../GettingTherePage/GoogleMaps";
import ContactInformation from "./ContactInformation";
import Container from 'react-bootstrap/Container';
import image1 from './../img/contact-us-banner.png'
const ContactPage = () => {
    return (
        <div class="background">
            <img src={image1} alt="About us photo" width="100%" fluid /><br />


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