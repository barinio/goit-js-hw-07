import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");
const galleryItemMarkup = markup(galleryItems);

function markup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
	<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
	`;
    })
    .join("");
}
ul.innerHTML = galleryItemMarkup;

ul.addEventListener("click", onImageOpenModal);

function onImageOpenModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
}
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
