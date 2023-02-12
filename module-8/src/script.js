import galleryItems from "./app.js";

const gallery = document.querySelector(".gallery");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__overlay");

galleryItems.map((el) => {
  const galleryItem = ` <li class="gallery__item">
      <a
        class="gallery__link"
        href="${el.original}"
      >
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </li>`;
  gallery.innerHTML += galleryItem;
});

function openModal(element) {
  lightbox.classList.add("is-open");
  lightboxImage.src = element.dataset.source;
  lightboxImage.alt = element.alt;
}

function closeModal() {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

function onGalleryClick(e) {
  e.preventDefault();
  openModal(e.target);
}

function onCloseButtonClick() {
  closeModal();
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

gallery.addEventListener("click", onGalleryClick);
closeButton.addEventListener("click", onCloseButtonClick);
overlay.addEventListener("click", onOverlayClick);
