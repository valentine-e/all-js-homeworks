//
export default function fetchCountries(query) {
  return fetch(`https://restcountries.com/v2/name/${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.status) {
        throw new Error(data.message);
      }
      return data;
    });
}
