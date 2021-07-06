import Container from 'react-bootstrap/Container';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


const GettingThere = () => {

    return (
        <Container>
            <h1><u>Getting There</u></h1>
            <h2>Map</h2>
            <div style={{ height: '800px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAsZATOk3fWHMx7kVUlDbqQzbozoGdMev8" }}
                    defaultCenter={{
                        lat: 53.47566305627514,
                        lng: -2.241819282720947
                    }}
                    defaultZoom={17} >
                    <Marker
                        lat={53.47566305627514}
                        lng={-2.241819282720947}
                        name="Marker"
                        color="red"
                    />
                </GoogleMapReact>
            </div>
            <h2><u>Address</u></h2>
            <p>
                8, St James's Bldg,<br />61-95 Oxford St <br />Manchester <br />M1 6FQ
            </p>
            <br />
            <h2><u>Directions</u></h2>
            <h3><u>Bus</u></h3>
            <p>Busses available within the area: 42B, 43, 101, 102, 103, 111, 142, 143, 147</p>
            <p>

            </p>
            <h3><u>Train</u></h3>
            <p>41 CrossingCity</p>

            
            <h2><u>Parking</u></h2>
            <p>Pay and Display: All fuel types: £6 per hour (£3 per half hour, £1.50 for 15mins) </p>
            
            
        </Container >
    )
}

export default GettingThere