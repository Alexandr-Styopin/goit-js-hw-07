import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
};

const galleryTemplate = ( {preview, original, description} ) => 
    `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;

    const render = () => {
        const galleryList = galleryItems.map((galleryItem) => galleryTemplate(galleryItem)).join('');
    
        refs.gallery.insertAdjacentHTML('beforeend', galleryList);
    };
    
    render();
    
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });

console.log(galleryItems);
