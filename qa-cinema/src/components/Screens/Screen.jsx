import { Container } from "react-bootstrap";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from './img/SeatingPlan.jpg'
import image2 from './img/TheatreSeats.jpg'
import image3 from './img/TheatreSeatsLeft.jpg'
import image4 from './img/TheatreSeatsRight.jpg'
import image5 from './img/deluxeBox.jpg'

const Screen = () => {

    const title = '';
    const setTitle = title;


    return (
        <div>
            <Container>
                <h1 style={{ display: "flex", margin: "auto", width: "50%", height: "100%" }}><u>Inside QACinema</u></h1>
            </Container>
            
            <div style={{ backgroundColor: "white"}}>
                <div className="slide-container" >

                    <Slide easing="ease">
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${image1})`, height: '600px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                            
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${image2})`, height: '600px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${image3})`, height: '600px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${image4})`, height: '600px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${image5})`, height: '600px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <Container>
                    <div>
                        This is the screen room POV.
                    </div>
                </Container>
        </div>
    );
}

export default Screen;