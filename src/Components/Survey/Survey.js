import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import CustomBeers from "../CustomBeers/CustomBeers.js"
import BeerListItem from "../BeerList/BeerListItem.js";
import React from "react";

export default function Survey() {
    return (
        <div>
            <CustomBeers />
            <form>
                <BeerListItem />
                <EmailShare />
                <SubmitAlert />
            </form>
        </div>
    );
  }