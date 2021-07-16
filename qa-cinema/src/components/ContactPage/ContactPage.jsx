import Contact from "./Contact";
import Email from "./Email";
import image1 from "./../img/contact-us-banner.png"

const ContactPage = () => {
  return (
    <div class="background">
      <img src={image1} alt="ContactUS" width="100%" fluid /><br />
      <br></br>
      <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto", backgroundColor: "#212529", border: "solid" }}>
        <Contact />
        <Email />
      </div>


      <br></br>

    </div >
  );
}

export default ContactPage;
// style = {{ backgroundColor: , color: "white", border: "solid", borderColor: "black" }}