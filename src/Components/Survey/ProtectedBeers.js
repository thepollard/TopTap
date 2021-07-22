
import SubmitAlert from "../Submit/SendBeer.js";
import CustomBeers from "../CustomBeers/CustomBeers.js";
import MapContainer from "../MapContainer/MapContainer.js";
import ReviewHome from "../Review/ReviewHome.js";
import React from "react";
import './survey.css';
// import BeerMail from "../Email/BeerMail"
import SendBeer from "../Submit/SendBeer.js";

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function ProtectedBeers() {
    return ( 
        <div className="survey">
            <div className="background">
                <CustomBeers />
                <ReviewHome />
                <MapContainer />
                <EmailShare />
                <SubmitAlert />
                {/* <BeerListItem /> */}
                {/* <EmailShare /> */}
                <SendBeer />
            </div>
        </div>
    );
}