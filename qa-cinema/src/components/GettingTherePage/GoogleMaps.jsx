import GoogleMapReact from 'google-map-react';
import Directions from 'google-map-react';
import Marker from './Marker'
import ApiKey from '../../api.json'
const GoogleMaps = () => {

    return (<div style={{ height: '600px', width: '100%' }}>

        <GoogleMapReact
            bootstrapURLKeys={{ key: ApiKey.Api.api }}
            defaultCenter={{
                lat: 53.47566305627514,
                lng: -2.241819282720947
            }}
            defaultZoom={17} >
            <Marker
                lat={53.47566305627514}
                lng={-2.241819282720947}
                name="QA Training Building 1"
                color="red"
            />

            <Marker
                lat={53.47486984108448}
                lng={-2.286237866636726}
                name="QA Training Building 2"
                color="red"
            />
                   

        </GoogleMapReact>

    </div >
    );
}

export default GoogleMaps;