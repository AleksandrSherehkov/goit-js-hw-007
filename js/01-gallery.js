import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const creatGalleryMarkup = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join(' ');
};

galleryEl.insertAdjacentHTML('beforeend', creatGalleryMarkup(galleryItems));

const onGettingBigImage = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}">`);
  modal.show(() => {
    document.addEventListener('keydown', onClosingModalByPressingEsc);
  });

  const onClosingModalByPressingEsc = e => {
    if (e.code === 'Escape') {
      modal.close(() => {
        document.removeEventListener('keydown', onClosingModalByPressingEsc);
      });
    }
  };
};

galleryEl.addEventListener('click', onGettingBigImage);

// !Вариант 2 разбивает на функции
// const creatItemMarkup = ({ preview, original, description }) => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
// };

// const creatGalleryMarkup = () => {
//   return galleryItems.map(() => creatItemMarkup(galleryItems)).join(' ');
// };
