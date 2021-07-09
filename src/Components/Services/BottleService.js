import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new lesson with Name
export const createBeer = (Name) => {
  console.log("Creating: ", Name);
  const Beer = Parse.Object.extend("Beer");
  const beer = new Beer();
  // using setter to UPDATE the object
  beer.set("name", Name);
  return beer.save().then((result) => {
    // returns new Lesson object
    return result;
  });
};

// READ operation - get lesson by ID
export const getById = (id) => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// READ operation - get all lessons in Parse class Lesson
export const getAllBeers = () => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.find().then((results) => {
    // returns array of Lesson objects
    return results;
  });
};

// DELETE operation - remove lesson by ID
export const removeBeer = (id) => {
  const Beer = Parse.Object.extend("Beer");
  const query = new Parse.Query(Beer);
  return query.get(id).then((beer) => {
    beer.destroy();
  });
};
