import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import CustomBeers from "../CustomBeers/CustomBeers.js";
import BeerListItem from "../BeerList/BeerListItem.js";
import React from "react";
import './survey.css';

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function ProtectedBeers() {
    return ( 
        <div className="survey">
            <div className="background">
                <CustomBeers />
                <BeerListItem />
                <EmailShare />
                <SubmitAlert />
            </div>
        </div>
    );
}