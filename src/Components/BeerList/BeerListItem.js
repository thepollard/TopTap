import React, { Component } from "react";
import Beers from "../Services/beer";

export class BeerListItem extends Component {
    render() {
        return(
            <div>
                <br />
                <h3>Or pick some from our list:</h3>
                <ul>
                    {Beers.beers.map((item, i) => (
                        <li key={i}>
                        <input type="checkbox" id={item.id} name={item.name} value={item.name} />
                        <label for="{index}"> <b>Name:</b> {item.name} </label>
                      </li>
                        ))}
                </ul>
            </div>
        )
    }
}

export default BeerListItem;