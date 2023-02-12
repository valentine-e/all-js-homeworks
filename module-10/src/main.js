const Handlebars = require('handlebars');
import data from './menu.json';
const menu = document.querySelector('.js-menu');

/// ЦЕ ПРИКЛАД!!!
// const template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');
// // execute the compiled template and print the output to the console
// console.log(template({ doesWhat: 'rocks!' }));
/// ЦЕ ПРИКЛАД!!!

const markUp = `
{{#each this}}
<li class="menu__item">
  <article class="card">
    <img
      src="image"
      alt="{{name}}"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">{{ame}}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
    {{price}}
      </p>

      <p class="card__descr">
      {{description}}
      </p>

      <ul class="tag-list">
        {{#each ingredients}}<li class="tag-list__item">{{this}}</li>
        {{/each}}
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>В корзину
    </button>
  </article>
</li>
{{/each}}
`;

const template = Handlebars.compile(markUp);
menu.innerHTML = template(data);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

themeSwitcher.addEventListener('change', themeToggle);

if (!localStorage.getItem('ui-theme')) {
  bodyTheme.classList.add(Theme.LIGHT);
  localStorage.setItem('ui-theme', 'light');
}

if (localStorage.getItem('ui-theme') === 'dark') {
  bodyTheme.classList.add(Theme.DARK);
  themeSwitcher.checked = true;
}

if (localStorage.getItem('ui-theme') === 'light') {
  bodyTheme.classList.add(Theme.LIGHT);
}

function themeToggle() {
  bodyTheme.classList.toggle(Theme.LIGHT);
  bodyTheme.classList.toggle(Theme.DARK);

  if (bodyTheme.classList.contains(Theme.DARK)) {
    localStorage.setItem('ui-theme', 'dark');
  }

  if (bodyTheme.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('ui-theme', 'light');
  }
}
