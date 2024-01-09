function fetchPictures(pictureName, page) {
  return fetch(
    `https://pixabay.com/api/?q=${pictureName}&page=1&key=40230641-302a0b52d2e6bfc5ca13bc736&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }

    return Promise.reject(
      new Error(`There are no pictures with "${pictureName}" request`)
    );
  });
}

const api = {
  fetchPictures,
};
export default api;
