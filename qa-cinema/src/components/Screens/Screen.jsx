import { Container } from "react-bootstrap";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Card from 'react-bootstrap/Card'
import { Arrows } from 'react-slideshow-image';
import image1 from './img/4k.jpg'
import image2 from './img/CinemaPov1.jpg'
import image3 from './img/CinemaPov2.jpg'
import image4 from './img/SeatingPlan.jpg'
import image5 from './img/TheatreSeats.jpg'
import image6 from './img/deluxeBox.jpg'




const Screen = () => {

    const title = '';
    const setTitle = title;



    return (
        <div class="background">            
            <Carousel controls={false} slide={true} fade={true} pause={false}>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        class= "carouselImage"
                        src={image6}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>           
            <Container>
                <h2 style={{ color: "white", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1" }}>Book your seats</h2>
                <br></br>
                <Card className="text-center">
                    <Card.Header>Screens Booking Information</Card.Header>
                    <Card.Body>
                        <Card.Title>Choose your seats</Card.Title>
                        <Card.Text>
                            <img src={image4} alt="Image of seating plan" width="50%" />
                            <p>
                                The Criterion Theatre has a capacity of 566 seats, including 406 seats in the Stalls, 124 seats in the Circle and 33 seats in the Box.

                            </p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                <br></br>
                <Card className="text-center">
                    <Card.Header>Standard Seats</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <img src={image5} alt="Image of seating plan" width="45%" />
                            <p>
                                Seats in a theater with a thrust stage are arranged around the stage on three sides and raked so that the audience can see the action.
                                In an arena theater with a circular stage, the seats ring the stage and the stage itself is raised for audience visibility.
                                Black box theaters have no fixed seating and no fixed stage--they are adapted for each show.
                            </p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                <br></br>
                <Card className="text-center">
                    <Card.Header>Deluxe Seats</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <img src={image6} alt="Image of seating plan" width="45%" />
                            <p>
                                Box seats ring around the screen, one level up.
                                Boxes are divided by walls or curtains and the private compartments each have a few to half-a-dozen chairs arranged in rows.
                                Sometimes, the back row of chairs is on a raised platform so that everyone in the box has an unobstructed view of the stage.
                            </p>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </Container>
            <br></br>
        </div>
    );
}

export default Screen;