import React, {
  html,
  useState,
  useEffect
} from "react";
import { getBeers } from "./Beers/Beers.js";

// Function puts beer names in an array and returns them with checkboxes
export function BeerListItem() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    return getBeers().then((data) => {
      setBeers(data);
    });
  });

  //this will display a list of beers with check boxes
  return html`
    <ul>
      ${beers.map(
        ({ id, name }, index) =>
          html` <li key="${index}">
            <input type="checkbox" id=${id} name=${name} value=${name} />
            <label for="${index}"> <b>Name:</b> ${name} </label>
          </li>`
      )}
    </ul>
  `;
}
