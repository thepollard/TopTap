import React, { useEffect, useState } from "react";
import {
  getAllBeers,
  getById,
  createBeer,
  removeBeer
} from "../Services/BottleService.js";
import CustomBeersForm from "./CustomBeersForm.js";
import '../Survey/survey.css';

const CustomBeersList = () => {
  const [beers, setBeers] = useState([]);
  const [beer, setBeer] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    getAllBeers().then((beers) => {
      console.log(beers);
      setBeers(beers);
    });

    getById("P4ZuEgSRMl").then((beer) => {
      console.log(beer);
      setBeer(beer);
    });
  }, []);

  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  useEffect(() => {
    if (name && add) {
      createBeer(name).then((newBeer) => {
        setAdd(false);
        setBeers([...beers, newBeer]);
      });
    }

    if (remove.length > 0) {
      const newBeers = beers.filter((beer) => beer.id !== remove);
      setBeers(newBeers);

      removeBeer(remove).then(() => {
        console.log("Removed Beer with ID: ", remove);
      });
      setRemove("");
    }
  }, [name, beers, add, remove]);

  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="custom-beers-list">
      <CustomBeersForm onClick={onClickHandler} onChange={onChangeHandler} />
      <div>
        {beers.length > 0 && (
          <ul>
            {beers.map((custom) => (
              <div>
                <span>
                  <li key={custom.id}>
                    {custom.get("name")}
                    <button
                      onClick={(e) => {
                        setRemove(custom.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
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
