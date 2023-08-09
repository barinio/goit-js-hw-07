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
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener("keydown", this.handler);
      },
      onClose() {
        document.removeEventListener("keydown", this.handler);
      },
    }
  );
  instance.show();

  document.addEventListener("keydown", closeModal);
  function closeModal(e) {
    if (e.keyCode !== 27) {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", closeModal);
  }
}
