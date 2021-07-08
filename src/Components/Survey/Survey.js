import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import BeerListItem from "../BeerList/BeerListItem.js";
import React from "react";

export default function Survey() {
    return (
        <div>
            <form>
                <BeerListItem />
                <EmailShare />
                <SubmitAlert />
            </form>
        </div>
    );
  }