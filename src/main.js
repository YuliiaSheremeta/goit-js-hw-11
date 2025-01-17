import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

const formSearch = document.querySelector('.form');
const galleryEl = document.querySelector('.search-list');

const createGalleryCardTemplate = imgInfo => {
    return `<li class="gallery-card"><a href = "${imgInfo.largeImageURL}" > <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/><a/> <div class="info"><p>Likes: ${imgInfo.likes}</p><p>Views: ${imgInfo.views}</p><p>Comments: ${imgInfo.comments}</p><p>Downloads: ${imgInfo.downloads}</p></div > </li > `
};

const onFormSubmit = event => {
    event.preventDefault();
    const searchedQuery = event.currentTarget.elements.search.value.trim();
    
    if (searchedQuery === '') {
        alert('Enter text to search!');
        return;
    };

   fetch(`https://pixabay.com/api/?q=${searchedQuery}&key=48292364-ad13d53928d4b39a49844bb07&image_type=photo&orientation=horizontal&safesearch=true`).then(response => {
    if (!response.ok)
    { throw new Error(response.status); }
       return response.json();
       
}).then(data => {
    if (data.hits.length === 0) {
        alert('"Sorry, there are no images matching your search query. Please try again!"');
        galleryEl.innerHTML = '';
        formSearch.reset();
        return;
    };
    
    const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

    galleryEl.innerHTML = galleryTemplate;
    
    const lightbox = new SimpleLightbox('.gallery-card a', {
            captionDelay: 250,
            captionsData: 'alt',
        });
 }).catch(err => {
    console.error(err);});


};
formSearch.addEventListener('submit', onFormSubmit);
