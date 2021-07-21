import { useState } from 'react';
import Parse from "parse";

export const GetCoords = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
        
    navigator.geolocation.getCurrentPosition((position) => {
        // setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        const Locale = Parse.Object.extend("Locale");
        const locale = new Locale();
            locale.set("latitude", lat);
            locale.set("longitude", lng);
            locale.set("user", Parse.User.current()); 
        return locale.save().then((result) => {
            return result;
        });    
    });   

    // return (
    //     <div>
    //         <button onClick={getLocation}>Get Location</button>
    //         <h1>Coordinates</h1>
    //         <p>{status}</p>
    //         {lat && <p>Latitude: {lat}</p>}
    //         {lng && <p>Longitude: {lng}</p>}
    //     </div>
    // );
};