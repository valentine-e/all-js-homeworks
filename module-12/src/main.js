// import FetchCountriesAPI from './fetch-countries.js';
// import debounce from 'lodash.debounce';
// import countriesListTpl from './templates/countries-list.hbs';
// import countryCardTpl from './templates/country-card.hbs';
// import { notice, error, Stack } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';

// const refs = {
//   searchInputContainer: document.querySelector('.search-field'),
//   searchInput: document.querySelector('[data-search-input]'),
//   searchList: document.querySelector('[data-search-list]'),
//   cardEl: document.querySelector('.card'),
// };

// const notificationsStack = new Stack({
//   dir1: 'left',
//   firstpos1: 20,
//   context: refs.searchInputContainer,
//   maxOpen: 1,
//   maxStrategy: 'close',
//   maxClosureCausesWait: false,
// });
// const notificationOptions = {
//   stack: notificationsStack,
//   hide: true,
//   delay: 1500,
//   width: '260px',
// };

// const FetchCountries = new FetchCountriesAPI();
// refs.searchInput.addEventListener('input', debounce(onInput, 500));

// function onInput(e) {
//   const searchQuery = e.target.value.toLowerCase();
//   if (searchQuery) {
//     FetchCountries.search(searchQuery).then(populateCountries).catch(showWarning);
//   } else {
//     populateCountries([]);
//   }
// }

// function populateCountries(data) {
//   const countries = [];

//   data.map(e => countries.push(e));

//   if (countries.length === 0) {
//     refs.searchList.innerHTML = '';
//   }

//   if (countries.length === 1) {
//     refs.searchList.innerHTML = '';
//     console.log(countries[0]);
//     refs.cardEl.innerHTML = countryCardTpl(countries[0]);
//   }

//   if (countries.length <= 10 && countries.length > 1) {
//     refs.cardEl.innerHTML = '';
//     refs.searchList.innerHTML = countriesListTpl(countries);
//   }

//   if (countries.length > 10) {
//     notice({
//       ...notificationOptions,
//       text: 'Too many mathces found. Please, enter more specific query.',
//     });
//   }
// }

// function showWarning() {
//   refs.searchList.innerHTML = '';
//   error({
//     ...notificationOptions,
//     text: 'No matches found. Try again.',
//   });
// }
import _ from 'lodash';
import fetchCountries from './fetch-countries';
import { alert, notice, info, success, error } from '@pnotify/core';

const input = document.querySelector('input[data-search-input]');
const countryCard = document.querySelector('.card');
const countriesList = document.querySelector('ul[data-search-list]');

input.addEventListener(
  'input',
  _.debounce(event => {
    onInputChange(event);
  }, 500),
);

function onInputChange(event) {
  countryCard.innerHTML = '';
  countriesList.innerHTML = '';

  fetchCountries(event.target.value)
    .then(data => {
      if (data.length === 1) {
        data.forEach(({ name, capital, languages, population, flags }) => {
          countryCard.innerHTML = `<h2>${name}</h2>
        <h3>${capital}</h3>
        <p>${population}</p>
        <p>${languages.map(lang => lang.nativeName).join(', ')}</p>
        <img src="${flags.svg}" alt="country flag"/>`;
        });
      } else if (data.length >= 2 && data.length <= 10) {
        data.forEach(({ name }) => {
          countriesList.insertAdjacentHTML('afterbegin', `<li>${name}</li>`);
        });
      } else if (data.length > 10) {
        info({
          text: 'Too many matches found. Please try more specific query!',
          // hide: true,
          delay: 2000,
        });
      }
    })
    .catch(error => {
      alert({ text: error });
    });
}
