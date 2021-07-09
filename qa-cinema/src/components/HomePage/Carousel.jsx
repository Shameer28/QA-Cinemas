import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
import image1 from '../img/MovieThumbnails/BlackWidow.jpg'
import image2 from '../img/MovieThumbnails/F9Landscape.jpg'
import image3 from '../img/MovieThumbnails/JamesBondLandscape.jpg'

const Carousels = () => {
    return (
        <Carousel controls={false} slide={true} fade={true} pause={false}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />               
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;