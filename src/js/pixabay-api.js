fetch('https://pixabay.com/api/?q=${searchedQuery}&key=48292364-ad13d53928d4b39a49844bb07&image_type=photo&orientation=horizontal&safesearch=true').then(response => {
    if (!response.ok)
    { throw new Error(response.status); }
     return response.json();
}).then(data => {
    if (data.results.length === 0) {
        alert('"Sorry, there are no images matching your search query. Please try again!"');
        galleryEl.innerHTML = '';
        formSearch.reset();
        return;
     };
    const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');
    galleryEl.innerHTML = galleryTemplate;
 }).catch(err => {
    console.log(err);});