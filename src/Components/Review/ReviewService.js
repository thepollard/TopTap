import Parse from "parse";

//Creates a new review in Parse back4app when review box submit button is clicked
export const createReview = (NewReview) => {
  const Review = Parse.Object.extend("Review");
  const review = new Review();
    review.set("review", NewReview);
    review.set("user", Parse.User.current());
    return review.save().then((result) => {
        return result;
    });
};