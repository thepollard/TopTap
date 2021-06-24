// Function for calling axios to pull data from the json file
export function getBeers() {
  const axios = window.axios;
  return axios.get("../Services/beer.json").then((response) => {
    return response.data;
  });
}
