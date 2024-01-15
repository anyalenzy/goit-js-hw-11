import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import errorIcon from '/img/error.svg';

const url = 'https://pixabay.com/api/';

const searchParams = {
  key: '41804111-1b8e3eb7a4ad0f0fdba68370e',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 18,
};

const simpleGallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  if (!searchInput.value.trim()) {
    showErrormsg('Please, fill out the search field');
    return;
  }
  fetchPhotos()
    .then(photos => createGallery(photos))
    .catch(error => showErrormsg(error.toString()))
    .finally(() => form.reset());
}

function fetchPhotos() {
  gallery.innerHTML = '';
  loader.style.display = 'inline-block';
  searchParams.q = searchInput.value.trim();
  const searchParamsString = new URLSearchParams(searchParams).toString();
  return fetch(`${url}?${searchParamsString}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function createGallery(photos) {
  if (photos.hits.length === 0) {
    showErrormsg(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    loader.style.display = 'none';
    return;
  }
  const markup = photos.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${likes}</span>
              <span><b>Views:</b> <br/>${views}</span>
              <span><b>Comments:</b> <br/>${comments}</span>
              <span><b>Downloads:</b> <br/>${downloads}</span>
            </div>
          </a>
        </li>
                  `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
  loader.style.display = 'none';
  simpleGallery.refresh();
}

function showErrormsg(msg) {
  iziToast.show({
    position: 'topRight',
    iconUrl: errorIcon,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    backgroundColor: '#EF4040',
    close: false,
    closeOnClick: true,
    closeOnEscape: true,
    message: msg,
  });
}
