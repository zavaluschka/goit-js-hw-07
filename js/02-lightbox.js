import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGal = document.querySelector(".gallery");
console.log(galleryItems);
function createMarkup() {
  let markup = "";
  for (let i = 0; i < galleryItems.length; i++) {
    markup += `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      alt="${galleryItems[i].description}"
    >
    
  </a>
</li>`
  }
  containerGal.innerHTML = markup;
} 
createMarkup();
let lightbox = new SimpleLightbox(".gallery a", {
    captions: 'true',
    captionsData: "alt",
    captionsPosition: "botton",
    captionsDelay: 250
});
