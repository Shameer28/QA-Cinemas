import Iframe from 'react-iframe'
import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const GoogleMapsDirections = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            
            <Iframe
                name="output_frame"
                width="100%"
                height="100%"
                frameborder="1" style="border:1"
                src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyA-BrSbgrDnbvYCFXP6JyfDJDgCf_O0EfA&origin=London&destination=QA+Ltd+-+Manchester+(Oxford+Street)&avoid=tolls|highways&mode=transit" allowfullscreen>
            </Iframe>
            
        </div>

    );
}

export default GoogleMapsDirections;