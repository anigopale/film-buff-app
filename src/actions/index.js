
export function fetchMovie(term) {
  return function(dispatch) {
    const url = `http://www.omdbapi.com/?t=${term}&apikey=aabca0d`;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })

    return {
      type: "",
      payload: ""
    }
  }
}
