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
  
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const swatchEl = evt.target;
  const gallaryLargeImgSource = swatchEl.dataset.source
   
  const instance = basicLightbox.create(`
    <img src="${gallaryLargeImgSource}" width="800" height="600">
  `);

  instance.show();
  
};






