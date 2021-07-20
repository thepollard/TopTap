// BottleService.js enables the data manipulation in Back4App
import Parse from "parse";

export const createBeer = (Name) => {
  console.log("Creating: ", Name);
  const Beer = Parse.Object.extend("Beer");
  const beer = new Beer();
    beer.set("name", Name);
    beer.set("user", Parse.User.current());
  return beer.save().then((result) => {
      return result;
  });
};

export const getById = (id) => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.get(id).then((result) => {
    return result;
  });
};

export const getAllBeers = () => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.find().then((results) => {
    return results;
  });
};

export const removeBeer = (id) => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.get(id).then((beer) => {
    beer.destroy();
  });
};
