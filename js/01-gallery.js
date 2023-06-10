import { galleryItems } from './gallery-items.js';
// Change code below this line\\

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup)

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
  }).join("");
};

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const swatchEl = evt.target;
  
  if (!swatchEl.classList.contains("gallery__image")) {
    return;
  }

  const gallaryLargeImgSource = swatchEl.dataset.source
   
  addModalWindowGallery(gallaryLargeImgSource);
  
};

function addModalWindowGallery(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);
  instance.show();
}




