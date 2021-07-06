import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//importing the images
import image1 from './img/QACinemaOutside.jpg'
import image2 from './img/CinemaDesk.jpg'
import image3 from './img/InsideCinema.jpg'



const slideImages = [
    { image1 },
    { image2 },
    { image3 }
];



const Slideshow = () => {
    return (
        <div >
            {/* <div>
                    <p>Testing to see if the images work</p>
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3}/>
                </div> */}
            
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    )




};

export default Slideshow;