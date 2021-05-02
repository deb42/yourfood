import React, { useState } from 'react';
import firebase from "../../firebase"
import GoogleMapReact from 'google-map-react';


const Map = (props) => {

    const [partner, setPartner] = useState([]);
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("partner").get();
            setPartner(data.docs.map(doc => doc.data()));
        }

        fetchData();
    }, []);

    const defaultProps = {
        center: {
            lat: 51.95816,
            lng: 7.6387
        },
        zoom: 9
    };

    const Marker = (props) => {
        return (
            <object
                data={"/mapIcons/" + props.type + ".svg"}
                type="image/svg+xml"
                width={30} height={30} />
        )
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '450px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    gestureHandling: "cooperative"
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {partner.map((p, i) => (
                    <Marker key={p.partnerId}
                        lat={p.position.lat}
                        lng={p.position.lng}
                        type={p.type[0]} />
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
