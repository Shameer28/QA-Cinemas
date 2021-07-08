import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";
import GoogleMaps from "../GettingTherePage/GoogleMaps";


const Contact = () => {

  const [showMessage, setShowMessage] = useState(false);

  const [Email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [TextArea, setTextArea] = useState('');



  const handleSubmit = (e) => {
    //Preventing the page from refreshing
    e.preventDefault();

    const dataToSend = JSON.stringify({ Email, FirstName, LastName, TextArea });
    console.log("data has been sent");
    console.log(dataToSend);


    //Setting the states back to ''
    setEmail('');
    setFirstName('');
    setLastName('');
    setTextArea('');


    // const handleSubmits = (e) => {
    //     e.preventDefault();
    //     axios({
    //         method: "POST",
    //         url: "http://localhost:3000/send",
    //         data: this.data
    //     }).then((response) => {
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             this.resetForm()
    //         } else if (response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     });
    // };
  }

  return (
    <div>
      <div >
        <Container className="p-3">
          <Container>
            <Row>
              <Col>
                <Alert show={showMessage} variant="success">
                  <Alert.Heading>Success</Alert.Heading>
                  <p>
                    This is an alert, and these can be shown in a variety of
                    styles provided by Bootstrap. Our form submit button simply
                    shows this alert. Another post will go through form validation
                    and errors.
                  </p>
                  <hr />
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col>
                <Jumbotron>
                  <GoogleMaps />
                </Jumbotron>
              </Col>

              <Col style={{ margin: "auto", width: "50%" }}>
                <div style={{ margin: "auto", width: "50%" }}>
                  <div class="text"><h2>Feel free to get in contact with us:</h2> </div>
                  <br></br>
                  <div>
                    <strong>Location: </strong>
                    8, St James's Bldg, 61-95 Oxford St, Manchester, M1 6FQ
                  </div>
                  <br></br>
                  <div>
                    <strong>Call Center: </strong>
                    <a href="tel:+44 (0)345 074 7995">+44 (0)345 074 7995</a>
                  </div>
                  <br></br>
                  <div>
                    <strong>Email Us: </strong>
                    <a href="#">SDar@qa.com</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Contact;