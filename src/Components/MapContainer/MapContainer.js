import React, { useState, useEffect }from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const [ currentPosition, setCurrentPosition ] = useState({});
    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
      };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const mapStyles = {        
        height: "50vh",
        width: "100%"};
    

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

  return (
      <div>
          <h1>Share your location:</h1>
     <LoadScript
       googleMapsApiKey='AIzaSyCoir47YKh1huaP53fJ7wkSW5ibTZbVXMk'>
           <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
              {
                  currentPosition.lat &&
                  (
                      <Marker position={currentPosition}></Marker>
                  )
              }
        </GoogleMap>
      </LoadScript>
      </div>
  )
}

export default MapContainer;