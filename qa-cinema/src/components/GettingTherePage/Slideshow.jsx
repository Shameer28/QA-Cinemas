import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from './../img/QACinemaOutside.jpg'
import image2 from './../img/CinemaDesk.jpg'
import image3 from './../img/InsideCinema.jpg'

const Slideshow = () => {

    return (
        <div className="slide-container" >

            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${image1})`, height: '800px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${image2})`, height: '800px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${image3})`, height: '800px', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    )




};

export default Slideshow;