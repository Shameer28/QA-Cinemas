import Iframe from 'react-iframe'
import React from 'react';


const GoogleMapsDirections = () => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            
            <Iframe
                width="100%"
                height="100%"
                frameborder="1" style="border:1"
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-BrSbgrDnbvYCFXP6JyfDJDgCf_O0EfA&q=QA+Ltd+-+Manchester&zoom=15" allowfullscreen>
            </Iframe>
           
        </div>

    );
}

export default GoogleMapsDirections;