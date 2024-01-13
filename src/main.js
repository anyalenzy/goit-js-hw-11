import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import errorImg from '/img/error.svg';

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

const form = document.querySelector('.gallery-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
