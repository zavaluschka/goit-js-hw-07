import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGal = document.querySelector(".gallery");


function createMarkup() {
  let markup = "";
  for (let i = 0; i < galleryItems.length; i++) {
    markup += `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
      target="_parent">
    
  </a>
</li>`
  }
  containerGal.innerHTML = markup;
} 
 createMarkup() 
   
containerGal.insertAdjacentHTML("beforeend", markup)
containerGal.addEventListener("click", onclick);
// function onclick (event => )

console.log(galleryItems);
