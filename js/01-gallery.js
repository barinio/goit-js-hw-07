import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

function createImgMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<li class="gallery__item">
      <a class="gallery__link" href="${original}}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
</li>
		`;
    })
    .join("");
}
ulEl.insertAdjacentHTML("beforeend", imgMarkup);

ulEl.addEventListener("click", onImgPopUp);

function onImgPopUp(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => document.querySelector("keydown", onEscPress),
      onClose: () => document.querySelector("keydown", onEscPress),
    }
  );
  instance.show();

  function onEscPress(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
