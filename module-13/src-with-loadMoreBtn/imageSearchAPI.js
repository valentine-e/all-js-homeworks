// const API_KEY = '20083881-2214319d02a94c8d12adf7e10';
// const BASE_URL = 'https://pixabay.com/api/';

// export default class SearchImage {
//   constructor() {
//     this.API_KEY = API_KEY;
//     this.BASE_URL = BASE_URL;
//     this.page = 1;
//     this.searchQuery = '';
//   }

//   async fetchImages() {
//     const response = await fetch(
//       `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=10`,
//     ).then(r => r.json());
//     return response.hits;
//   }

//   async searchImages(searchQuery) {
//     this.searchQuery = searchQuery;
//     this.page = 1;
//     return await this.fetchImages();
//   }

//   async loadMore() {
//     this.page++;
//     return await this.fetchImages();
//   }
// }

const API_KEY = '33584802-e836107f470a1a46170cd6658';

export default function searchImages(query, page = 1) {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=12&page=${page}`).then(
    response => response.json(),
  );
}

// .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));
