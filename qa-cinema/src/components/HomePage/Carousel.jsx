import Carousel from 'react-bootstrap/Carousel'
import image1 from '../img/BlackWidow.jpg'
import image2 from '../img/F9Landscape.jpg'
import image3 from '../img/JamesBondLandscape.jpg'

const Carousels = () => {
    return (
        <Carousel controls={true} fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"                    
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"                    
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
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