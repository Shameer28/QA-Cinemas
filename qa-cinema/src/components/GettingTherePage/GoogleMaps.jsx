import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import ApiKey from '../../api.json'
const GoogleMaps = () => {

    return (<div style={{ height: '600px', width: '100%' }}>
{/* <div style={{ height: '800px', width: '100%' } */}
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
                name="Marker"
                color="red"
            />

            <Marker
                lat={53.47486984108448}
                lng={-2.286237866636726}
                name="Marker"
                color="red"
            />
        </GoogleMapReact>
    </div>);
}

export default GoogleMaps;