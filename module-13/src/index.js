// import './sass/main.scss';
// import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
// import imageTemplate from './templates/image.hbs';
// import SearchImageAPI from './imageSearchAPI';
// import * as basicLightbox from 'basiclightbox';
// import { addBackToTop } from 'vanilla-back-to-top';

// const SearchImage = new SearchImageAPI();
// const refs = {
//   imageContainer: document.querySelector('[data-image-container]'),
//   searchForm: document.querySelector('[data-search-form]'),
//   sentinel: document.querySelector('#sentinel'),
// };

// const observer = new IntersectionObserver(onEntry, { rootMargin: '250px' });
// observer.observe(refs.sentinel);

// refs.searchForm.addEventListener('submit', onFormSearch);
// document.body.addEventListener('click', onBodyClick);

// addBackToTop({
//   backgroundColor: '#0d6efd',
//   showWhenScrollTopIs: 600,
// });

// async function onFormSearch(event) {
//   event.preventDefault();
//   const searchQuery = event.target.elements.searchQuery.value;

//   const images = await SearchImage.searchImages(searchQuery);
//   refs.imageContainer.innerHTML = imageTemplate(images);
// }

// function onBodyClick(event) {
//   if (event.target.dataset.imageFull) {
//     const options = {
//       onShow: () => {
//         document.body.style.overflow = 'hidden';
//       },
//       onClose: () => {
//         document.body.style.overflow = 'initial';
//       },
//     };
//     basicLightbox
//       .create(`<img src="${event.target.dataset.imageFull}" width="800" height="600">`, options)
//       .show();
//   }
// }

// async function loadMore() {
//   const images = await SearchImage.loadMore();
//   refs.imageContainer.insertAdjacentHTML('beforeend', imageTemplate(images));
// }

// function onEntry(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && SearchImage.searchQuery !== '') {
//       loadMore();
//     }
//   });
// }

import searchImages from './imageSearchAPI';
import * as basicLightbox from 'basiclightbox';

const searchForm = document.querySelector('form[data-search-form]');
const galleryMarkup = document.querySelector('.gallery');
const loadMoreImgBtn = document.querySelector('.load-btn');
const scrollEl = document.querySelector('div.row');
// const imageItem = document.querySelectorAll('.photo-card');
let page = 1;
let query = '';

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onLoadBtnClick();
      }
    });
  },
  {
    threshold: 1,
  },
);

searchForm.addEventListener('submit', onFormSubmit);
loadMoreImgBtn.addEventListener('click', onLoadBtnClick);
// imageItem.addEventListener('click', openModalImage);

function onFormSubmit(event) {
  event.preventDefault();

  galleryMarkup.innerHTML = '';
  page = 1;
  query = event.target.elements[0].value;

  if (query) {
    searchImages(query).then(data => {
      createMarkupdata(data);
      const images = document.querySelectorAll('.photo-card>img');
      images.forEach(el => el.addEventListener('click', onImageClick));
      observer.observe(document.querySelector('#sentinel'));

      // if (data.hits.length) {
      //   loadMoreImgBtn.classList.remove('hidden');
      // }
    });
  }
}

function onImageClick(e) {
  const url = e.target.dataset.original;
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show();
}

function onLoadBtnClick() {
  page += 1;
  searchImages(query, page).then(data => {
    createMarkupdata(data);
    setTimeout(() => {
      scrollEl.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }, 500);
  });
}

function createMarkupdata(data) {
  data.hits.map(({ webformatURL, largeImageURL, likes, views, comments, downloads }) => {
    galleryMarkup.insertAdjacentHTML(
      'beforeend',
      `<li class="photo-card">
      <img data-original=${largeImageURL} src="${webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
     ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
     ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
    ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
  ${downloads}
    </p>
  </div>
</li>`,
    );
  });
}
