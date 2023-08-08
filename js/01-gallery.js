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
      >
    
  </a>
</li>`
  }
  containerGal.innerHTML = markup;
} 
 createMarkup() 
   
// containerGal.insertAdjacentHTML("beforeend", markup)
containerGal.addEventListener("click", onclick);
function onclick(event) {
  for (let i = 0; i < galleryItems.length; i++){
    if (event.target.getAttribute("src") === galleryItems[i].preview) {
      const instance = basicLightbox.create(`<img src="${galleryItems[i].original}" width="1280" height ="800">`)
        instance.show()
      event.preventDefault()
      document.body.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          instance.close()
        }
      })
    }
    
  }
 
}

console.log(galleryItems);
