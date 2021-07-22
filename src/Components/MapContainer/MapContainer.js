import React, { useState, useEffect }from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


//Component finds current location and displays it in Google Maps
const MapContainer = () => {
    const [ currentPosition, setCurrentPosition ] = useState({});
    const success = position => {
        const currentPosition = {
            // Sets currentPosition lat and long to current geolocated position
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
      };
    
    //Collects current geolocation position
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    //Sets the size of the map in the form
    const mapStyles = {        
        height: "50vh",
        width: "100%"};
    
    //Default location to load
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    //Loads currentPosition into a Google Map in the form
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