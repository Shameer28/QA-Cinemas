import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './img/QACinemaOutside.jpg'
import image2 from './img/CinemaDesk.jpg'
import image3 from './img/InsideCinema.jpg'
import image4 from './img/sony4k.jpg'
import  './Carousels.css'
const Carousels = () => {

    return (
        <div>
            

            <Carousel controls={false} slide={true} fade={true} pause={false}>
                <Carousel.Item interval={3000}>
                    <img
                        class="images"
                        src={image4}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class="images"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class="images"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class="images"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>

    )




};

export default Carousels;