import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import GoogleMaps from "../GettingTherePage/GoogleMaps";



const Contact = () => {
  return (
    <div style={{ backgroundColor: "#212529", color: "white" }}>
      <div >
        <Container className="p-3">
          <Container>

            <Row>
              <Col>
                <Jumbotron>
                  <div style={{ border: "solid", borderColor: "black" }}>
                    <GoogleMaps />
                  </div>
                </Jumbotron>
              </Col>

              <Col style={{ margin: "auto", width: "50%" }}>
                <div style={{ margin: "auto" }}>
                  <div class="text" ><h2><u>Feel free to get in contact with us:</u></h2> </div>
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
                    <a href="mailto:SDar@qa.com">SDar@qa.com</a>
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