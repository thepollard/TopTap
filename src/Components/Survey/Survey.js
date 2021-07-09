import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import CustomBeers from "../CustomBeers/CustomBeers.js"
import BeerListItem from "../BeerList/BeerListItem.js";
import React from "react";

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function Survey() {
    return (
        <div>
            {/* Need to work on a better layout */}
            <CustomBeers />
            <form>
                <BeerListItem />
                <EmailShare />
                <SubmitAlert />
            </form>
        </div>
    );
  }