// List of beers imported.

import React, { Component } from "react";
import Beers from "../Services/beer";
import '../Survey/survey.css'

export class BeerListItem extends Component {
    render() {
        return(
            <div>
                <br />
                <h1>Or pick some from our list:</h1>
                <ul className="beer-list">
                    {Beers.beers.map((item, i) => (
                        <li key={i}>
                        <input type="checkbox" id={item.id} name={item.name} value={item.name} />
                        <label htmlFor="{index}"> <b>Name:</b> {item.name} </label>
                      </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default BeerListItem;