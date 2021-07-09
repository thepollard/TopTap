import React, { useEffect, useState } from "react";
import {
  getAllBeers,
  getById,
  createBeer,
  removeBeer
} from "../Services/BottleService.js";
import CustomBeersForm from "./CustomBeersForm.js";

/* STATEFUL PARENT COMPONENT */
const CustomBeersList = () => {
  // Variables in the state to hold data
  const [beers, setBeers] = useState([]);
  const [beer, setBeer] = useState([]);
  const [name, setName] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllBeers().then((beers) => {
      console.log(beers);
      setBeers(beers);
    });

    getById("iMnRXuVnUU").then((beer) => {
      console.log(beer);
      setBeer(beer);
    });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (name && add) {
      createBeer(name).then((newBeer) => {
        setAdd(false);
        // Add the newly created beer to the beers array
        // to render the new list of beers (thru spread/concatination)
        setBeers([...beers, newBeer]);

        //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
        //beers = beers.push(beer)
        //setBeers(beers)
      });
    }

    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old beers list to take out selected beer
      const newBeers = beers.filter((beer) => beer.id !== remove);
      setBeers(newBeers);

      removeBeer(remove).then(() => {
        console.log("Removed Beer with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [name, beers, add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create beer and
    // re-render list with new beer
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setName(e.target.value);
  };

  return (
    <div>
      {/* Stateless Child component passing up events from form */}
      <CustomBeersForm onClick={onClickHandler} onChange={onChangeHandler} />
      <div>
        {beers.length > 0 && (
          <ul>
            {beers.map((beer) => (
              <div>
                <span>
                  {/* Using getter for beer Object to display name */}
                  <li key={beer.id}>{beer.get("name")}</li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of beer for remove state variable*/}
                  <button
                    onClick={(e) => {
                      // Set remove variable and trigger re-render
                      setRemove(beer.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomBeersList;
