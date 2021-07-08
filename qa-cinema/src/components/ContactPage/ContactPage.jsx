import Contact from "./Contact";
import Email from "./Email";
import image1 from "./../img/contact-us-banner.png"
const ContactPage = () => {
    return (
        <div class="background">
            <img src={image1} alt="About us photo" width="100%" fluid /><br />
            <Contact />
            <Email />
            <br></br>
            
        </div>
    );
}

export default ContactPage;