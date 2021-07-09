import Contact from "./Contact";
import Email from "./Email";
import image1 from "./../img/contact-us-banner.png"

const ContactPage = () => {
    return (
        <div class="background">
            <img src={image1} alt="About us photo" width="100%" fluid /><br />
            <br></br>
            <div style={{width: "50%", marginRight: "auto", marginLeft: "auto", backgroundColor:"white", border: "solid"}}>
            <Contact />
            <Email/>
            
        </div>
        <br></br>

        </div >
    );
}

export default ContactPage;