const myApiKey = '48292364-ad13d53928d4b39a49844bb07';
const urlApiBase = 'https://pixabay.com/api/';

export const fetchImages = async (searchedQuery) => {
    const response = await fetch(`${urlApiBase}?q=${searchedQuery}&key=${myApiKey}&image_type=photo&orientation=horizontal&safesearch=true`);
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
};