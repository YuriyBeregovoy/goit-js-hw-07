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
  console.log(gallaryLargeImgSource);


  // const curentActiveCard = document.querySelector(".gallery__item.is-active");
  // if (curentActiveCard) {
  //   curentActiveCard.classList.remove("is-active");
  // }
  // const parentGallaryCard = swatchEl.closest(".gallery__item")
  // parentGallaryCard.classList.add("is-active");

  
};


