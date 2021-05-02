import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import firebase from "../firebase"
//import firebase as fb from "firebase";

const mapStyles = {
  width: '90%',
  height: '450px'
};

const MapContainer = props => {
  const [partner, setPartner] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("partner").get()
      setPartner(data.docs.map(doc => doc.data()))
    }

    fetchData()
  }, [])

  return (
    <React.Fragment>
      <Map
        google={props.google}
        zoom={8}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        rotateControl={false}
        fullscreenControl={false}
        gestureHandling={"cooperative"}
        style={mapStyles}
        initialCenter={{
          lat: 51.95816,
          lng: 7.6387
        }}
      >
        {partner.map((p, i) => (
          <Marker key={p.partnerId}
            title={p.name}
            name={p.name}
            position={{ lat: p.position.lat, lng: p.position.lng }}
            icon={{
              url: "/mapIcons/" + p.type[0] + ".svg",
              anchor: new props.google.maps.Point(32, 32),
              scaledSize: new props.google.maps.Size(32, 32)
            }}
          />
        ))}
      </Map>
    </React.Fragment>
  );

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBSkK3o9PG2sVpv_23cBvPZbyDEJIrzAaU')
})(MapContainer)