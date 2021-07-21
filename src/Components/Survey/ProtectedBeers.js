import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import CustomBeers from "../CustomBeers/CustomBeers.js";
import DoGeolocation from "../Geolocation/DoGeolocation.js";
import { GetCoords } from "../Geolocation/GetCoords.js";
import GetCoordsWorking from "../Geolocation/GetCoorsWorking.js";
import ReviewHome from "../Review/ReviewHome.js";
import React from "react";
import './survey.css';

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function ProtectedBeers() {
    return ( 
        <div className="survey">
            <div className="background">
                <CustomBeers />
                <ReviewHome />
                <GetCoordsWorking />
                <EmailShare />
                <SubmitAlert />
            </div>
        </div>
    );
}