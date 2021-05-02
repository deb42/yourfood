import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


const MapContainer = ({ partner, hoveredPartner, selectedPartner, onMarkerHover, onMarkerSelect, onBoundsChange }) => {
  const defaultProps = {
    center: {
      lat: 51.95816,
      lng: 7.6387
    },
    zoom: 11
  };

  const _onChildClick = (key, childProps) => {
    if (onMarkerSelect) {
      onMarkerSelect(key);
    }
  }

  const _onChildMouseEnter = (key, childProps) => {
    if (onMarkerHover) {
      onMarkerHover(key);
    }
  }

  const _onChildMouseLeave = (/* key, childProps */) => {
    if (onMarkerHover) {
      onMarkerHover("");
    }
  }

  const _onBoundsChange = (center, zoom , bounds, marginBounds ) => {
    onBoundsChange(bounds);
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChildClick={_onChildClick}
        onChildMouseEnter={_onChildMouseEnter}
        onChildMouseLeave={_onChildMouseLeave}
        onBoundsChange={_onBoundsChange}
      >
        {partner.map((p, i) => (
          <Marker key={p.partnerId}
            lat={p.position.lat}
            lng={p.position.lng}
            partner={p}
            hoveredAtTable={p.partnerId === hoveredPartner}
            selectedAtTable={p.partnerId === selectedPartner}
          />


        ))}
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;
