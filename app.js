const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
    gallery: document.querySelector('.js-gallery'),
    overlay: document.querySelector('.lightbox__overlay'),
    modal: document.querySelector('.js-lightbox'),
    modalContent: document.querySelector('.lightbox__content'),
    closeBtn: document.querySelector('[data-action="close-lightbox"]'),
    originImage: document.querySelector('.lightbox__image'),
}

// ?????????????? ??????????????
let galleryArr = [];

galleryItems.forEach(galleryItem => {
    let imageItem = `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img class="gallery__image" 
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}" />
        </a>
    </li>`

    galleryArr.push(imageItem);
});
refs.gallery.insertAdjacentHTML('beforeend', galleryArr.join(''));




refs.gallery.addEventListener('click', openModal); // ?????????????????? ?????????? ???? ????????????????
refs.closeBtn.addEventListener('click', closeModal); // ?????????????????? ?????????? ???? ???????????? ????????????????
refs.overlay.addEventListener('click', closeModal); // ?????????????????? ?????????? ???? ??????????????
document.addEventListener('keydown', (event) => { // ?????????????????? ???? Esc
    if (event.key === 'Escape') {
        closeModal()
    }
});



function openModal(event) {
    event.preventDefault();
    refs.modal.classList.add('is-open');

    let modalImageSrc = event.target.getAttribute('data-source');
    let modalImageAlt = event.target.getAttribute('alt');
    refs.originImage.setAttribute('src', modalImageSrc); // ???????????? src ???????????????? ?? ??????????????
    refs.originImage.setAttribute('alt', modalImageAlt); // ???????????? alt ???????????????? ?? ??????????????
}

function closeModal() {
    if (refs.modal.classList.contains('is-open')) {
        refs.modal.classList.remove('is-open');
        refs.originImage.removeAttribute('src');
        refs.originImage.removeAttribute('alt');
    }
}